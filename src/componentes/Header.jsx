import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import './EstilosComponentes/estiloHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faFileLines } from '@fortawesome/free-regular-svg-icons';

function Header(){

    return(
        <header className="header_nav">
            <div className="header_usuario">
                <Link to='/'><img src='src\assets\logo-oscuro-02.png' alt="Logo de la empresa" className="logo"/></Link>
                {/* <div className='header_icons_btns'>
                    <button>LogIn</button>
                    <button>SignIn</button>
                </div> */}
                <div className='header_icons_btns'>
                    <Link to='/lista'><FontAwesomeIcon icon={faFileLines} alt="Icono lista" className="iconos_header" /></Link>
                    <Link to='/lista'><FontAwesomeIcon icon={faCircleUser} alt="Icono usuario" className="iconos_header" /></Link> 
                </div>
            </div>
            <NavBar />
        </header>
    );
    
};

export default Header;