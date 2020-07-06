import React, {useState, useEffect} from "react";
import {getSinglePost} from "../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { red } from '@material-ui/core/colors';
//some card action like like/delete posts?
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import moment from "moment";
import Post from "../components/Post";
import PostResponseForm from "../components/PostResponseForm";
import { useParams, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[500],
    },
}));

function PostPage() {
    const classes = useStyles();
    const [post, setPost] = useState({});
    const [error, setError] = useState("");
    const params = useParams();

    useEffect(() => {   
        getSinglePost(params.id)
        .then(res => {
            setPost(res.data);
            console.log(post);
        })
        .catch ( err => setError(err));
    }, [post]);

    // const date = post.createdAt.slice(0, 10) + " at " + post.createdAt.slice(11,16)

    return (
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
        >
        <Grid item xs={12}>
          <h1 className={classes.header}>Forum Feed</h1>
        </Grid>
        <Container>
          <Paper className={classes.paper}>
            <Grid className={classes.form} item xs={12}>
                <Post 
                //  date={date} 
                 title={post.title} category={post.category} body={post.body} author={post.User.name}/>
                <PostResponseForm key={post.id} postId={post.id} category={post.category} title={post.title}/>
            </Grid>
          </Paper>
        </Container>
    </Grid>
    )
    // return(
    //     <h1>Here</h1>
    // )
}

export default PostPage;