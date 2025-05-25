import { useNavigate } from "react-router-dom";
import Boton from '../componentes/atomos/Boton'

function LogIn() {

    const navigate = useNavigate();

    const handleLogIn = () => {
        localStorage.setItem('auth', 'true')
        navigate('/home/usuarioLogueado');
    };

    return(
        <div>
            <h2>Iniciar sesión</h2>
            <form action="">
                <label htmlFor="mailLogIn"></label>
                <input type="email" name="mailLogIn" id="mailLogIn" />
                <label htmlFor="contraseña"></label>
                <input type="password" name="contraseña" id="contraseña" />
                <Boton variante={primario} texto={Ingresar} onClick={handleLogIn} />
            </form>
        </div>
    );
};

export default LogIn;