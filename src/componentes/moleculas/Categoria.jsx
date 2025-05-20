import ImagenCategorias from '../atomos/CategoriasImg';
import Texto from '../atomos/Texto';
import '../EstilosComponentes/EstilosMoleculas/estiloCategoria.css'

const Categoria = ({ urlImg, size, tituloCat}) => {
    return(
        <div className='contenedor'>
            <ImagenCategorias urlImg={urlImg} size={size} />
            <Texto level={'p'} texto={tituloCat} variante={'dark'} className='texto'/>
        </div>
    )
};

export default Categoria;