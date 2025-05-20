import '../EstilosComponentes/EstilosAtomos/estiloCategoriasImg.css'
import Img from '../../assets/Categorias/Img'

const CategoriasImg = ({ type, size}) =>{
    return(
        <div className='container'>
            <Img type={type} size={size} />
            <Img type={type} size={size} />
        </div>
    );
};

export default CategoriasImg;