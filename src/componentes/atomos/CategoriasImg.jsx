import '../EstilosComponentes/EstilosAtomos/estiloCategoriasImg.css'
import Img from '../../assets/Categorias/Img'

const CategoriasImg = ({ urlImg , size }) =>{
    return(
        <div className='container'>
            <Img urlImg={urlImg} size={size} />
            <Img urlImg={urlImg} size={size} />
        </div>
    );
};

export default CategoriasImg;