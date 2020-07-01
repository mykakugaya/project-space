import React, {useState, useEffect} from "react";
import Post from "../components/Post";
import ForumSearch from "../components/ForumSearch";

const useStyles = makeStyles({
    header: {
        textAlign: 'center',
        fontFamily: 'Playfair Display SC',
        fontSize: '70px',
        color: 'white'
      },
    root: {
      backgroundColor: '#424242'
    }
});

function Forum() {
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [currentForum, setCurrentForum] = useState("");
    const [error, setError] = useState("");
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        getPosts(posts);
    }, [posts]);

    const getPosts = () => {
        // ImageAPI.search(search)
        // .then(res => {
        //     const results = res.data.collection.items;
        //     if (results.length === 0) {
        //         throw new Error("No results found.");
        //     }
        //     setImages(results);
        // })
        // .catch(err => setError(err));
    }

    const handleInputChange = event => {
        // const newSearch = event.target.value;
        // setSearch(newSearch);
        // searchImages(newSearch);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        // searchImages(search);
    };

    const handleTabChange = value => {
        // setCurrentTab(value);
    }

    return (
        <div>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
            <Grid item xs={12} >
            <h1 className={classes.header} >Forum Feed</h1>
            </Grid>
            {/* <Grid item xs={12} >
            <GalleryTabs handleTabChange={handleTabChange}/>
            </Grid>
            {currentTab === 0 ? 
            <>
            <Grid item xs={12}>
            <ForumSearch
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            results={search}
            />
            </Grid>
            <Grid item xs={12}>
            <ImageGrid images={images} />
            </Grid>
            </>
            : <ImageGrid images={favorites} updateFavorites={updateFavorites}/>} */}
        </Grid>
        </div>
    );
      
}

export default Forum;