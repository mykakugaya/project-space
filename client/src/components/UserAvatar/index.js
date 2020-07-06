import React, {useContext} from "react";
import Avatar from '@material-ui/core/Avatar';

function UserAvatar(props) {
    const letter = props.letter ? props.letter[0] : null;
    return(
        <Avatar>
            {letter}
        </Avatar>
    )
}

export default UserAvatar;