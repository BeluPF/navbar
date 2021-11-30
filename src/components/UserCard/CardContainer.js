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
             {users.map((user)=>{
             return <CardUser data={user} />;
            })}
        </div>
    )
}
export default CardContainer;