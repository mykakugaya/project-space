import React, { useState, useEffect, useContext } from "react";
import Post from "../components/Post";
import ForumSearch from "../components/ForumSearch/forumSearch";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { red } from "@material-ui/core/colors";
import { createNewPost, getAllPosts } from "../utils/API";
import { userContext } from "../utils/userContext";
import moment from "moment";
const currentday = moment().format("YYYY-MM-DD");

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
    padding: "5px",
  },
  form: {
      alignContent: "center",
      marginBottom: "20px"
  },
  button: {
    padding: "5px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "white"
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Forum() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setnewPostBody] = useState("");
  const [newPostCategory, setnewPostCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState( "" );
  const [error, setError] = useState("");

  const { user } = useContext(userContext);

  useEffect(() => {
    getPosts(posts);
  }, [posts]);

  const validatePost = () => {
    return newPostTitle.length > 0 && newPostBody.length > 0;
  };

  const handleCreatePost = event => {
      event.preventDefault();
      if(!user) {
        console.log("You must log in or create an account.")
      }
      createNewPost( {
          title: newPostTitle,
          category: newPostCategory,
          body: newPostBody,
          UserId: user.id
      })
      .then ( () => {
        setNewPostTitle("");
        setnewPostBody("");
        setnewPostCategory("");
        console.log("New Post Saved");
      })
      .catch((err) => setError(err));
  };

  const getPosts = () => {
    getAllPosts()
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => setError(err));
  };

  const handleInputChange = (event) => {
    // const newSearch = event.target.value;
    // setSearch(newSearch);
    // searchImages(newSearch);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleFilteredPosts = (event) => {
    event.preventDefault();
    setFilteredPosts(event.target.value);
    console.log(filteredPosts);
  }

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
        <Grid constainer xs={12}>
          <h1 className={classes.header}>Forum Feed</h1>
        </Grid>
        <Grid container
          justify="center"
          alignItems="center"
          className={classes.root}>
            <Grid item={4}>
              <ForumSearch 
                handleFilteredPosts={handleFilteredPosts}/>
            </Grid>
            <Grid className={classes.form} item={8}>
              <Paper className={classes.paper}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="user" className={classes.avatar}>
                        S
                      </Avatar>
                    }
                    title={user ? user.name : "Please log in to post."}
                    subheader={currentday}
                  />
                  <Divider />
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      New Post
                    </Typography>
                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel id="demo-simple-select-outlined-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={newPostCategory}
                          onChange={(e) => setnewPostCategory(e.target.value)}
                          label="Category"
                        >
                          <MenuItem value={"Earth"}>Earth</MenuItem>
                          <MenuItem value={"Solar System"}>
                            Solar System</MenuItem>
                          <MenuItem value={"NASA"}>NASA</MenuItem>
                          <MenuItem value={"SpaceX Launches"}>
                            SpaceX Launches
                          </MenuItem>
                        </Select>
                      <TextField
                        className={classes.text}
                        id="outlined-multiline-static"
                        label="Title"
                        multiline
                        rows={1}
                        variant="outlined"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                      />
                      <br />
                      <TextField
                        className={classes.text}
                        id="outlined-multiline-static"
                        label="Post Content"
                        multiline
                        rows={5}
                        variant="outlined"
                        value={newPostBody}
                        onChange={(e) => setnewPostBody(e.target.value)}
                      />
                      <br />
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        disableElevation
                        disabled={!validatePost()}
                        onClick={handleCreatePost}
                      >
                        Post
                      </Button>
                    </FormControl>
                  </CardContent>
                </Card>
            </Paper>
          {
        //   filteredPosts ? 
        //     posts.filter(post => {
        //       post.category == filteredPosts;
        //       const date =
        //         post.createdAt.slice(0, 10) +
        //         " at " +
        //         post.createdAt.slice(11, 16);
        //     return (
        //       <Post
        //         key={post.id}
        //         id={post.id}
        //         date={date}
        //         title={post.title}
        //         category={post.category}
        //         body={post.body}
        //         author={post.User.name}
        //       />
        //     );
        //   }) : 
          posts.map((post) => {
            const date =
              post.createdAt.slice(0, 10) +
              " at " +
              post.createdAt.slice(11, 16);
            return (
              <Post
                key={post.id}
                id={post.id}
                date={date}
                title={post.title}
                category={post.category}
                body={post.body}
                author={post.User.name}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}

export default Forum;
