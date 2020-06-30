import React from "react";
// import { render } from "react-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

moment.locale("en-GB");

const localizer = momentLocalizer(moment);

const myEventsList = {} //empty object for now

export default class MyCalendar extends React.Component{
    constructor() {
        super()
   // will populate this function later
    }
    componentDidMount(){

        let self = this;

        axios.get('http://localhost:3001/events')
        .then(function (response) {
        console.log(response.data);
        let appointments = response.data;
        
        for (let i = 0; i < appointments.length; i++) {
            console.log(appointments[i])
        }    

        })
        .catch(function (error) {
        console.log(error);
        });
    }
    render() {

        return(
        <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
        />
        )
    }
}
