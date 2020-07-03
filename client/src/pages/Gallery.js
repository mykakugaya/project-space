import React,{useState, useEffect, useContext} from "react";
import ImageGrid from "../components/ImageGrid";
import {searchImage} from "../utils/API";
import Grid from '@material-ui/core/Grid';
import ImageSearch from "../components/ImageSearch";
import GalleryTabs from "../components/GalleryTabs";
import { makeStyles } from '@material-ui/core/styles';
import {userContext} from "../utils/userContext"

const useStyles = makeStyles({
  header: {
    textAlign: 'center',
    fontFamily: 'Playfair Display SC',
    fontSize: '70px',
    color: 'white'
  }
});

function Gallery() {
    const classes = useStyles();
    const [search, setSearch] = useState("Milky Way");
    const [images, setImages] = useState([]);
    const [error, setError] = useState("");
    const [currentTab, setCurrentTab] = useState(0);
  
    useEffect(() => {
      searchImages(search);
    }, [search]);

    const {user} = useContext(userContext)
    const searchImages = search => {
        const favs = user?.Images?.map(a=> a.nasa_id);
        searchImage(search)
        .then(res => {
          const results = res.data.collection.items.map(a=>{
            if(favs.includes(a.data[0].nasa_id)){
              return {nasa_id: a.data[0].nasa_id, title: a.data[0].title, src: a.links[0].href, isFav: true}
            }else{
              return {nasa_id: a.data[0].nasa_id, title: a.data[0].title, src: a.links[0].href, isFav: false}
            }
          })
          if (results.length === 0) {
              throw new Error("No results found.");
          }
          
          setImages(results);
        })
        .catch(err => setError(err));
    }
  
    const handleInputChange = event => {
        const newSearch = event.target.value;
        setSearch(newSearch);
        searchImages(newSearch);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        searchImages(search);
    };

    const handleTabChange = value => {
      setCurrentTab(value);
    }
  
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
          <Grid item xs={12} >
            <h1 className={classes.header} >Image Gallery</h1>
          </Grid>
          <Grid item xs={12} >
            <GalleryTabs handleTabChange={handleTabChange}/>
          </Grid>
          {currentTab === 0 ? 
          <>
          <Grid item xs={12}>
            <ImageSearch
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            results={search}
            />
          </Grid>
          <Grid item xs={12}>
            <ImageGrid images={images}/>
          </Grid>
          </>
          : <ImageGrid images={user.Images} userFav={true}/>}
        </Grid>
      </div>
    );
  }
  
  export default Gallery;
