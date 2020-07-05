import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { red } from '@material-ui/core/colors';
//some card action like like/delete posts?
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from "moment";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[500],
    },
}));

function Post(props) {
    const classes = useStyles();
    const link = "/forum/" + props.id;

    return(
        <Card>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {props.author[0]}
                </Avatar>
                }
                title={props.author}
                subheader={props.date}
            />
            <Divider/>
            <CardContent>
                <Typography color="textSecondary">
                    Category: {props.category}
                </Typography>
                <Link to={link}>
                    <Typography variant="h6" component="h3" >
                        {props.title}
                    </Typography>
                </Link>
                <Typography variant="body1" color="textPrimary" component="p">
                    {props.body}
                </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions> */}
        </Card>
    )
}

export default Post;