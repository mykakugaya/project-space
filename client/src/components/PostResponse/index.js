import React, {useContext} from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import UserAvatar from "../UserAvatar";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteResponse} from "../../utils/API";
import {userContext} from "../../utils/userContext";

function PostResponse(props) {
    const {user} = useContext(userContext);
    const postId = props.id;
  
    const deleteUserResponse = () => {
      if (window.confirm("Delete response post?")) {
        deleteResponse(postId);
        window.location.reload();
      }
      return;
    };

    return(
        <Card>
            <CardHeader
                avatar={props.author ?
                    <UserAvatar letter={props.author}/>
                    : <UserAvatar/>
                }
                title={props.author}
                subheader={props.date}
            />
            <Divider/>
            <CardContent>
                <Typography variant="body1" color="textPrimary" component="p">
                    {props.body}
                </Typography>
            </CardContent>
            { props.uid === user?.id ? 
            <CardActions disableSpacing>
                <IconButton onClick={deleteUserResponse} aria-label="">
                <DeleteIcon />
                </IconButton>
            </CardActions> : <div></div>
            }
        </Card>
    )
}

export default PostResponse;