import React, {useState, useEffect} from "react";
import {getSinglePost} from "../utils/API";
import { makeStyles } from '@material-ui/core/styles';
//some card action like like/delete posts?
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Post from "../components/Post";
import PostResponseForm from "../components/PostResponseForm";
import { useParams, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    header: {
        textAlign: "center",
        fontFamily: "Playfair Display SC",
        fontSize: "70px",
        color: "white",
        marginTop: "100px"
      },
      error: {
        color: "white",
        textAlign: "center"
      }
}));

function PostPage() {
    const classes = useStyles();
    const [post, setPost] = useState({});
    const [date, setDate] = useState("");
    const [error, setError] = useState("");
    const params = useParams();

    useEffect(() => {   
        getSinglePost(params.id)
        .then(res => {
            if (!res.data) {
                setError("Post cannot be found")
            }
            // console.log(res.data)
            setPost(res.data);
            setDate(post?.createdAt.slice(0, 10) + " at " + post?.createdAt.slice(11,16));
        })
        .catch ( err => {
            console.log(err);
        });
    }, [post]);


    return (
        <div>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
        >
            <Grid item xs={12}>
            <h1 className={classes.header}>Forum Post</h1>
            </Grid>
            <Container>
                <h3 className={classes.error}>{error ? error : ""}</h3>
                <Grid className={classes.form} item xs={12}>
                    <>
                        <Post 
                        date={date} 
                        title={post.title} category={post.category} body={post.body} author={post?.User?.name}/>
                        <PostResponseForm key={post.id} postId={post.id} category={post.category} title={post.title}/>
                    </>
                </Grid>
            </Container>
        </Grid>
        </div>
    )
    // return(
    //     <h1>Here</h1>
    // )
}

export default PostPage;