import { useNavigate } from "react-router-dom";
import Input from "../componentes/atomos/Input";
import './EstilosPaginas/estiloLogin.css';

function LogIn() {

    const navigate = useNavigate();

    const handleLogIn = () => {
        localStorage.setItem('auth', 'true')
        navigate('/home');
    };

    return(
        <div className="login_container">
            <h2>Iniciar sesión</h2>
            <form className="login_formulario_container">
                <label htmlFor="mailLogIn">Email</label>
                <Input tipo="email" nombre="mailLogIn" id="mailLogIn" clase="input" />
                <label htmlFor="contraseña">Contraseña</label>
                <Input tipo="password" nombre="contraseña" id="contraseña" clase="input" />
                <Input tipo="submit" valor="Ingresar" onClick={handleLogIn} clase="boton-primario" />
            </form>
        </div>
    );
};

export default LogIn;