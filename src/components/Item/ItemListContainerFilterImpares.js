import React, {useEffect, useState} from 'react';
import ItemList from '../Item/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainerFilterImpares = () => {
    const [users, setUsers]= useState ([]);
    useEffect (() =>{
        fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json)=>{
            let jsonPar = json.filter(value => value.id%2!==0)
            return setUsers(jsonPar);
        });
    }, [] );
    
    return (
        <div>
            {console.log(users)}
        <ItemList users={users}/>
        </div>
    )
}
export default ItemListContainerFilterImpares;