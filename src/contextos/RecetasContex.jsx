import { createContext, useState } from "react";


export const RecetasContext = createContext();

export const RecetasProvider = ({ children }) => {

    const [recetas, setRecetas] = useState([]);
    const [recetasCategoria , setRecetasCategoria] = useState([]);
    
    
    const fetchRandomRecetas = async () => {
        try{
            const res = await fetch ('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await res.json();
            setRecetas((prevReceta) => [...prevReceta, data.meals[0]]);
        } catch (error) {
            console.error('Error al traer receta aleatoria')
        }
    };

    const fetchCategoriaReceta = async (categoria) => {
        try {
            const res = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`)
            const data = await res.json();
            setRecetasCategoria( data.meals || []);
        } catch (error) {
            console.error('Error al traer receta')
        }
    };

    return(
        <RecetasContext.Provider value={{recetas, fetchRandomRecetas, fetchCategoriaReceta, recetasCategoria}}>
            {children}
        </RecetasContext.Provider>
    );
};