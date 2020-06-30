import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
    marginBottom: '20px'
  },
});

export default function GalleryTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.handleTabChange(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="Gallery tabs"
      >
        <Tab icon={<ImageSearchIcon />} label="SEARCH" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      </Tabs>
    </Paper>
  );
}