import { Link , useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import NavBar from './NavBar';
import './EstilosComponentes/estiloHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import Boton from '../componentes/atomos/Boton';
import { useAuth } from '../contextos/AuthContext';
import { RecetarioContext } from '../contextos/RecetarioContex';


function Header(){

    ///////////AGREGADO PARA INTENTAR CARRITO/////////////////
    const { recetario} = useContext(RecetarioContext); //para que muestre la cantidaddel contador
    //////////HASTA ACA////////////////////////////
    const {logout, token} = useAuth(); //llama a los valores del contexto useAuth
    const navigate = useNavigate();

    ///////////AGREGADO PARA INTENTAR CARRITO/////////////////
    const totalRecetas = recetario.length;
    // const totalRecetas = recetario.reduce((acc, receta) => acc + receta.cantidad, 0);
    //////////HASTA ACA////////////////////////////

    const cerrarSesion = () => { //funcion conectada al onClick del btn cerrar sesión
        logout(); // llama a la funcion del contexto que mata el local storage
        navigate('/login'); //me navega de nuevo al login
    };

    return(
        <header className="header_nav">
            <div className="header_usuario">
                <Link to='/nosotros'><img src='src\assets\logo-oscuro-02.png' alt="Logo de la empresa" className="logo"/></Link>
                <div className='header-botones'>
                    {!token ? ( //si login devuelve falso, entonces me lleva al login para que me loguee y poder acceder
                        <Link to='/login' className='boton-primario'>Login</Link>
                    ) : ( // sino me habilita el navbar con el boton para poder cerrar sesión
                        <> 
                            <Link to='/lista'>
                                <FontAwesomeIcon icon={faFileLines} alt="Icono lista" className="iconos_header" />
                                {/*///AGREGADO PARA PROBAR EL CARRITO ///////////*/}
                                {totalRecetas > 0 && ( 
                                    <span className='badge'>{totalRecetas}</span>
                                )}
                                {/* <span className='badge'>{contador}</span> */}
                                {/*  //////////HASTA ACA//////////////////////////// */}
                            </Link>
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