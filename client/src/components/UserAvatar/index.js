import React, {useContext} from "react";
import Avatar from '@material-ui/core/Avatar';

function UserAvatar(props) {
    return(
        <Avatar>
            {props.letter}
        </Avatar>
    )
}

export default UserAvatar;