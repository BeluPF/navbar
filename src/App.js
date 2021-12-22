
import "./Home.css";
import "./components/Item/Item.css";
import {  BrowserRouter,  Routes,  Route} from "react-router-dom";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ItemListContainer from "./components/Item/ItemListContainer";
import Cart from "./components/cart/Cart";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./context/CartProvider";
import ItemListContainerFilterPeugeot from "./components/Filtros/ItemListContainerFilterPeugeot";
import ItemListContainerFilterFord from "./components/Filtros/ItemListContainerFilterFord";
import ItemListContainerFilterFiat from "./components/Filtros/ItemListContainerFilterFiat";
import ItemListContainerFilterChevrolet from "./components/Filtros/ItemListContainerFilterChevrolet";
import ItemListContainerFilterRenault from "./components/Filtros/ItemListContainerFilterRenault";
import ItemListContainerFilterVolkswagen from "./components/Filtros/ItemListContainerFilterVolkswagen";
import ItemListContainerFilterDodge from "./components/Filtros/ItemListContainerFilterDodge";

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
        <Route path="/peugeot" element={<ItemListContainerFilterPeugeot/>} />
        <Route path="/ford" element={<ItemListContainerFilterFord/>} />
        <Route path="/fiat" element={<ItemListContainerFilterFiat/>} />
        <Route path="/chevrolet" element={<ItemListContainerFilterChevrolet/>} />
        <Route path="/renault" element={<ItemListContainerFilterRenault/>} />
        <Route path="/volkswagen" element={<ItemListContainerFilterVolkswagen/>} />
        <Route path="/dodge" element={<ItemListContainerFilterDodge/>} />
        </Routes>
      </BrowserRouter>
    </>
    </CartProvider>
  );


}

export default App;
