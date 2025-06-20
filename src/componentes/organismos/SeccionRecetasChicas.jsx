import { useContext } from 'react';
import { RecetasContext } from '../../contextos/RecetasContex';
import CardRecetaChica from '../moleculas/CardRecetaChica';
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css'

function SeccionRecetasChicas(){

    const {recetas} = useContext(RecetasContext);

    if (recetas.length === 0) {
        return(
            <p>No hay recetas nuevas</p>
        );
    };

    return(
        <div className='container_recetas'>
            {recetas.map ((receta, index) => (
                <CardRecetaChica key={index} receta={receta} /> 
                ))
            };
        </div>
    )
}

export default SeccionRecetasChicas;