import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import './EstilosComponentes/estiloHeader.css';

function Header(){
    return(
        <header className="header_nav">
            <div className="header_usuario">
                <Link to='/'><img src='src\assets\logo-oscuro-02.png' alt="Logo de la empresa" className="logo"/></Link>
                <div>
                    <button>LogIn</button>
                    <button>SignIn</button>
                </div>
                <Link to='/lista'><img src='src\assets\lista_cesta.svg' alt="Icono lista" className="iconos_header"/></Link>
                <Link to='/lista'><img src='src\assets\user_person.svg' alt="Icono usuario" className="iconos_header"/></Link>
            </div>
            <NavBar />
        </header>
    );
};

export default Header;