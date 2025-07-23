import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const RecetarioContext = createContext(); //creacion del contexto

export const RecetarioProvider = ({children}) => { //creacion de proveedor, pasamos por param el componente que accede a esta info
    const [recetario , setRecetario] = useState([]); //use state para manejar el recetario
    const [contador , setContador] = useState(0); //AGREGADO POR MI



    //funcion flecha que recibe la receta
    const agregarAlRecetario = (receta) => {
        setRecetario((prevRecetario) => { //guarda en recetario lo que devuelve, toma lo que habia guardado
            const existe = prevRecetario.find(item => item.id === receta.id); //busca en el lo que ya tenia recetario y hace un mapeo, cada item(que ya estaba en el recetario toma su id y lo compara con el del nuevo que se quiere agregar)
            // const agregarLista = () => {
            //     Swal.fire({
            //         position: "top-end",
            //         icon: "success",
            //         title: "Receta agregada",
            //         showConfirmButton: false,
            //         timer: 1500
            //     });
            // };

            //MODIFICAR PARA QUE LO AGREGUE UNA VEZ
            if (existe) { //si devuelve true(osea ya está cargado)
                return prevRecetario.filter(item => item.id !== receta.id);
                // return prevRecetario.map(item => item.id === receta.id ? {...item, cantidad: item.cantidad + 1 } : item);
            } else {
                return [...prevRecetario, { ...receta }];
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Receta agregada",
                    showConfirmButton: false,
                    timer: 1500
                });                
            }
            // agregarLista();//AGREGADO POR MI
            // return ([...prevRecetario, {...receta, cantidad: 1}]);
        });
        //setContador(recetario.length);
        console.log(recetario)
        console.log(contador)
    };
    
    

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