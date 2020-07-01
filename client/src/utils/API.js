import axios from "axios";

export const getAllEvents = () => axios.get("/api/events")
export const saveEvent = (eventData) => axios.post("/api/events", eventData);
export const getAsteroid = () => axios.get("/api/nasa/asteroid");
export const searchImage = q => axios.get(`/api/nasa/image?q=${q}`);
export const getAPOD = () => axios.get("/api/nasa/apod");
export const getJobs = () => axios.get("/api/nasa/jobs");
export const getRover = () => axios.get("/api/nasa/rover");

export const postLogin = () => axios.post("/api/login");
export const getUsers = () => axios.get("/api/users");
export const postSignup = () => axios.post("/api/signup");
export const getLogout = () => axios.get("/api/logout")
export const getUserData = () => axios.get("/api/user_data");
export const updateUserData = () => axios.post("/api/user_data");

//import {getAPOD, getJob} from "/path to API.js"
//getAPOD().then(data=> do something with data;)