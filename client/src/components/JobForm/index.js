import React from "react";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function JobForm(props) {
    return (
        <form noValidate autoComplete="off">
            <TextField id="job-title" label="Job Title" onChange={props.handleTitleChange}/>
            <TextField id="postal-code" label="Postal Code" onChange={props.handlePostChange}/>
            <FormControl>
                <InputLabel id="distance">Age</InputLabel>
                <Select
                labelId="distance"
                id="distance"
                value={props.distance}
                onChange={handleDistChange}
                >
                <MenuItem value={10}>10 miles</MenuItem>
                <MenuItem value={20}>20 miles</MenuItem>
                <MenuItem value={30}>30 miles</MenuItem>
                </Select>
            </FormControl>
        </form>
    )
}

export default JobForm;