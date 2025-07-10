import { createContext, useState, useEffect } from "react";

export const RecetasPropiasContext = createContext();

const ApiRecetasPropias = 'https://686e794e91e85fac429de725.mockapi.io/api/tusrecetas/tusrecetas';

export const RecetasPropiasProvider = ({children}) => {
    const [recetas, setRecetas] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecetas = async () => {
        setLoading(true);
        try{ //intenta hacer el fetch y setea los datos de la api en recetas usando setRecetas
            const res = await fetch(ApiRecetasPropias);
            if (!res.ok) throw new Error('Error al obtener información');

            const data = await res.json();
            setRecetas(data);
        } catch (error) {
            alert('Error al cargar datos')
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const crearReceta = async(receta) => {
        try{
            const res = await fetch(ApiRecetasPropias, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(receta),
            });
            if (!res.ok) throw new Error('Error al crear item');
            await fetchRecetas();
        }catch (error) {
            alert('La receta no pudo ser creada');
            console.error(error);
        }
    };

    const actualizarReceta = async(receta) => {
        try {
            const res = await fetch(`${ApiRecetasPropias}/${receta.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(receta)
            });
            if (!res.ok) throw new Error ('Error al modificar la receta');
            await fetchRecetas();
        } catch (error) {
            alert('Se produjo un error al cargar las modificaciones, vuelva a intentarlo');
            console.error(error);
        }
    };

    const eliminarReceta =async(id) => {
        if(window.confirm('¿Seguro quieres elimnar la receta?')) {
            try {
                const res = await fetch(`${ApiRecetasPropias}/${id}`, {method: 'DELETE'});
                if(!res.ok) throw new Error('Error al eliminar la receta');
                await fetchRecetas();
            } catch (error) {
                alert('Error eliminando la receta');
                console.error(error);
            }
        }
    };

    useEffect(() => {
        fetchRecetas();
    }, []);

    return(
        <RecetasPropiasContext.Provider value={{recetas, loading, fetchRecetas, crearReceta, actualizarReceta, eliminarReceta}} >
            {children}
        </RecetasPropiasContext.Provider>
    );
};