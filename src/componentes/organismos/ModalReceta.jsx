import { useEffect } from 'react';
import '../EstilosComponentes/EstilosOrganismos/estiloModal.css';
import Button from '../atomos/Boton.jsx';

export function ModalReceta ({ receta, isOpen, isClose }) {

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
                        <p>{receta.strMeasure1} {receta.strIngredient1} - {receta.strMeasure2} {receta.strIngredient2} - {receta.strMeasure3} {receta.strIngredient3} - {receta.strIngredient4} - {receta.strIngredient5}</p>
                        <p>{receta.strInstructions}</p>
                    </div>
                </section>
                
            </div>
        </div>
    );
};