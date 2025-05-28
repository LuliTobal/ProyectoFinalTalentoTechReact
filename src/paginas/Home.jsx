import Categorias from '../componentes/organismos/Categorias'
import SeccionRecetasGrandes from "../componentes/organismos/SeccionRecetasGrandes";
import SeccionRecetasChicas from '../componentes/organismos/SeccionRecetasChicas';

function Home(){

    return(
        <div>
            <section>
                <h2>Categorias</h2>
                <Categorias /> 
            </section>
            <section>
                <h2>Recetas que te pueden gustar</h2>
                <SeccionRecetasGrandes />
            </section>
            <section>
                <h2>Ultimas recetas</h2>
                <SeccionRecetasChicas />
            </section>
        </div>
    )
};

export default Home;