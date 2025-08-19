import { useState } from 'react';
import './EstilosPaginas/estiloVistas.css'
import './EstilosPaginas/estiloSobreNos.css'
import Button from '../componentes/atomos/Boton';

function SobreNosotros(){

    const [activo, setActivo] = useState(null);

    const botones = [
        {
            id: 'practico',
            texto: 'Práctico',
            variante: 'principal',
            descripcion: 'Que puedas crear la lista de compras basada en las recetas que vas a cocinar, con cantidades'
        },
        {
            id: 'cultura',
            texto: 'Experiencia cultural',
            variante: 'cuarto',
            descripcion: 'Que encuentres recetas de todo el mundo, para que conozcas otras culturas y costumbres desde ese lado. Y que optros puedan conocer la tuya.'
        },
        {
            id: 'organizado',
            texto: 'Organizado',
            variante: 'terciario',
            descripcion: 'Que lleves una planificación de tus comidas, para poder llevar una rutina más organizada y una alimentación mas saludable'
        },
        {
            id: 'compartir',
            texto: 'Compartir',
            variante: 'secundario',
            descripcion: 'Cargá tus nuevas recetas o las clásicas pero tu versión. Que otros puedan conocerte'
        }
    ];

    const toggleDescripcion = (id) => {
        setActivo(activo === id ? null : id);
    };


    return(
        <div className="estilo_vista">
            <section className='cabecera_vista'>
                <h1 className='titulo_vista'>Meal<span className='transforma'>Der</span></h1>
                <h3 className='bajada'>Somos una app que quiere ayudarte a que tengas una alimentación saludable, variada y original.
                    Queremos que encuentres opciones tentadoras y facilitarte la experiencia en la cocina.
                    Que te descubras y descubras a otros cocinando.
                </h3>
            </section>
            
                <h2>Queremos que<span className='transforma'> cocinar</span> sea</h2>
            <section className='seccion_vista'>
                {botones.map((btn) => (
                    <div className='desplegable'>
                        <Button className='boton_caracteristicas' texto={btn.texto} variante={btn.variante} onClick={() => toggleDescripcion(btn.id)} />
                        { activo === btn.id && (
                            <div className='texto_descripcion texto_desplegable'>{btn.descripcion}</div>
                        )}
                    </div>
                ))}
            </section>

            <h2><span className='transforma'>Somos</span> tu guía para comer <span className='transforma'>mejor</span></h2>
            
            <section className='seccion_vista_caracteristicas'>
                <div className='seccion_container'>
                    <h2><span className='transforma'>Descubrí</span> nuevas recetas</h2>
                    <div className='seccion_detalles'>
                        <img src="src/assets/comparti.png" alt="" style={{width: '40%'}}/>
                        <p className='texto_descripcion'>Podes encontrar recetas creadas por otros ususarios.
                            Encontrar versiones nuevas de platos clásicos y diverentes formas de cocinar
                        </p>
                    </div>
                </div>

                <div className='seccion_container'>
                    <h2><span className='transforma'>Planificá</span> tus comidas</h2>
                    <div className='seccion_detalles'>
                        <img src="src/assets/comparti.png" alt="" style={{width: '40%'}}/>
                        <p className='texto_descripcion'>Podes cargar tus propias recetas.
                            Compartí con el resto esas recetas que te hacen brillar.
                            Deja que otros conozcan tus secretos culinarios, no seas como las abuelas que ocultan un igrediente siempre
                        </p>
                    </div>
                </div>

                <div className='seccion_container'>
                    <h2><span className='transforma'>Innová</span> con recetas del mundo</h2>
                    <div className='seccion_detalles'>
                        <img src="src/assets/comparti.png" alt="" style={{width: '40%'}}/>
                        <p className='texto_descripcion'>Tenemos alcance global!
                            Vas a conocer otras culturas a travez del sabor.
                            Podes encontrar nuevos ingredientes y salir de la comida típica.
                        </p>
                    </div>
                </div>

                <div className='seccion_container'>
                    <h2><span className='transforma'>Compartí</span> tu versión</h2>
                    <div className='seccion_detalles'>
                        <img src="src/assets/comparti.png" alt="" style={{width: '40%'}}/>
                        <p className='texto_descripcion'>Podes cargar tus propias recetas.
                            Compartí con el resto esas recetas que te hacen brillar.
                            Deja que otros conozcan tus secretos culinarios, no seas como las abuelas que ocultan un igrediente siempre
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SobreNosotros;