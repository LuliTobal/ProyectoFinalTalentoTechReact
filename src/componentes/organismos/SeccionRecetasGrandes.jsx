import CardReceta from "./CardReceta";
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css'

function SeccionRecetasGrandes() {
 return(
    <div className="container_recetas">
        <CardReceta />
        <CardReceta />
        <CardReceta />
        <CardReceta />
        <CardReceta />
        <CardReceta />
        <CardReceta />
        <CardReceta />
    </div>

 );
};

export default SeccionRecetasGrandes;