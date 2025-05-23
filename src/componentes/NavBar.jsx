import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'; //para manejar el menu hamburguesa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar(){

    const [ menuOpen , setMenuOpen ] = useState(false); //para el menu hamburguesa

    //funcion para alternar el estado del menú
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navigate = useNavigate();
    
    const isAuth = localStorage.getItem('auth') === 'true';

    const cerrarSesion = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    };

    return(
        <nav className={`navbar`} >{/*operador ternario para el menu*/}
            <FontAwesomeIcon icon={faBars} alt="Menú" className="menu_icon" onClick={toggleMenu} />
            <div className={`nav_links ${menuOpen ? 'open' : ''}`}>
                <Link to='/'>Home</Link>
                <Link to='/alacena'>Tu Alacena</Link>
                <Link to='/recetas'>Tus Recetas</Link>
                <Link to='/listas'>Listas de Super</Link>
                <Link to='/nosotros'>Sobre Nosotros</Link>
                <Link to='/contacto'>Contacto</Link>
            </div>
        </nav>
    );
};

export default NavBar;