
import React from "react";
import Item from '../Item/Item';

const ItemList = ({users}) => {
    return (
        <div>
    {users.map((user)=> {return <Item data={user}/>})}
    </div>
    )
}
   
   export default ItemList;