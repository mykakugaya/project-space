import React from "react";
import {List, ListItem, CardHeader, CardContent} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

function JobResult(props) {
    return(
        <ListItem>
            <Card>
                <CardHeader>
                    {props.title}
                </CardHeader>
                <Divider/>
                <CardContent>
                    {props.company}
                    {props.location}
                </CardContent>
            </Card>
        </ListItem>
    )
}

export default JobResult;