import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id,name,phone,website,address} = props.friend;
    const history =useHistory();
    const friendStyle={
        border:'3px solid goldenrod',
        padding:'10px',
        borderRadius:'10px'
    };
    const url = `/friend/${id}`;

    const handleFriendClick =() =>{
        history.pushState(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2>I am:{name} {id}</h2>
            <h5>Call me:{phone}</h5>
            <p>Visit Me:{website}</p>
            <p><small>I live in:{address.city}</small></p>
            <Link to ={url}>Visit Me</Link>
            <br />
            <Link to ={url}>
                <button>Then See</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Show Me</button>
        </div>
    );
};

export default Friend;