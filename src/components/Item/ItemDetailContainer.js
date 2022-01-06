import React, {useEffect, useState} from 'react';
import ItemDetail from '../Item/ItemDetail';
import { useParams } from 'react-router-dom';
import "./Item.css";
import { db } from '../db/db';
import { collection, query, getDocs} from 'firebase/firestore';


const ItemDetailContainer = () => {
    let id = useParams();


    const [item, setItem]= useState ([]);
    const itemFiltered = item.filter((item) => {
        return item.id === id.id;
      });

    useEffect (() =>{
        const getItem = async () => {
            const q = query(collection(db, "Autos"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            setItem(docs);
          };
          getItem();
    }, [] );
    console.log(itemFiltered);
    return (
        <div className='Item'>
            {itemFiltered.map((item) => {
            return <ItemDetail data={item} key={item.id} />;
          })}
        </div>
    )
}
export default ItemDetailContainer;