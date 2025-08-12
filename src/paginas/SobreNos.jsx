import './EstilosPaginas/estiloVistas.css'
import Button from '../componentes/atomos/Boton';

function SobreNosotros(){

    return(
        <div className="seccion_vista">
            <h1>Meal<span className='transforma'>der</span></h1>
            <p>Somos una app que quiere ayudarte a que tengas una alimentación saludable, variada y original.
                Queremos que encuentres opciones tentadoras y facilitarte la experiencia en la cocina.
                Que te descubras y descubras a otros cocinando.
            </p>
            <h2><span className='transforma'>Somos</span> tu guía para comer <span className='transforma'>mejor</span></h2>

            <h2><span className='transforma'>Descubrí</span> nuevas recetas</h2>
            <img src="" alt="" />
            <p>Podes encontrar recetas creadas por otros ususarios.
                Encontrar versiones nuevas de platos clásicos y diverentes formas de cocinar
            </p>
            
            <h2><span className='transforma'>Inová</span> con recetas del mundo</h2>
            <img src="" alt="" />
            <p>Tenemos alcance global!
                Vas a conocer otras culturas a travez del sabor.
                Podes encontrar nuevos ingredientes y salir de la comida típica.
            </p>

            <h2><span className='transforma'>Compartí</span> tu versión</h2>
            <img src="" alt="" />
            <p>Podes cargar tus propias recetas.
                Compartí con el resto esas recetas que te hacen brillar.
                Deja que otros conozcan tus secretos culinarios, no seas como las abuelas que ocultan un igrediente siempre
            </p>

            <h2>Queremos que<span className='transforma'>cocinar</span> sea</h2>
            <Button texto='Práctico' variante='principal'></Button>
            {/* <p>Que puedas crear la lista de compras basada en las recetas que vas a cocinar, con cantidades</p> */}
            <Button texto='Experiencia cultural' variante='cuarto'></Button>
            {/* <p>Que encuentres recetas de todo el mundo, para que conozcas otras culturas y costumbres desde ese lado.
                Y que optros puedan conocer la tuya.
            </p> */}
            <Button texto='Organizado' variante='terciario'></Button>
            {/* <p>Que lleves una planificación de tus comidas, para poder llevar una rutina más organizada y una alimentación mas saludable</p> */}
            <Button texto='Compartir' variante='secundario'></Button>
            {/* <p>Cargá tus nuevas recetas o las clásicas pero tu versión. Que otros puedan conocerte</p> */}
        </div>
    );
};

export default SobreNosotros;