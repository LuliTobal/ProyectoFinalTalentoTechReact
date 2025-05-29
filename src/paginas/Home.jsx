import Categorias from '../componentes/organismos/Categorias'
import SeccionRecetasGrandes from "../componentes/organismos/SeccionRecetasGrandes";
import SeccionRecetasChicas from '../componentes/organismos/SeccionRecetasChicas';
import './EstilosPaginas/estiloHome.css'

function Home(){

    return(
        <div className='vista_home'>
            <section className='seccion_vista'>
                <h2 className='titulo_seccion'>Categorias</h2>
                <Categorias /> 
            </section>
            <section className='seccion_vista'>
                <h2 className='titulo_seccion'>Recetas que te pueden gustar</h2>
                <SeccionRecetasGrandes />
            </section>
            <section className='seccion_vista'>
                <h2 className='titulo_seccion'>Ultimas recetas</h2>
                <SeccionRecetasChicas />
            </section>
        </div>
    )
};

export default Home;