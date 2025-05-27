import '../EstilosComponentes/EstilosAtomos/estiloInput.css'

function Input({tipo, valor, id, onClick, nombre, clase}) {
    return(
        <input type={tipo} value={valor} id={id} onClick={onClick} className={clase} name={nombre}/>
    );
};

export default Input;