import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {getFavoritesData, getUserData} from "../../utils/API";

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
    //Determine if an image is already favorited by user
    //setFavorite if true
    getUserData()
    .then(resp => {
      console.log(resp)
      const userId = resp.data.id;
      getFavoritesData(userId)
      .then((response) => {
        console.log(response);
        for (let i=0; i<response.length; i++) {
          if (props.image.data[0].nasa_id === response[i].id) {
            setFavorite(true);
          }
        }
      })
    })
  }

  const updateFavorite = () => {
    {favorite===false ? setFavorite(true) : setFavorite(false)}
  }

  return (
    <IconButton color="primary" aria-label="favorite" onClick={() => {
      props.updateFavorites({
        nasa_id: props.image.data[0].nasa_id,
        title: props.image.data[0].title,
        src: props.image.links[0].href
      });
      updateFavorite()}}>
      {favorite ? <FavoriteIcon className={classes.favBtn}/> : <FavoriteBorderIcon className={classes.favBtn}/>}
    </IconButton>
  )
}

export default FavIcon;
