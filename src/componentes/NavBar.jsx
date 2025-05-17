import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <div>
                <Link to='/'><img src="" alt="Logo de la empresa" /></Link>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/alacena'>Tu Alacena</Link>
                    <Link to='/recetas'>Tus Recetas</Link>
                    <Link to='/listas'>Lista de Super</Link>
                    <Link to='/nosotros'>Sobre Nosotros</Link>
                    <Link to='/contacto'>Contacto</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;