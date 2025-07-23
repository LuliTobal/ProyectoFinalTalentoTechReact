import { useContext } from 'react';
import { RecetasContext } from '../../contextos/RecetasContex';
import CardRecetaChica from '../moleculas/CardRecetaChica';
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css'
import { RecetarioContext } from '../../contextos/RecetarioContex';

function SeccionRecetasChicas(){

    const {recetas} = useContext(RecetasContext);

    //////////AGREGADO PARA PROBAR EL CARRITO ///////////////////
    const {agregarAlRecetario} = useContext(RecetarioContext);
    ////////////HASTA ACA /////////////////////////////

    if (recetas.length === 0) {
        return(
            <p>No hay recetas nuevas</p>
        );
    };

    return(
        <div className='container_recetas'>
            {recetas.map ((receta, index) => (
                ///////////AGREGADO PARA PROBAR EL CARRITO - agregarAlRecetario = {agregarAlRecetario} ///////////////////
                <CardRecetaChica key={index} receta={receta} agregarAlRecetario = {agregarAlRecetario}/>
                ))
            };
        </div>
    )
}

export default SeccionRecetasChicas;