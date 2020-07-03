import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import FavIcon from "../FavIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  gridList: {
    width: "80em",
    height: 'auto',
    justifyContent: "center"
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  message: {
    color: 'white'
  }
}));

export default function ImageGridList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
        {props.images ? props.images.map((tile) => {
          return (
              <GridListTile key={tile.nasa_id} cols={1}>
                <span className={classes.imageSrc} style={{
                  backgroundImage: `url(${tile.src})`
                }}/>
                <FavIcon image={props.userFav? {...tile,isFav:true} : {...tile, isFav:false}}/>
              </GridListTile>
        )}) : <h2 className={classes.message}>No favorited images yet.</h2>}
      </GridList>
    </div>
  );
}