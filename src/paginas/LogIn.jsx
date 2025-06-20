import { useNavigate } from "react-router-dom";
import Input from "../componentes/atomos/Input";
import './EstilosPaginas/estiloLogin.css';
import { useAuth } from "../contextos/AuthContext";
import { useState } from "react";

function LogIn() {

    const {login} = useAuth();
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');



    const handleSubmit = (e) => { //se llama a esta función por medio del onClick por parentesis le pasamos el evento
        e.preventDefault(); //esto prevee que se recargue la pag automaticamente
        console.log(user, pass)
        if (login(user, pass)){ //llamamos a la función del contexto que verifica la información pasada por parametros
            navigate('/home'); //si la info coincide me lleva al home
        }else { //sino me lanza un error
            setError('Usuario o contraseña inválidos');  //setea el mensaje en el error
        }
    };

    return(
        <div className="login_container">
            <h2>Iniciar sesión</h2>
                {error && <p>{error}</p>}
            <form className="login_formulario_container">
                <label htmlFor="usuarioLogIn">Nombre de usuario</label>
                <Input tipo="text" nombre="usuarioLogIn" id="usuarioLogIn" clase="input" value={user} onChange= {(e) => setUser(e.target.value)}/>
                <label htmlFor="contraseña">Contraseña</label>
                <Input tipo="password" nombre="contraseña" id="contraseña" clase="input" value={pass} onChange= {(e) => setPass(e.target.value)}/>
                {/*la linea de arriba lo que hace es llamar la variable pass en el valor, esta se va modificando a medida que el ususario la escribe
                al modificarse se dispara el evento onChange que va seteando esa variable con lo que va escribiendo el usuario */}
                <Input tipo="submit" valor="Ingresar" onClick={handleSubmit} clase="boton-primario" />
                {/*El boton al hacer click se dispara la función handleSubmit */}
            </form>
        </div>
    );
};

export default LogIn;