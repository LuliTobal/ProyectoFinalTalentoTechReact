import { useContext , useEffect} from 'react';
import CardReceta from '../organismos/CardReceta';
import { RecetasContext } from '../../contextos/RecetasContex';
import { RecetasPropiasContext } from '../../contextos/RecetasPropiasContext';
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css';
//mport { useParams } from 'react-router-dom';

function SeccionRecetasGrandes({ modo, categoria }) {
    const { recetas , recetasCategoria , fetchRandomRecetas , fetchCategoriaReceta } = useContext(RecetasContext);
    const { recetasPropias, fetchRecetasPropias } = useContext(RecetasPropiasContext);

    //const { categoria } = useParams();

    useEffect(() => {
        switch (modo) {
            case 'categoria':
                fetchCategoriaReceta(categoria);
                break;
            case 'propias':
                fetchRecetasPropias();
                break;
            case 'generales':
            default:
                for (let i = 0; i < 3; i++) {
                    fetchRandomRecetas();
                }
                break;
        }
        // if (categoria) {
        //     fetchCategoriaReceta(categoria);
        // } else if (propias) {
        //     fetchRecetasPropias();
        // } else {
        //     for (let i = 0; i < 3; i++) {
        //         fetchRandomRecetas();
        //     }
        // }
    },[modo, categoria]);

    let listaReceta = [];

    switch (modo) {
        case 'categoria':
            listaReceta = recetasCategoria;
            break;
        case 'propias':
            listaReceta = recetasPropias;
            break;
        case 'generales':
            default:
                listaReceta = recetas;
                break;
    }

    if (!listaReceta || listaReceta.length === 0) {
        return <p>No hay recetas</p>
    }

    return(
        <div className='container_recetas'>
            {listaReceta.map ((receta, index) => (
                <CardReceta key={index} receta={receta} modo={modo}/>
            ))}
        </div>
    );

    // const listaReceta = categoria ? recetasCategoria : recetas;

    // if (!listaReceta || listaReceta.length === 0) {
    //     return <p>No hay recetas</p>
    // }

    // return(
    //     <div className='container_recetas'>
    //         {listaReceta.map ((receta, index) => (
    //             <CardReceta key={index} receta={receta} />
    //         ))};
    //     </div>
    // );
};

export default SeccionRecetasGrandes;