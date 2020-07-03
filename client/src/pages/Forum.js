import React, { useState, useEffect, useContext } from "react";
import Post from "../components/Post";
import ForumSearch from "../components/ForumSearch";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { createNewPost, getAllPosts } from "../utils/API";
import {userContext} from "../utils/userContext";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    fontFamily: "Playfair Display SC",
    fontSize: "70px",
    color: "white",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  text: {
    width: "100ch",
    padding: "5px"
  },
  form: {
      alignContent: "center"
  },
  button: {
      padding: "5px"
  }
}));


function Forum() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setnewPostBody] = useState("");
  const [currentForum, setCurrentForum] = useState("");
  const [error, setError] = useState("");

  const {user} = useContext(userContext);

  useEffect(() => {
    getPosts(posts);
  }, [posts]);

  const validatePost = () => {
      return newPostTitle.length > 0 && newPostBody.length > 0;
  }

  const handleCreatePost = event => {
      event.preventDefault();
      createNewPost( {
          title: newPostTitle,
          body: newPostBody,
          author: user.name
      })
      .then ( () => {
        console.log("New Post Saved");
      })
      .catch ( err => setError(err));
  }

  const getPosts = () => {
    getAllPosts()
    .then(res => {
      setPosts(res.data);
    })
    .catch ( err => setError(err));
  };

  const handleInputChange = (event) => {
    // const newSearch = event.target.value;
    // setSearch(newSearch);
    // searchImages(newSearch);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleTabChange = (value) => {
    // setCurrentTab(value);
  };

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
          <h1 className={classes.header}>Forum Feed</h1>
        </Grid>
        <Container>
          <Paper className={classes.paper}>
            <Grid className={classes.form} item xs={12}>
              <form>
                <TextField className={classes.text}
                    id="outlined-multiline-static"
                    label="Title"
                    multiline
                    rows={1}
                    variant="outlined"
                    value={newPostTitle}
                    onChange={e => setNewPostTitle(e.target.value)}
                />
                <br />
                <TextField className={classes.text}
                    id="outlined-multiline-static"
                    label="Post Content"
                    multiline
                    rows={5}
                    variant="outlined"
                    value={newPostBody}
                    onChange={e => setnewPostBody(e.target.value)}
                />
                <br />
                <Button className={classes.button}
                  variant="contained" 
                  color="primary" 
                  disableElevation disabled={!validatePost()}
                  onClick={handleCreatePost}
                >Post
                </Button>
              </form>
            </Grid>
          </Paper>
          {posts.map(post => {
            return <Post key={post.id} title={post.title} body={post.body} author={post.author}/>
          })}
        </Container>
      </Grid>
    </div>
  );
}

export default Forum;
