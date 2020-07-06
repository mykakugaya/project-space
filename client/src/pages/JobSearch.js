import React from "react";
import JobForm from "../components/JobForm";
import JobAPI from "../utils/JobAPI";
import Paper from '@material-ui/core/Paper';

function JobSearch() {
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [distance, setDistance] = useState(0);
    const [query, setQuery] = useState("");
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      searchJobs(search);
    }, [search]);

    const searchJobs = search => {
        JobAPI.search(search)
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
        searchQuery();
    };
    const handlePostChange = event => {
        const newPost = event.target.value;
        setPost(newPost);
        setQuery();
    };
    const handleDistChange = event => {
        const newDistance = event.target.value;
        setDistance(newDistance);
        setQuery();
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        createQuery();
    };

    const createQuery = () => {
        const titlequery = "job-title=" + title;
        const postquery = title ? ("&postal-code=" + post) : ("postal-code=" + post);
        const distquery = "&distance=" + distance;
        let newQuery = "";
        title ? newQuery += titlequery : newQuery;
        post ? newQuery += postquery : newQuery;
        distance ? newQuery += distquery : newQuery;

        searchJobs(newQuery);
    }
  
    return (
      <div>
        <Paper>
            <h1>Job Search</h1>
            <JobForm
            handleTitleChange={handleTitleChange}
            handlePostChange={handlePostChange}
            handleDistChange={handleDistChange}
            handleFormSubmit={handleFormSubmit}
            />
          <List>
              {jobs.map(job => {
                  <JobResult name={job.title} />
              })}
          </List>
        </Paper>
      </div>
    );
  }
  
  export default JobSearch;
