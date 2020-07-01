import axios from "axios";

export default {
  // Gets all events from Events Model
  getAllEvents: function() {
    return axios.get("/api/events");
  },
//   // Deletes an event with the given id
//   deleteEvent: function(id) {
//     return axios.delete("/api/events/" + id);
//   },
  // Saves an event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/events", eventData);
  }
};
