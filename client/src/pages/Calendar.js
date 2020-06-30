import React, { useState } from 'react';
import Calendar from 'react-calendar';

const MyCalendar = () => {
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
        {console.log(date)}
        {date.toString()}
        </div>
    );
};

export default MyCalendar;