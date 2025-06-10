import { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext();

export const RecetasProvider = ({ children }) => {

    const [recetas, setRecetas] = useState([]);
    
    const fetchRandomRecetas = async () => {
        const res = await fetch ('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await res.json();
        setRecetas((prevReceta) => [...prevReceta, data.meals[0]]);
    };

    useEffect(() => {
        const fetchVarias = async () => {
          for (let i = 0; i < 3; i++) {
            await fetchRandomRecetas();
          }
        };
        fetchVarias();
    }, []);

     return(
         <RecetasContext.Provider value={{recetas, fetchRandomRecetas}}>
             {children}
         </RecetasContext.Provider>
     );
};