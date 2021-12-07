import React, {useEffect, useState} from 'react';
import ItemList from '../Item/ItemList';


const ItemListContainer = () => {
    const [users, setUsers]= useState ([]);
    useEffect (() =>{
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json)=>setUsers(json));
        
    }, [] );
    
    return (
        
        <div>
            {console.log(users)}
        <ItemList users={users}/>
        </div>
    )
}
export default ItemListContainer;