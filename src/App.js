
import "./App.css";
import "./components/UserCard/UserCard.css";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard/UserCard";
import itemListContainer from "./components/itemListContainer";
import contador from "./components/cartwidget"


function App() {
  return (
    <div>
      <NavBar />
      <itemListContainer
          greeting="Hola Maria Belén"
      />
      <div className="UserCard">
        <UserCard
          name="Daniel Di Salvo"
          date="se unió en enero 2021"
          description= "fe dev"
          img="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <UserCard
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
        />
      </div>
    </div>
  );


}

export default App;
