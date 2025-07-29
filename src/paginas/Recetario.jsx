// import { useContext } from "react";
// import { RecetarioContext } from "../contextos/RecetarioContex";
import SeccionRecetasChicas from "../componentes/organismos/SeccionRecetasChicas";
import './EstilosPaginas/estiloVistas.css'


function Recetario(){
    
    //const {recetario} = useContext(RecetarioContext);

    return(
        <div className="seccion_vista">
            <h1 className="titulo_seccion" >RECETARIO - Listado recetas guardadas</h1>
            <SeccionRecetasChicas contexto='recetario' />
        </div>
    );
};

export default Recetario;