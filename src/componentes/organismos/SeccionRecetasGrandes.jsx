import { useContext } from 'react';
import CardReceta from '../organismos/CardReceta';
import { RecetasContext } from '../../contextos/RecetasContex';
import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css';

function SeccionRecetasGrandes() {
    const { recetas, fetchRandomRecetas} = useContext(RecetasContext);

    if(recetas.length === 0) {
        return (
            <p>No hay recetas</p>
        )
    };

    return(
        <div>
            {recetas.map((recipe , index) => (
                <CardReceta key={index} receta={recipe} />
            )) 
            }
            <button onClick={fetchRandomRecetas}>cargar nuevas recetas</button>
        </div>
    );
};

export default SeccionRecetasGrandes;

// import CardReceta from "./CardReceta";
// import '../EstilosComponentes/EstilosOrganismos/estiloSeccionRecetasGrandes.css'
// import { useEffect, useState } from "react";

// function SeccionRecetasGrandes({ categoria }) {

//     const [recetas, setRecetas] = useState([]);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         const obtenerRecetas = async () => {
//             try {
//                 let data;

//                 if (categoria) {
//                     const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
//                     data = await res.json();
//                     setRecetas(data.meals);
//                 } else {
//                     const promesas = Array.from({ length: 8}, () =>
//                         fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//                         .then(res => res.json())
//                     );
//                     const resultados = await Promise.all(promesas);
//                     const recetasRandom = resultados.map(r => r.meals[0]);
//                     setRecetas(recetasRandom);
//                 }
//                 setLoading(false);
//             } catch(err) {
//                 console.error('Error al obtener recetas:', err);
//                 setRecetas([]);
//                 setLoading(false);
//             }
//         };

//         obtenerRecetas();
//     }, [categoria]);

//  return(
//     <div className="container_recetas">
//         {loading ? (
//             <p>Cargando recetas...</p>
//         ) : recetas.length > 0 ? (
//             recetas.map( receta => (
//                 <CardReceta key={receta.idMeal} receta={receta} categoria={categoria} />
//             ))
//         ) : (
//         <p>No se encontraron recetas para esta categoría.</p>
//       )}
//     </div>
//  );
// };

// export default SeccionRecetasGrandes;