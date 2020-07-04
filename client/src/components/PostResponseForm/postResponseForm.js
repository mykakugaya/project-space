// import React, {useState, useEffect} from "react";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import { red } from '@material-ui/core/colors';
// //some card action like like/delete posts?
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import DeleteIcon from '@material-ui/icons/Delete';
// import moment from "moment";

// const useStyles = makeStyles((theme) => ({
//     text: {
//         width: "100ch",
//         padding: "5px"
//       },
//       form: {
//           alignContent: "center"
//       },
//       button: {
//           padding: "5px"
//       },
//       avatar: {
//         backgroundColor: red[500],
//       }
// }));

// function PostResponseForm(props) {
//     const classes = useStyles();

//     return(
//         <Card>
//             <CardHeader
//                 avatar={
//                 <Avatar aria-label="recipe" className={classes.avatar}>
//                     {props.author[0]}
//                 </Avatar>
//                 }
//                 title={props.author}
//                 subheader={props.date}
//             />
//             <Divider/>
//             <CardContent>
//                 <Typography color="textSecondary">
//                     {props.category}
//                 </Typography>
//                 <Typography variant="h6" component="h3">
//                       Response:
//                 </Typography>
//                 <form>
//                     <TextField className={classes.text}
//                         id="outlined-multiline-static"
//                         label="Title"
//                         multiline
//                         rows={1}
//                         variant="outlined"
//                         value={newPostTitle}
//                         onChange={e => setNewPostTitle(e.target.value)}
//                     />
//                     <br />
//                     <TextField className={classes.text}
//                         id="outlined-multiline-static"
//                         label="Post Content"
//                         multiline
//                         rows={5}
//                         variant="outlined"
//                         value={newPostBody}
//                         onChange={e => setnewPostBody(e.target.value)}
//                     />
//                     <br />
//                     <Button className={classes.button}
//                         variant="contained" 
//                         color="primary" 
//                         disableElevation disabled={!validatePost()}
//                         onClick={handleCreatePost}
//                     >Post
//                     </Button>
//                 </form>
//             </CardContent>
//             {/* <CardActions disableSpacing>
//                 <IconButton
//                 className={clsx(classes.expand, {
//                     [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//                 >
//                     <FavoriteIcon />
//                 </IconButton>
//                 <IconButton
//                 className={clsx(classes.expand, {
//                     [classes.expandOpen]: expanded,
//                 })}
//                 onClick={handleExpandClick}
//                 aria-expanded={expanded}
//                 aria-label="show more"
//                 >
//                     <DeleteIcon />
//                 </IconButton>
//             </CardActions> */}
//         </Card>
//     )
// }

// export default PostResponseForm;