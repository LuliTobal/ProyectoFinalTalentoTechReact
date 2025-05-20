import ImagenCategorias from '../atomos/CategoriasImg';
import Texto from '../atomos/Texto';
import '../EstilosComponentes/EstilosMoleculas/estiloCategoria.css'

const Categoria = ({ nombreImg, size, tituloCat}) => {
    return(
        <div className='contenedor'>
            <ImagenCategorias type={nombreImg} size={size} />
            <Texto level={'p'} texto={tituloCat}/>
        </div>
    )
};

export default Categoria;