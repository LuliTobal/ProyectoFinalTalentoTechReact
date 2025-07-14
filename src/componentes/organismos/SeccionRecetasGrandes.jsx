import { useContext , useEffect, useState} from 'react';
import CardReceta from '../organismos/CardReceta';
import { RecetasContext } from '../../contextos/RecetasContex';
import { RecetasPropiasContext } from '../../contextos/RecetasPropiasContext';
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css';

function SeccionRecetasGrandes({ modo, categoria, onEditReceta }) {
    const { recetas , recetasCategoria , fetchRandomRecetas , fetchCategoriaReceta } = useContext(RecetasContext);
    const { recetasPropias, fetchRecetasPropias, eliminarReceta } = useContext(RecetasPropiasContext);


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
    };

    const handleDelete = (id) => {
        eliminarReceta(id);
    };

    if (!listaReceta || listaReceta.length === 0) {
        return <p>No hay recetas</p>
    }

    return(
        <div className='container_recetas'>
            {listaReceta.map ((receta, index) => (
                <CardReceta key={index} receta={receta} modo={modo} onEdit={onEditReceta} onDelete={handleDelete}/>
            ))}
        </div>
    );
};

export default SeccionRecetasGrandes;