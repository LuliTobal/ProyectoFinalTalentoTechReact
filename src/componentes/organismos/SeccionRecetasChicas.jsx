import CardRecetaChica from '../moleculas/CardRecetaChica';
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css'

function SeccionRecetasChicas(){

    return(
        <div className='container_recetas'>
            <CardRecetaChica />
            <CardRecetaChica /> 
            <CardRecetaChica /> 
            <CardRecetaChica /> 
            <CardRecetaChica /> 
            <CardRecetaChica /> 
            <CardRecetaChica /> 
        </div>
    )
}

export default SeccionRecetasChicas;