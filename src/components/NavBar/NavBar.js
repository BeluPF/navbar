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
                <li className="li1" onClick={ () => navigate ("/impares")}>Impares</li>
                <li className="li1" onClick={ () => navigate ("/pares")}>Pares</li>
            </ul>
            
        </nav>
    );
}

export default NavBar;
