import React from "react";
import Grid from "../components/Grid";
import ImageAPI from "../utils/ImageAPI";
import Paper from '@material-ui/core/Paper';

function Gallery() {
    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);
    const [modal, setModal] = useState(false);
    const [error, setError] = useState("");
  
    useEffect(() => {
      searchImages(search);
    }, [search]);

    const searchImages = search => {
        ImageAPI.search(search)
        .then(res => {
            if (res.collection.items.length === 0) {
                throw new Error("No results found.");
            }
            setImages(res.collection.items);
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
        <Paper style={{ minHeight: "100vh" }}>
            <h1>Image/Video Gallery</h1>
            <SearchForm
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
            results={search}
            />
          <Grid images={images} />
        </Paper>
      </div>
    );
  }
  
  export default Gallery;
