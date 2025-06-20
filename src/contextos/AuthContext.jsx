//WRAPPER --> TODO LO QUE ESTE ENTRE LAS ETIQUETAS DE ESTE CONTEXTO VA A ACCEDER A SU INFO, A LOS DATOS DE AUTENTICACIÓN HARDCODEADOS
import {createContext, useContext, useEffect, useState} from 'react'

const AuthContext = createContext(); //creamos contexto

export function AuthProvider ({ children }) { //creamos el componente provedor de la info, por children ingresan los componentes que vana a tener acceso a sus valores

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUser = localStorage.getItem('user');
        
        if (savedToken && savedUser){
            setToken(savedToken);
            setUser(savedUser)
        }
    }, []);

    const login = (userName , password) => {
        if (userName === 'admin' && password === '1234'){ //aca hardcodeamos y si se cumple la condición
            const tokenFalso = 'Tbl01LrDS08Pmb95'; //generamos el token
            setToken(tokenFalso); //lo seteamos en las const
            setUser(userName); //y lo mismo con el usuario
            localStorage.setItem('token', tokenFalso); //lo guardamos en el localStorage, clave (token) - valor (el valor de tokenFalso)
            localStorage.setItem('user', userName) //lo guardamos en el localStorage, clave (user) - valor (el valor de userName)
            return true; //devuelve true si se da la condición
        }
        
        return false; //devuelve false si no se cumple y no habilita el acceso
    }

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return( //generamos el render del wrap
        <AuthContext.Provider value={{user, token, login, logout}}> {/*todo lo que ingrese como childer va a tener acceso a esos values */}
            {children}
        </AuthContext.Provider>
    );    
};

export const useAuth = () => useContext(AuthContext); //creamos un hook personalizado, este encapsula el uso de useContext(AuthContext)
//useContext, es el hook que sirve para acceder al valor de un contexto, en este caso le estamos pidiendo el valor actual que provee el AuthContext
// ese valor es el del <AuthContext.Provider>