import './NavBar.css';
import logomarca from './LOGO.png';
import {Icon} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    let navigate = useNavigate();
    return (
        <nav className="nav">
            
            <ul className="ul1">
            <img src={logomarca}  alt='logo marca' onClick={ () => navigate("/")}/>
                <li className="li2">
                <Icon name='shopping cart' className="shoppingCart" onClick={ () => navigate ("/cart")}></Icon>
                </li>
                <li className="li1" onClick={ () => navigate ("/peugeot")}>Peugeot</li>
                <li className="li1" onClick={ () => navigate ("/ford")}>Ford</li>
                <li className="li1" onClick={ () => navigate ("/fiat")}>Fiat</li>
                <li className="li1" onClick={ () => navigate ("/chevrolet")}>Chevrolet</li>
                <li className="li1" onClick={ () => navigate ("/volkswagen")}>Volkswagen</li>
                <li className="li1" onClick={ () => navigate ("/Dodge")}>Dodge</li>
                <li className="li1" onClick={ () => navigate ("/renault")}>Renault</li>
            </ul>
            
        </nav>
    );
}

export default NavBar;
