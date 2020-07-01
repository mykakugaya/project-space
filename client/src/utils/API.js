import axios from "axios";

export const getAllEvents = () => axios.get("/api/events")
export const saveEvent = () => axios.post("/api/events", eventData);
export const ASTEROIDapisearch = () => axios.get("/api/nasa/asteroid");
export const searchImage = q => axios.get(`/api/nasa/image?q=${q}`);
export const getAPOD = () => axios.get("/api/nasa/apod");
export const getJobs = () => axios.get("/api/nasa/jobs");
export const getRover = () => axios.get("/api/nasa/rover");

//import {getAPOD, getJob} from "/path to API.js"
//getAPOD().then(data=> do something with data;)