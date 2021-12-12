
import "./Home.css";
import "./components/Item/Item.css";
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ItemListContainer from "./components/Item/ItemListContainer";
import Cart from "./components/cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./components/cart/CartProvider";
import ItemListContainerFilterImpares from "./components/Item/ItemListContainerFilterImpares";
import ItemListContainerFilterPares from "./components/Item/ItemListContainerFilterPares";

function App() {
  return (<CartProvider>

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
        <Route path="/impares" element={<ItemListContainerFilterImpares/>} />
        <Route path="/pares" element={<ItemListContainerFilterPares/>} />
        </Routes>
      </BrowserRouter>
    </>
    </CartProvider>
  );


}

export default App;
