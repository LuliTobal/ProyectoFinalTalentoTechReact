import { Link } from "react-router-dom";
import { useState } from 'react'; //para manejar el menu hamburguesa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from '../contextos/AuthContext'

function NavBar(){

    const [ menuOpen , setMenuOpen ] = useState(false); //para el menu hamburguesa
    const {token} = useAuth();

    //funcion para alternar el estado del menú
    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    // const isAuth = localStorage.getItem('auth')  === 'true';


    return(
        <nav className={`navbar`} >{/*operador ternario para el menu*/}
            <FontAwesomeIcon icon={faBars} alt="Menú" className="menu_icon" onClick={toggleMenu} />
            <div className={`nav_links ${menuOpen ? 'open' : ''}`}>
                <Link to='/'>Sobre Nosotros</Link>
                <Link to='/contacto'>Contacto</Link>
                {token && (
                    <>
                        <Link to='/home'>Home</Link>
                        <Link to='/alacena'>Tu Alacena</Link>
                        <Link to='/recetas'>Tus Recetas</Link>
                        <Link to='/listas'>Listas de Super</Link> 
                    </>
                )}                
            </div>
        </nav>
    );
};

export default NavBar;