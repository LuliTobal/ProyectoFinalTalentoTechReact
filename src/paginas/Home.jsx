import CardReceta from "../componentes/organismos/CardReceta";
import Categorias from '../componentes/organismos/Categorias'
import Botones from '../componentes/atomos/Boton'

function Home(){

    return(
        <div>
            <section>
                <h2>Categorias</h2>
                <Categorias /> 
            </section>

            <Botones variante={'principal'} texto={'probando1'} />
            <Botones variante={'secundario'} texto={'probando1'} />
            <Botones variante={'terciario'} texto={'probando1'} />

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