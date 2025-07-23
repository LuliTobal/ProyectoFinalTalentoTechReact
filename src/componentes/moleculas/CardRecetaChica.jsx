import '../EstilosComponentes/EstilosMoleculas/estiloCardRecetaChica.css'
import Button from '../atomos/Boton';
// import Swal from 'sweetalert2';

function CardRecetaChica({ receta, agregarAlRecetario }) {

  // const agregarLista = () => {
  //   Swal.fire({
  //     position: "top-end",
  //     icon: "success",
  //     title: "Receta agregada",
  //     showConfirmButton: false,
  //     timer: 1500
  //   });
  // };

  if (!receta){
    return(
      <p>Cargando nuevas recetas</p>
    );
  };

  return (
    <div className='container_cardsRecetas_chica'>
      <div className='card_receta_chica' key={receta.idMeal}>
        <img src={receta.strMealThumb} alt={receta.strMeal} className='img_receta_chica' /> 
        <div className='informacion_receta_chica'>
          <Button variante={'icono'} icon={'guardar'} iconSize={'l'} className='boton_guardar_chica' onClick={() => agregarAlRecetario(receta)} />
          <p className='categoria_receta_chica'>{receta.strCategory}</p>
          <h4 className='titulo_receta_chica'>{receta.strMeal}</h4>
          <Button variante={'principal'} texto={'Ver receta'} className='boton_ver_chica' />
        </div>   
      </div>
    </div>

  );
};

export default CardRecetaChica;