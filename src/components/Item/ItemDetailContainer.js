import React, {useEffect, useState} from 'react';
import ItemDetail from '../Item/ItemDetail';
import { useParams } from 'react-router-dom';
import "./Item.css";

const ItemDetailContainer = () => {
    let id = useParams();
    console.log(id);
    const [user, setUser]= useState ([]);
    useEffect (() =>{
        fetch('https://api.github.com/users/'+id.id)
        .then((response) => response.json())
        .then((json)=>setUser(json));
    }, [id] );
    
    return (
        <div className='Item'>
        <ItemDetail data={user}/>
        </div>
    )
}
export default ItemDetailContainer;