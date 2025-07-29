import { useContext } from "react";
import { RecetarioContext } from "../contextos/RecetarioContex";
import SeccionRecetasChicas from "../componentes/organismos/SeccionRecetasChicas";


function Recetario(){
    
    const {recetario} = useContext(RecetarioContext);

    return(
        <div>
            <h1>RECETARIO - Listado recetas guardadas</h1>
            <SeccionRecetasChicas contexto={recetario}/>
        </div>
    );
};

export default Recetario;