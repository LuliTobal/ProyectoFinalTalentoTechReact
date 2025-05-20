import './style.css'

const Img = ({ urlImg , size }) => {

  const imgSize =  size === 'xsmall' ? '20px' :
                    size === 'small' ? '32px' :
                    size === 'medium' ? '48px' :
                    size === 'large' ? '60px' :
                    size === 'xlarge' ? '100px' : '48px';
        !imgSize === '';


  return (
    <img 
      src={urlImg}
      className='categoria_img'
      style={{width: imgSize, height: imgSize}}
      alt="Imagen categoria"
    />
  );
}

export default Img;