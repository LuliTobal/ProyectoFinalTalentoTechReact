import { Link , useNavigate} from 'react-router-dom';
import NavBar from './NavBar';
import './EstilosComponentes/estiloHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import Boton from '../componentes/atomos/Boton';


function Header(){

    const navigate = useNavigate();
    const isAuth = localStorage.getItem('auth') === 'true';

    const cerrarSesion = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    };

    return(
        <header className="header_nav">
            <div className="header_usuario">
                <Link to='/nosotros'><img src='src\assets\logo-oscuro-02.png' alt="Logo de la empresa" className="logo"/></Link>
                {/* <div className='header_icons_btns'>
                    <button>LogIn</button>
                    <button>SignIn</button>
                </div> */}
                <div className='header-botones'>
                    {!isAuth ? (
                        <Link to='/login' className='boton-primario'>Login</Link>
                    ) : (
                        <>
                        <Link to='/lista'><FontAwesomeIcon icon={faFileLines} alt="Icono lista" className="iconos_header" /></Link>
                        <Boton texto='Cerrar sesión' onClick={cerrarSesion} className="boton-primario" variante='principal' />
                        </> 
                    )}
                </div>
            </div>
            <NavBar />
        </header>
    );   
};

export default Header;