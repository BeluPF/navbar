import './NavBar.css';
import logomarca from './LOGO.png';
import {Icon} from 'semantic-ui-react';



function NavBar() {
    return (
        <nav className="nav">
            <img src={logomarca} alt='logo marca'/>
            <ul className="ul1">
                
                <li className="li1">Home</li>
                <li className="li1">Nosotros</li>
                <li className="li1">Soporte</li>
                <li className="li1">Contactenos</li>
            </ul>
            <Icon name='shopping cart' className="shoppingCart"></Icon>
        </nav>
    );
}

export default NavBar;
