import { Navigate } from "react-router-dom";
import { useAuth } from "../contextos/AuthContext";

function RutaProtegida({ children }) {

    const {token} = useAuth(); //accedemos al token del contexto
    return token ? children : <Navigate to='/login' />; //validamos si token trae info se visualiza el children si no, nos lleva al login
};

export default RutaProtegida;