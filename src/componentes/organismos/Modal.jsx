import { useState, useEffect, useContext } from 'react';
import { RecetasPropiasContext } from '../../contextos/RecetasPropiasContext.jsx';
import '../EstilosComponentes/EstilosOrganismos/estiloModal.css';
import Input from '../atomos/Input.jsx';
import Button from '../atomos/Boton.jsx';

export function Modal ({ isOpen, isClose, modalMode, receta }) {

    const {crearReceta, actualizarReceta} = useContext(RecetasPropiasContext);

    const [categorias , setCategorias] = useState([]);
    const [currentReceta, setCurrentReceta] = useState({ name: "", description: "", img: "", categoria: "" });

    useEffect(() => {
        if (modalMode === 'edit' && receta) {
            setCurrentReceta({
                name:receta.name || "",
                description: receta.description || "",
                img: receta.img || "",
                categoria: receta.categoria || "",
            });
        } else {
            setCurrentReceta({
                name: "",
                description: "",
                img: "",
                categoria: "",

            })
        }
    }, [modalMode, receta]);

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

    useEffect (() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then (res => res.json())
        .then (data => {
            setCategorias(data.categories);
        })
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCurrentReceta((prev) => ({
            ...prev, [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(modalMode === 'create') {
            crearReceta(currentReceta);
        }else if (modalMode === 'edit' && receta?.id) {
            actualizarReceta({...currentReceta, id: receta.id});
        };

        isClose();
    };

    if (!isOpen) return null;

    return (
        <div className='modal_overlay'>
            <div className='modal_container'>
                <Button onClick={isClose} className='modal_cerrar' texto='X' variante='diferente' />
                <h2>{modalMode === 'create' ? 'Crea tu receta' : 'Edita tu receta'}</h2>
                <form onSubmit={handleSubmit} className='form_container'>
                    <div className='modal_inputs'>
                        <label>Nombre de la receta</label>
                        <Input tipo='text' nombre='name' value={currentReceta.name} onChange={handleChange} clase='input'></Input> 
                    </div>
                    
                    <div className='modal_inputs'>
                        <label>Instrucciones de preparación</label>
                        <textarea tipo='text' nombre='description' value={currentReceta.description} onChange={handleChange} className='input'></textarea>
                    </div>
                    
                    <div className='modal_inputs'>
                        <label>URL de la imagen</label>
                        <Input tipo='text' nombre='img' value={currentReceta.img} onChange={handleChange} clase='input'></Input>
                    </div>
                    
                    <div className='modal_inputs'>
                        <label>Categoría</label>
                        <select name='categoria' value={currentReceta.categoria} onChange={handleChange} className='input'>
                            <option value="">Seleccioná una categoría</option>
                                {categorias.map ((cat) => (
                                <option key={cat.idCategory} value={cat.strCategory}>{cat.strCategory}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <Button type='submit' texto={modalMode === 'create' ? 'Crear Receta' : 'Guardar Cambios'} variante='principal' />
                        <Button type='button' onClick={isClose} texto='Cancelar' variante='secundario'/>
                    </div>
                </form>
            </div>

        </div>
    );
};

