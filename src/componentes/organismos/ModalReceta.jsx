import { useEffect , useMemo } from 'react';
import '../EstilosComponentes/EstilosOrganismos/estiloModal.css';
import Button from '../atomos/Boton.jsx';

export function ModalReceta ({ receta = {} , isOpen, isClose }) { //el ={} de receta es por si viene undefined

    useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const ingredientes = useMemo(() => { //memoriza el resultado y vuelve a calcular la lista si cambia receta, por eso [receta]
        return (
            Array.from({length: 20} , (_, i) => { //creamos un array a partir de un objeto con longitud especifica, porque en la API devuelve hasta 20 medidas e 20 ingredientes // segundo argumento un map que "i" es el indice
                const idx = i + 1; //usamos la i para crear el numero de las propiedades api y hacerlo dinámico
                const medida = receta[`strMeasure${idx}`]; //accedemos dinamicamente a las medidas e ingredientes
                const ingrediente = receta[`strIngredient${idx}`];

                if(!ingrediente || ingrediente.trim() === "") return null; //si el ingrediente no existe o es solo espacios devuelve null

                const medidaLimpia = medida?.trim() ?? ""; //"?." = opcional chaining (existe?), .trim() le quita los espacios, si medida es undefined o null lo asigna como vacío
                const ingredienteLimpio = ingrediente.trim();

                return medidaLimpia ? `${medida} - ${ingrediente}` : ingredienteLimpio; //un operador ternario que evalua, si hay medida devuelve concatenado, sino solo el ingrediente
            })
        ).filter(Boolean); //elimina elementos que son falsy(null, undefined, "", 0 o false)
    }, [receta]); //hace que se ejecute el useMemo cuando hay cambios en receta

    return (
        <div className='modal_overlay'>
            <div className='modal_container' key={receta.idMeal}>
                <Button onClick={isClose} className='modal_cerrar' texto='X' variante='diferente' />
                
                <section className='form_container'>
                    <div className='modal_inputs'>
                        <h1>{receta.strMeal}</h1> {/*NOMBRE DE LA RECETA QUE ENTRA */}
                        <h4>{receta.strCategory}</h4>
                        <h3>{receta.strArea}</h3>
                        <img src={receta.strMealThumb} alt={receta.strMeal} />
                    </div>
                    <div className='modal_inputs'>
                        <ul>
                            {ingredientes.map((texto, i) => ( //Acá hacemos un map para recorrer el array creado anteriormente
                                <li key={texto + i}>{texto}</li> //en cada item de la lista se renderiza la información de texto
                            ))}
                        </ul>
                        <p>{receta.strInstructions}</p>
                    </div>
                </section>
                
            </div>
        </div>
    );
};