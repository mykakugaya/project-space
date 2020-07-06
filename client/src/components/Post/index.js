import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { red } from '@material-ui/core/colors';
//some card action like like/delete posts?
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from "moment";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar";

const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[500],
    },
    card: {
        marginBottom: "10px"
    }
}));

function Post(props) {
    const classes = useStyles();
    const link = "/forum/" + props.id;

    return(
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <UserAvatar letter={props.author ? props.author[0] : "A"}/>
                }
                title={props.author}
                subheader={props.date}
            />
            <Divider/>
            <CardContent>
                <Typography color="textSecondary">
                    Category: {props.category}
                </Typography>
                <Typography variant="h6" component="h3" component={Link} to={link}>
                    {props.title}
                </Typography>
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