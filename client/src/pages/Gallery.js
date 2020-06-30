import React,{useState, useEffect} from "react";
import ImageGrid from "../components/ImageGrid";
import ImageAPI from "../utils/ImageAPI";
import Grid from '@material-ui/core/Grid';
import SearchForm from "../components/SearchForm";

function Gallery() {
    const [search, setSearch] = useState("Milky Way");
    const [images, setImages] = useState([]);
    // const [modal, setModal] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      searchImages(search);
    }, [search]);

    const searchImages = search => {
        ImageAPI.search(search)
        .then(res => {
          const results = res.data.collection.items;
          console.log(results);
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
  
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} >
            <h1>Image/Video Gallery</h1>
          </Grid>
          <Grid item xs={12}>
            <SearchForm
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            results={search}
            />
          </Grid>
          <Grid item xs={12}>
            <ImageGrid images={images} />
          </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Gallery;
