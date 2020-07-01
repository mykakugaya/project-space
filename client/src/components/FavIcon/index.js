import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {getUserData} from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  favBtn: {
    position: "relative",
    top: "50%",
    zIndex: 10,
    color: "white"
  }
}));

function FavIcon(props) {
  const classes = useStyles();

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    determineFavorite();
  }, [favorite]);

  const determineFavorite = () => {
    const id = props.id;
    //Determine if an image is already favorited by user
    //setFavorite if true
    getUserData()
    .then((response) => {
      console.log(response);
      const favimages = response.images ? response.images.split() : [];
      for (let i=0; i<favimages.length; i++) {
        console.log(favimages[i]);
        if (id === favimages[i]) {
          setFavorite(true);
        }
      }
    })

  }

  const updateFavorite = () => {
    {favorite===false ? setFavorite(true) : setFavorite(false)}
  }

  return (
    <IconButton color="primary" aria-label="favorite" onClick={() => {
      props.updateFavorites(props.id);
      updateFavorite()}}>
      {favorite ? <FavoriteIcon className={classes.favBtn}/> : <FavoriteBorderIcon className={classes.favBtn}/>}
    </IconButton>
  )
}

export default FavIcon;
