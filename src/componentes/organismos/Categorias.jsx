import '../EstilosComponentes/EstilosOrganismos/estiloCategorias.css'
import Categoria from '../moleculas/Categoria'
import Texto from '../atomos/Texto'

const Categorias = () => {
    return (
        <div>
            <Texto texto={'Categorias'} level={'h2'}/>
            <div className='containerCategorias'>
                <Categoria nombreImg={'frutas-verduras'} tituloCat={'Frutas y verduras'} size={'large'} />
                <Categoria nombreImg={'carnes-pescados'} tituloCat={'carnes y pescados'} size={'large'} />
                <Categoria nombreImg={'lacteos'} tituloCat={'lacteos'} size={'large'} />
                <Categoria nombreImg={'panaderia'} tituloCat={'Panaderia y pasteleria'} size={'large'} />
                <Categoria nombreImg={'snacks'} tituloCat={'Snacks y golosinas'} size={'large'} />
                <Categoria nombreImg={'bebidas'} tituloCat={'Bebidas'} size={'large'} />
                <Categoria nombreImg={'noperecederos'} tituloCat={'Alimentos No perecederos'} size={'large'} />
            </div>
        </div>
    )
}

export default Categorias;