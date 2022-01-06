import React, {useEffect, useState} from 'react';
import ItemList from '../Item/ItemList';
import { db } from '../db/db';
import { collection, query, getDocs, where} from 'firebase/firestore';

const ItemListContainerFilterDodge = () => {
    const [item, setItem]= useState ([]);
    useEffect (() =>{
        const getItem = async () => {
            const q = query(collection(db, "Autos"), where ("marca", "==", "Dodge"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setItem(docs);
          };
          getItem();
    }, [] );
    console.log(item);
    return (
        <div>
        <ItemList items={item}/>
        </div>
    )
}
export default ItemListContainerFilterDodge;