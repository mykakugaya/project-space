import React, {useState, useEffect, useContext} from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {userContext} from "../../utils/userContext"
const useStyles = makeStyles((theme) => ({
  favBtn: {
    position: "relative",
    top: "50%",
    zIndex: 10,
    color: "white"
  }
}));

function FavIcon(props) {
  const {user} = useContext(userContext);
  const classes = useStyles();

  const [favorite, setFavorite] = useState(props.image.isFav);

  const {fav, unfav} = useContext(userContext)

  const updateFavorite = (e) => {
    {favorite===false ? setFavorite(true) : setFavorite(false)}
  }

  return (
    <IconButton color="primary" aria-label="favorite" onClick={() => {
      if (!user) {
        window.alert("You must log in to favorite images")
      }
      if (favorite===false) {
        fav({
          nasa_id: props.image.nasa_id,
          title: props.image.title,
          src: props.image.src
        });
        updateFavorite()
      } else {
        unfav({
          nasa_id: props.image.nasa_id,
          title: props.image.title,
          src: props.image.src
        });
        updateFavorite()
      }
    }}>
      {favorite ? <FavoriteIcon className={classes.favBtn}/> : <FavoriteBorderIcon className={classes.favBtn}/>}
    </IconButton>
  )
}

export default FavIcon;
