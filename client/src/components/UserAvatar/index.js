import React, {useContext} from "react";
import Avatar from '@material-ui/core/Avatar';

function UserAvatar(props) {
    return(
        <Avatar>
            {props.letter[0]}
        </Avatar>
    )
}

export default UserAvatar;