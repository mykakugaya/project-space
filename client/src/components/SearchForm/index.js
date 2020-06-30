import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '0 auto',
    marginBottom: '40px'
  },
  input: {
    margin: `${theme.spacing(1)}px auto`,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchForm(props) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search NASA images"
        inputProps={{ 'aria-label': 'search NASA images' }}
        onChange={props.handleInputChange}
      />
      <IconButton type="button" className={classes.iconButton} aria-label="search" onClick={()=>props.handleFormSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}