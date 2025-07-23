import '../EstilosComponentes/EstilosAtomos/estiloInput.css'

function Input({tipo, value, id, onClick, nombre, clase, onChange, accept}) {
    return(
        <input type={tipo} value={value} id={id} onClick={onClick} className={clase} name={nombre} onChange={onChange} accept={accept}/>
    );
};

export default Input;