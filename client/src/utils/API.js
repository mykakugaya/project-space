import axios from "axios";

// NASA APIs
export const getAllEvents = () => axios.get("api/events")
export const saveEvent = eventData => axios.post("api/events", eventData);
export const getAsteroid = () => axios.get("api/nasa/asteroid");
export const searchImage = q => axios.get(`api/nasa/image?q=${q}`);
export const getAPOD = () => axios.get("api/nasa/apod");
export const getJobs = () => axios.get("api/nasa/jobs");
export const getRover = () => axios.get("api/nasa/rover");
export const getSpaceXLaunch = () => axios.get("api/nasa/spacex");

// User APIs
export const postLogin = user => axios.post("/api/login", user);
export const getUsers = () => axios.get("/api/users");
export const postSignup = user => axios.post("/api/signup", user);
export const getLogout = () => axios.get("/api/logout")
export const getUserData = () => axios.get("/api/user_data");

//Image APIs
export const getFavoritesData = user => axios.get("/api/images", user);
export const updateFavoritesData = data => axios.post("/api/images", data);
export const deleteFavorite = data => axios.delete(`/api/image/${data.UserId}/${data.nasa_id}`);


// Posts APIs
export const getAllPosts = () => axios.get("/api/posts");
export const createNewPost = post => axios.post("/api/posts", post);
export const getSinglePost = id => axios.get(`/api/post/${id}`);
export const getPostbyCategory = category => axios.get(`api/posts/${category}`);
export const deletePost = data => axios.delete(`/api/post/${data}/`);

//Post Response APIs
export const getAllResponses = (postId) => axios.get(`/api/responses/${postId}`);
export const createNewResponse = (response) => axios.post("/api/responses", response);

//Job APIs
export const getAllJobs = query => axios.get(`/api/jobs/${query}`);
//import {getAPOD, getJob} from "/path to API.js"
//getAPOD().then(data=> do something with data;)
