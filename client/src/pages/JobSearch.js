import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import JobForm from "../components/JobForm";
import JobResult from "../components/JobResult";
import { getAllJobs } from "../utils/API";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

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
      marginLeft: "10px",
      marginRight: "10px"
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
    },
  }));

function JobSearch() {
    const classes=useStyles();
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [distance, setDistance] = useState(0);
    const [query, setQuery] = useState("");
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      searchJobs(query);
    }, [query]);

    const searchJobs = query => {
        getAllJobs(query)
        .then(res => {
            console.log(res);
            if (res.data.length === 0) {
                throw new Error("No job results found.");
            }
            setJobs(res.data);
        })
        .catch(err => setError(err));
    }
  
    const handleTitleChange = event => {
        const newTitle = event.target.value;
        setTitle(newTitle);
        createQuery();
    };
    const handlePostChange = event => {
        const newPost = event.target.value;
        setPost(newPost);
        createQuery();
    };
    const handleDistChange = event => {
        const newDistance = event.target.value;
        setDistance(newDistance);
        createQuery();
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        createQuery();
    };

    const createQuery = () => {
        const titlequery = "job-title=" + title;
        const postquery = title ? ("&country-code=us&postal-code=" + post) : ("country-code=us&postal-code=" + post);
        const distquery = "&distance=" + distance;
        let newQuery = "";
        title ? newQuery += titlequery : newQuery=newQuery;
        post ? newQuery += postquery : newQuery=newQuery;
        distance ? newQuery += distquery : newQuery=newQuery;

        searchJobs(newQuery);
    }
  
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
          <h1 className={classes.header}>Job Search</h1>
        </Grid>
        <Grid container direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}>
            <Grid item xs={4}>
                <JobForm
                handleTitleChange={handleTitleChange}
                handlePostChange={handlePostChange}
                handleDistChange={handleDistChange}
                handleFormSubmit={handleFormSubmit}
                />
            </Grid>
            <Grid item xs={8}>
                <Paper className={classes.paper}>
                    {jobs ?
                    <List>
                        {jobs.map(job => {
                            return <JobResult key={job.id} title={job.position.title} company={job.company.name} location={job.postion.location.name}/>
                        })}
                    </List>
                    : <h3>No results found.</h3>}
                </Paper>
            </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
  
  export default JobSearch;
