import axios from "axios";

// NASA APIs
export const getAllEvents = () => axios.get("api/events")
export const saveEvent = (eventData) => axios.post("api/events", eventData);
export const getAsteroid = () => axios.get("api/nasa/asteroid");
export const searchImage = q => axios.get(`api/nasa/image?q=${q}`);
export const getAPOD = () => axios.get("api/nasa/apod");
export const getJobs = () => axios.get("api/nasa/jobs");
export const getRover = () => axios.get("api/nasa/rover");

// User APIs
export const postLogin = (user) => axios.post("api/login", user);
export const getUsers = () => axios.get("api/users");
export const postSignup = (user) => axios.post("api/signup", user);
export const getLogout = () => axios.get("api/logout")
export const getUserData = () => axios.get("api/user_data");
export const updateUserData = (favorites) => axios.post("api/user_data", favorites);

// Posts APIs
export const getAllPosts = () => axios.get("/api/posts");
export const createNewPost = (newPost) => axios.post("/api/posts", newPost);


//import {getAPOD, getJob} from "/path to API.js"
//getAPOD().then(data=> do something with data;)