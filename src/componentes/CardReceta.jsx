import { useState , useEffect} from 'react'; 

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

    <div style={{ textAlign:'center', marginTop:'2rem'}}>
      <h1>Recetas</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div style={{ display:'flex', flexDirection:'row', flexWrap: 'wrap' }}>
          {recetas.map(receta => (
            <div key={receta.idMeal} style={{ margin:'2%', display:'inline'}}>
              <img src={receta.strMealThumb} alt={receta.strMeal} style={{ width: '30%', borderRadius:'50%' }} />
              <h3>{receta.strMeal}</h3>
              <p>{receta.strInstructions}</p>
            </div>
          ))}
        </div>
      )}

    </div>

  )
}

export default CardReceta;
