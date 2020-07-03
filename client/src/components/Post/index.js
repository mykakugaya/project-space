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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[500],
    },
}));

function Post(props) {
    const classes = useStyles();
    const currentday = moment().format("YYYY-MM-DD");

    return(
        <Card>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {props.author[0]}
                </Avatar>
                }
                title={props.author}
                subheader={currentday}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.body}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post;