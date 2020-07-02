import React, { useState,useContext } from 'react';
import Calendar from 'react-calendar';
import {userContext} from '../utils/userContext'

const MyCalendar = () => {
    const {test} = useContext(userContext)
    // new Date() picks current date as default
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <div>
        <Calendar
          onChange={onChange}
          value={date}
        />
        {/* <button onClick={()=>test("HELLO FROM CALENDAR!")}>TEST BUTTON</button> */}
        {console.log(date)}
        {date.toString()}
        </div>
    );
};

export default MyCalendar;