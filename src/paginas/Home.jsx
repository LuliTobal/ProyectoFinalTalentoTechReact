import CardReceta from "../componentes/CardReceta";

function Home(){

    return(
        <div>
            <section>
                <h2>Categorias</h2>
                {/*Compornente carrusel categoria */}   
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