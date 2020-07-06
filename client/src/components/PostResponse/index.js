import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import UserAvatar from "../UserAvatar";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
//some card action like like/delete posts?
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from "moment";

const useStyles = makeStyles((theme) => ({
    // avatar: {
    //   backgroundColor: red[500],
    // },
}));

function PostResponse(props) {
    const classes = useStyles();

    return(
        <Card>
            <CardHeader
                avatar={props.author ?
                    <UserAvatar letter={props.author}/>
                    : <UserAvatar/>
                }
                title={props.author}
                subheader={props.date}
            />
            <Divider/>
            <CardContent>
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

export default PostResponse;