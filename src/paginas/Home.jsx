import CardReceta from "../componentes/CardReceta";
import Categorias from '../componentes/organismos/Categorias'

function Home(){

    return(
        <div>
            <section>
                <h2>Categorias</h2>
                <Categorias /> 
            </section>

            <section>
                <h2>Recetas</h2>
                <CardReceta />
                <CardReceta />
                <CardReceta />
                <CardReceta />
            </section>


        </div>
    )
}

export default Home;