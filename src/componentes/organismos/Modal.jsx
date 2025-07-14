import { useState, useEffect, useContext } from 'react';
import { RecetasPropiasContext } from '../../contextos/RecetasPropiasContext.jsx';
import '../EstilosComponentes/EstilosOrganismos/estiloModal.css';
import Input from '../atomos/Input.jsx';
import Button from '../atomos/Boton.jsx';
import { text } from '@fortawesome/fontawesome-svg-core';

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
                <h2>{modalMode === 'create' ? 'Crea tu receta' : 'Edita tu receta'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nombre de la receta</label>
                    <Input tipo='text' nombre='name' value={currentReceta.name} onChange={handleChange}></Input>
                    <label>Instrucciones de preparación</label>
                    <Input tipo='text' nombre='description' value={currentReceta.description} onChange={handleChange}></Input>
                    <label>URL de la imagen</label>
                    <Input tipo='text' nombre='img' value={currentReceta.img} onChange={handleChange}></Input>
                    <label>Categoría</label>
                    <select name='categoria' value={currentReceta.categoria} onChange={handleChange}>
                        <option value="">Seleccioná una categoría</option>
                        {categorias.map ((cat) => (
                            <option key={cat.idCategory} value={cat.strCategory}>{cat.strCategory}</option>
                        ))}
                    </select>

                    <div>
                        <Button type='submit' texto={modalMode === 'create' ? 'Crear Receta' : 'Guardar Cambios'} />
                        <Button type='button' onClick={isClose} texto='Cancelar' />
                    </div>
                </form>
            </div>
        </div>
    );
};

