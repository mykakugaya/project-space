import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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

  const [favorite, setFavorite] = React.useState(false);
  const updateFavorite = () => {
    {favorite===false ? setFavorite(true) : setFavorite(false)}
  }

  return (
    <IconButton color="primary" aria-label="favorite" onClick={updateFavorite}>
      {favorite ? <FavoriteIcon className={classes.favBtn}/> : <FavoriteBorderIcon className={classes.favBtn}/>}
    </IconButton>
  )
}

export default FavIcon;
