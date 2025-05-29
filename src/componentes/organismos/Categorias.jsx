import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../EstilosComponentes/EstilosOrganismos/estiloCategorias.css'
import Categoria from '../moleculas/Categoria'

const Categorias = () => {

    const [categorias , setCategorias] = useState([]);
    const [loading , setLoading] = useState(true);

    useEffect (() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then (res => res.json())
        .then (data => {
            setCategorias(data.categories);
            setLoading(false);
        })
        .catch(err => console.error('Se ha producido un error', err))
    }, []);

    return (

        <div className='containerCategorias'>
            {loading ? (
                <p>Cargando..</p>
            ) : (
                categorias.map(cat =>
                    <Link key={cat.idCategory} to={`/recetasCategorias/${cat.strCategory}`}>
                        <Categoria urlImg={cat.strCategoryThumb} tituloCat={cat.strCategory} size={'large'} />
                    </Link>
                )
            )}
        </div>
    );
};

export default Categorias;