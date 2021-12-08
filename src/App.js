
import "./Home.css";
import "./components/Item/Item.css";
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ItemListContainer from "./components/Item/ItemListContainer";
import Cart from "./components/cart/Cart";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (

    <>
   
      <BrowserRouter>
      <div>
    <NavBar />
    </div>
        <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </>
   
  );


}

export default App;
