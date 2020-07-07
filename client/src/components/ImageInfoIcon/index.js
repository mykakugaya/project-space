import React from "react";
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function ImageInfoIcon(props) {
    return (
        <a target="_blank" href={props.link}>
            <IconButton color="primary" aria-label="info">
                <OpenInNewIcon/>
            </IconButton>
        </a>
    )
}

export default ImageInfoIcon;