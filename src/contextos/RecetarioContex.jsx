import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';

export const RecetarioContext = createContext(); //creacion del contexto

export const RecetarioProvider = ({children}) => { //creacion de proveedor, pasamos por param el componente que accede a esta info
    const [recetario , setRecetario] = useState([]); //use state para manejar el recetario
    const [contador , setContador] = useState(0); //AGREGADO POR MI

    //funcion flecha que recibe la receta
    const agregarAlRecetario = (receta) => {
        console.log("🔍 Receta recibida:", receta);
        console.log("📌 ID de la receta:", receta?.idMeal);
        setRecetario((prevRecetario) => { //guarda en recetario lo que devuelve, toma lo que habia guardado
            const existe = prevRecetario.find(item => item.idMeal === receta.idMeal); //busca en el lo que ya tenia recetario y hace un mapeo, cada item(que ya estaba en el recetario toma su id y lo compara con el del nuevo que se quiere agregar)

            if (existe) { //si devuelve true(osea ya está cargado)
                const nuevoRecetario = prevRecetario.filter(item => item.idMeal !== receta.idMeal);
                return nuevoRecetario;
            } else {
                const nuevoRecetario = [...prevRecetario, { ...receta }];
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Receta agregada",
                    showConfirmButton: false,
                    timer: 1500
                });

                return nuevoRecetario;       
            }
        });  
    };

    useEffect(() => {
        console.log("Recetario actualizado:", recetario);
        setContador(recetario.length);
    }, [recetario]);

    const eliminarDeRecetario = (id) => {
        setRecetario((prevRecetario) => prevRecetario.filter(item => item.id !== id));
    };

    const vaciarRecetario = () => {
        setRecetario([]);
    };

    return (
        <RecetarioContext.Provider value={{recetario, setRecetario, agregarAlRecetario, eliminarDeRecetario, vaciarRecetario, contador}}>
            {children}
        </RecetarioContext.Provider>
    )
}