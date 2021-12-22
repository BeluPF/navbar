import React, {useEffect, useState} from 'react';
import ItemList from '../Item/ItemList';
import "./Item.css"
import { db } from '../db/db';
import { collection, query, getDocs} from 'firebase/firestore';

const ItemListContainer = () => {
    const [items, setItems]= useState ([]);
    const [loading, setLoading] = useState(true);
    useEffect (() =>{
        const getItems = async () => {
            const q = query(collection(db, "Autos"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setItems(docs);
            setLoading(false);
          };
          getItems();
    }, [] );
    
    return (
        
        <div>
        <ItemList items={items}/>
        </div>
    )
}
export default ItemListContainer;