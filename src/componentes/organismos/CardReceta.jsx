//import { useContext } from 'react';
//import { RecetasContext } from '../../contextos/RecetasContex';
import '../EstilosComponentes/EstilosOrganismos/estiloCardReceta.css'
import Button from '../atomos/Boton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Swal from 'sweetalert2';
import { RecetasPropiasContext } from '../../contextos/RecetasPropiasContext';

// function CardReceta({ receta }) {

//   const agregarLista = () => {
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Receta agregada",
//       showConfirmButton: false,
//       timer: 1500
//     });
//   };
 
//   return (
//     <div className='card_receta' key={receta.idMeal}>
//       <div className='informacion_receta'>
//         <Button variante={'icono'} icon={'guardar'} iconSize={'l'} className='boton_guardar' onClick={agregarLista} />
//         <p className='categoria_receta'>{receta.strCategory}</p>
//         <h4 className='titulo_receta'>{receta.strMeal}</h4>
//         <span className='valoracion_receta'>
//           <FontAwesomeIcon icon={faStar} size='xs' />
//           <FontAwesomeIcon icon={faStar} size='xs' />
//           <FontAwesomeIcon icon={faStar} size='xs' />
//         </span>
//         <p className='intrucciones_receta'>{receta.strInstructions || "Ver receta para más detalles."}</p>
//         <Button variante={'principal'} texto={'Ver receta'} className='boton_ver' />
//       </div>  
//       <img src={receta.strMealThumb} alt={receta.strMeal} className='img_receta' />  
//     </div>
//   )
// }

// export default CardReceta;

const CardReceta = ({ receta, modo }) => {

  const agregarLista = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Receta agregada",
      showConfirmButton: false,
      timer: 1500
    });
  };

  if (!receta) {
    return(
      <p>Cargando recetas...</p>
    );    
  };

  return(
    <div className='card_receta' key={(modo === 'propias') ? receta.id : receta.idMeal}>
       <div className='informacion_receta'>
        {!modo === 'propias' && (
         <Button variante={'icono'} icon={'guardar'} iconSize={'l'} className='boton_guardar' onClick={agregarLista} />
        )}
         <p className='categoria_receta'>{(modo === 'propias') ? receta.categoria : receta.strCategory}</p>
         <h4 className='titulo_receta'>{(modo === 'propias') ? receta.name : receta.strMeal}</h4>
         <span className='valoracion_receta'>
           <FontAwesomeIcon icon={faStar} size='xs' />
           <FontAwesomeIcon icon={faStar} size='xs' />
           <FontAwesomeIcon icon={faStar} size='xs' />
         </span>
         <p className='intrucciones_receta'>{(modo === 'propias') ? receta.description : receta.strInstructions || "Ver receta para más detalles."}</p>
        {modo === 'propias' ? (
          <div>
            <Button variante={'principal'} texto={'Editar'} className={'boton_ver'} />
            <Button variante={'principal'} texto={'Eliminar'} className={'boton_ver'} />
          </div>
          ) : (
          <Button variante={'principal'} texto={'Ver receta'} className='boton_ver' />
        )}
       </div>  
       <img src={receta.strMealThumb} alt={receta.strMeal} className='img_receta' />  
     </div>
  )
};

export default CardReceta;