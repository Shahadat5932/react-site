import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setfriend] = useState({})
    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setfriend(data));
    },[])
    return (
        <div>
            <h3>Friend Detail of:{friendId}</h3>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Works at:{friend.company?.name}</p>
        </div>
    );
};

export default FriendDetail;