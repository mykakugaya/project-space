import React, {useState, useEffect, useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import UserAvatar from "../UserAvatar";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { red } from '@material-ui/core/colors';
//some card action like like/delete posts?
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import { createNewResponse, getAllResponses, getSinglePost } from "../../utils/API";
import {userContext} from "../../utils/userContext";
import PostResponse from "../PostResponse";
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';

const currentday = moment().format("YYYY-MM-DD");

const useStyles = makeStyles((theme) => ({
    text: {
        width: "100ch",
        padding: "5px"
      },
      form: {
          alignContent: "center"
      },
      button: {
          padding: "5px"
      },
    //   avatar: {
    //     backgroundColor: red[500],
    //   },
      card: {
          marginBottom: "10px"
      }
}));

function PostResponseForm(props) {
    const {user} = useContext(userContext);
    const classes = useStyles();
    const [responses, setResponses] = useState([]);
    const [newResponseBody, setnewResponseBody] = useState("");
    const [error, setError] = useState("");

    const validatePost = () => {
        return newResponseBody.length > 0;
    }

    useEffect(() => {
        getSinglePost(props.postId)
        .then(res => {
        setResponses(res.data.Responses);
        })
        .catch ( err => setError(err));
    }, [responses]);

    const handleCreateResponse = event => {
        event.preventDefault();
        if(!user) {
          console.log("You must log in or create an account.")
        }
        createNewResponse({
            body: newResponseBody,
            PostId: props.postId
        })
        .then (() => {
          console.log("New Response Saved");
        })
        .catch ( err => setError(err));
    }

    return(
        <Container>
            <Paper>
                <Card className={classes.card}>
                    <CardHeader
                    avatar={user ?
                    <UserAvatar letter={user?.name}/>
                    : <UserAvatar/>
                    }
                    title={user ? user.name : "Please log in to respond."}
                    subheader={props.date}
                    />
                    <Divider/>
                    <CardContent>
                        <Typography color="textSecondary">
                            Category: {props.category}
                        </Typography>
                        <Typography color="textSecondary">
                            Responding to "{props.title}"
                        </Typography>
                        <form>
                            <TextField className={classes.text}
                                id="outlined-multiline-static"
                                label="Response Here"
                                multiline
                                rows={5}
                                variant="outlined"
                                value={newResponseBody}
                                onChange={e => setnewResponseBody(e.target.value)}
                            />
                            <br />
                            <Button className={classes.button}
                                variant="contained" 
                                color="primary" 
                                disableElevation disabled={!validatePost()}
                                onClick={handleCreateResponse}
                            >Post
                            </Button>
                        </form>
                    </CardContent>
                    {/* <CardActions disableSpacing>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                            <DeleteIcon />
                        </IconButton>
                    </CardActions> */}
                </Card>
                {responses.map(response => {
                    const date = response.createdAt.slice(0, 10) + " at " + response.createdAt.slice(11,16)
                    return <PostResponse key={response.id} date ={date} body={response.body} author={response.User?.name}/>
                })}
            </Paper>
        </Container>
    )
}

export default PostResponseForm;