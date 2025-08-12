import { useParams } from 'react-router-dom';
import SeccionRecetasGrandes from '../componentes/organismos/SeccionRecetasGrandes'
import './EstilosPaginas/estiloVistas.css'

function RecetasCategorias () {
    const { tituloCat } = useParams();

    return(
        <div className="seccion_vista">
            <h2>{tituloCat}</h2>
            <SeccionRecetasGrandes categoria={tituloCat} modo='categoria' />
        </div>
    );
};

export default RecetasCategorias;