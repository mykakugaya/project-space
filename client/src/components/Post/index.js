import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { red } from "@material-ui/core/colors";
//some card action like like/delete posts?
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar";
import Avatar from "@material-ui/core/Avatar";
import { userContext } from "../../utils/userContext";
import { deletePost } from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  // avatar: {
  //   backgroundColor: red[500],
  // },
  card: {
    marginBottom: "10px",
  },
}));

function Post(props) {
  const classes = useStyles();
  const {user} = useContext(userContext);
  const link = "/forum/" + props.id;
  const postId = props.id;
  const [match, setMatch] = useState(false);

  const deleteUserPost = () => {
    if (window.confirm("Delete post?")) {
      deletePost(postId);
      window.location.reload();
    }
    return;
  };

// console.log(user?.id, props)
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          props.author ? <UserAvatar letter={props.author} /> : <UserAvatar />
        }
        title={props.author}
        subheader={props.date}
      />
      <Divider />
      <CardContent>
        <Typography color="textSecondary">
          Category: {props.category}
        </Typography>
        <Typography variant="h6" component="h3" component={Link} to={link}>
          {props.title}
        </Typography>
        <Typography color="textSecondary">
          ({props.responses ? props.responses : 0} responses)
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          {props.body}
        </Typography>
      </CardContent>
      { props.uid === user?.id ? 
      <CardActions disableSpacing>
        <IconButton onClick={deleteUserPost} aria-label="">
          <DeleteIcon />
        </IconButton>
      </CardActions> : <div></div>
      }
    </Card>
  );
}

export default Post;
