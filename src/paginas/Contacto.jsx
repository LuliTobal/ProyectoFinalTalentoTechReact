import Input from '../componentes/atomos/Input';
import './EstilosPaginas/estiloContacto.css';
import Swal from 'sweetalert2';


const mensajeEnviado = () => {
    Swal.fire({
        title: "Tu mensaje fue enviado",
        icon: "success",
        draggable: true,
        timer: 3000
    })
};

function Contacto(){

    return(
          
        <div className="contacto_container">
            <h1 className='titulo-pagina'>CONTACTANOS</h1>
            <h4 className='texto-bajada'>Dejanos tu consulta y nos comunicaremos con vos</h4>
            <form className="login_formulario_container">
                <label htmlFor="nombre">Nombre</label>
                <Input tipo="text" nombre="nombre" id="nombreContacto" clase="input" />
                <label htmlFor="mailContacto">Email</label>
                <Input tipo="email" nombre="mailContacto" id="mailContacto" clase="input" />
                <label htmlFor="telefono">Telefono</label>
                <Input tipo="tel" nombre="telefono" id="telefono" clase="input" />
                <label htmlFor="msjContacto">Mensaje</label>
                <textarea name="msjContacto" id="msjContacto" className='input'></textarea>
                <Input tipo="submit" valor="Enviar" clase="boton-primario" onClick={mensajeEnviado}/>
            </form>
        </div>
    );
};

export default Contacto;