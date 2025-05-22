import { useState , useEffect} from 'react';
import '../EstilosComponentes/EstilosOrganismos/estiloCardReceta.css'
import Button from '../atomos/Boton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function CardReceta() {

  const [recetas, setRecetas] = useState([]);
  const [loading , setLoading] = useState(true);


  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
     .then(res => res.json())
     .then(data =>{
       setRecetas(data.meals);
       setLoading(false);
      })
     .catch(err => console.error('Se ha producido un error', err))
  }, [])


  return (

    <div className='container_cardsRecetas'>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {recetas.map(receta => (
            <div className='card_receta' key={receta.idMeal}>
              <div className='informacion_receta'>
                <p className='categoria_receta'>{receta.strCategory}</p>
                <h3 className='titulo_receta'>{receta.strMeal}</h3>
                <span className='valoracion_receta'>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <p className='intrucciones_receta'>{receta.strInstructions}</p>
                <Button variante={'principal'} texto={'Ver receta'} className='boton_ver' />
              </div>  
              <img src={receta.strMealThumb} alt={receta.strMeal} className='img_receta' />  
            </div>
          ))}
        </div>
      )}

    </div>

  )
}

export default CardReceta;
