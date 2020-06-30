import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "70em",
    height: 'auto',
  },
}));

export default function ImageGridList(props) {
  const classes = useStyles();
  const randomCol = () => {
    const randomNumber = Math.floor(Math.random() * 5);
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={5}>
        {props.images.map((tile) => (
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>
              <GridListTile key={tile.data[0].nasa_id} classes={{imgFullWidth: {width: "100%"}}}>
                <img src={tile.links[0].href} alt={tile.data[0].title} />
              </GridListTile>
            </Grid>
          </Grid>
        ))}
      </GridList>
    </div>
  );
}