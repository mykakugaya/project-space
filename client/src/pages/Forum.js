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
import UserAvatar from "../components/UserAvatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { createNewPost, getAllPosts, getPostbyCategory } from "../utils/API";
import { userContext } from "../utils/userContext";
import moment from "moment";
import Avatar from '@material-ui/core/Avatar';
import { filter } from "compression";
import { purple } from '@material-ui/core/colors';
const currentday = moment().format("YYYY-MM-DD");

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "30px"
  },
  header: {
    textAlign: "center",
    fontFamily: "Playfair Display SC",
    fontSize: "4rem",
    color: "white",
    marginTop: "100px"  
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary,
    marginBottom: "10px"
  },
  text: {
    width: "100%",
    margin: "auto"
  },
  form: {
      alignContent: "center",
      padding: "10px"
  },
  button: {
    padding: "5px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
    backgroundColor: "white",
    width: "100%",
  },
  h3: {
    color: "white",
    fontSize: "2rem"
  },
  search: {
    padding: "10px"
  },
  error: {
    color: "black"
  },
  root: {
    width: "100vw"
  }
   //   avatar: {
    //     backgroundColor: purple[500],
    //   }
}));

function Forum() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setnewPostBody] = useState("");
  const [newPostCategory, setnewPostCategory] = useState("");

  const [filterCategory, setfilterCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState("");

  const { user } = useContext(userContext);

  useEffect(() => {
    getPosts();
    if(filterCategory==="All") {
      setFilteredPosts(posts);
    } else {
      getPostbyCategory(filterCategory)
      .then(response => {
        setFilteredPosts(response.data.reverse());
      })
    }
  }, []);

  const validatePost = () => {
    return newPostTitle.length > 0 && newPostBody.length > 0;
  };

  const handleCreatePost = event => {
      event.preventDefault();
      if(!user) {
        setError("You must log in or create an account.")
        return;
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
      .catch((err) => console.log(err));
  };

  const getPosts = () => {
    getAllPosts()
      .then((res) => {
        setPosts(res.data.reverse());
        setFilteredPosts(res.data);
      })
      .catch((err) => console.log(err));
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
    const category = event.target.value
    if (category==="All" || null) {
      setfilterCategory(category);
      getAllPosts()
      .then(res => setFilteredPosts(res.data.reverse()))
    } else {
      setfilterCategory(category);
      getPostbyCategory(category)
      .then(response => {
        setFilteredPosts(response.data.reverse());
      })
    }
  }

  return (
    <div className={classes.container}>
      <Grid container justify="center" className={classes.root}
        alignItems="center" xs={12}>
          <h1 className={classes.header}>Forum Feed</h1>
        </Grid>
        
        <Grid container
          justify="flex-start"
          alignItems="flex-start"
          className={classes.center}
          >
            <Grid item xs={12} sm={4} className={classes.search}>
              <ForumSearch 
                handleFilteredPosts={handleFilteredPosts}/>
            </Grid>
            <Grid className={classes.form} item xs={12} sm={8}>
              <Paper className={classes.paper}>
                <Card>
                  <CardHeader
                    avatar={user ?
                      <UserAvatar className={classes.avatar} letter={user?.name}/>
                      : <UserAvatar/>
                    }
                    title={user ? user?.name : "Please log in to post."}
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
                          style={{marginBottom: "10px"}}
                        >
                          <MenuItem style={{color: "black"}} value={"Earth"}>Earth</MenuItem>
                          <MenuItem style={{color: "black"}} value={"Solar System"}>
                            Solar System</MenuItem>
                          <MenuItem style={{color: "black"}} value={"NASA"}>NASA</MenuItem>
                          <MenuItem style={{color: "black"}} value={"SpaceX Launches"}>
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
                      <p className={classes.error}>{error ? error : ""}</p>
                    </FormControl>
                  </CardContent>
                </Card>
            </Paper>
            <h3 className={classes.h3}>Recent Posts:</h3>
          {
          filteredPosts ? 
            filteredPosts.map(post => {
            const date =
              post.createdAt.slice(0, 10) +
              " at " +
              post.createdAt.slice(11, 16);
            return (
              <Post
                key={post.id}
                id={post.id}
                date={date}
                uid={post.UserId}
                title={post.title}
                category={post.category}
                body={post.body}
                author={post.User.name}
                responses={post.Responses.length}
              />
            );
          })
          :
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
              uid={post.UserId}
              responses={post.Responses.length}
              />
              );
            })}
        </Grid>
      </Grid>
  </div>
  );
}

export default Forum;
