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
                
                 <li className="li1">Nosotros</li>
                <li className="li1">Soporte</li>
                <li className="li1">Contactenos</li>
            </ul>
            <Icon name='shopping cart' className="shoppingCart"></Icon>
        </nav>
    );
}

export default NavBar;
