import './NavBar.css';
import logomarca from './LOGO.png';
import {Icon} from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


function NavBar() {
    let navigate = useNavigate();
    return (
        <nav className="nav">
            <img src={logomarca} alt='logo marca' onClick={ () => navigate("/")}/>
            <ul className="ul1">
                
                <li className="li1">Impares</li>
                <li className="li1">Pares</li>
                
            </ul>
            <Icon name='shopping cart' className="shoppingCart" onClick={ () => navigate ("/cart")}></Icon>
        </nav>
    );
}

export default NavBar;
