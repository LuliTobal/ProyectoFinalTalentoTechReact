import { useContext } from 'react';
import { RecetasContext } from '../../contextos/RecetasContex';
import CardRecetaChica from '../moleculas/CardRecetaChica';
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css';
import { RecetarioContext } from '../../contextos/RecetarioContex';

function SeccionRecetasChicas({contexto}){

    const {recetas} = useContext(RecetasContext);
    const {agregarAlRecetario, recetario, eliminarDeRecetario} = useContext(RecetarioContext);

    if (recetas.length === 0) {
        return(
            <p>No hay recetas nuevas</p>
        );
    };

    return(
        <div className='container_recetas'>
            {contexto === 'recetasGenerales' ? recetas.map ((receta, index) => (
                <CardRecetaChica key={index} receta={receta} agregarAlRecetario = {agregarAlRecetario}/>
            ))
            : recetario.map ((receta) => (
                    <CardRecetaChica key={receta.idMeal} receta={receta} eliminarDeRecetario ={eliminarDeRecetario}/>
                ))
            };
        </div>
    )
}

export default SeccionRecetasChicas;