import '../EstilosComponentes/EstilosAtomos/estiloInput.css'

function Input({tipo, value, id, onClick, nombre, clase, onChange}) {
    return(
        <input type={tipo} value={value} id={id} onClick={onClick} className={clase} name={nombre} onChange={onChange}/>
    );
};

export default Input;