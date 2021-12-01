
import "./App.css";
import "./components/Item/Item.css";
import NavBar from "./components/NavBar";
import Contador from "./components/ItemCount"
import ItemListContainer from "./components/Item/ItemListContainer";


function App() {
  return (
    <div>
      <NavBar />

      <div className="Item">
        <ItemListContainer
        />
        
 {/*       <UserCard
          name="Alberta Gomez"
          date="se unió en enero 2018"
          description="backend dev"
          img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <UserCard
          img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
          name="Toni Mendez"
          date="se unió en enero 2019"
          description="vago"
        />
        <UserCard
          name="Bot 1"
          date="se unió en enero 2021"
          description="fe dev"
          img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <UserCard
          name="Bot 2"
          date="se unió en enero 2021"
          info="fe dev"
          img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
 /> */}
        <Contador />
      </div>
    </div>
  );


}

export default App;
