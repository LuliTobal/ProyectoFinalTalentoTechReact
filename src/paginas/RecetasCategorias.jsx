import { useParams } from 'react-router-dom';
import SeccionRecetasGrandes from '../componentes/organismos/SeccionRecetasGrandes'

function RecetasCategorias () {
    const { tituloCat } = useParams();

    return(
        <div>
            <h2>{tituloCat}</h2>
            <SeccionRecetasGrandes categoria={tituloCat}/>
        </div>
    );
};

export default RecetasCategorias;