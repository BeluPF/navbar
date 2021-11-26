import React, {useEffect, useState} from 'react';
import CardUser from '../UserCard/UserCard';

const CardContainer = () => {
    const [users, setUsers]= useState ([]);
    useEffect (() =>{
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json)=>setUsers(json));

    }, [] );
    return (
        <div>
            <h1>CardContainer</h1>
            {users.map((user)=>{
                return <CardUser data={user} />;
            })}
        </div>
    )
}
export default CardContainer;