import { useState } from "react";
import { Modal } from "../componentes/organismos/Modal";
import SeccionRecetasGrandes from "../componentes/organismos/SeccionRecetasGrandes";
import Button from "../componentes/atomos/Boton";

function TusRecetas(){

    const [isOpen, setIsOpen] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

    //para abrir el modal de crear nueva receta
    const modalNuevaReceta = () => { //funcion que se va a ejecutar al clickear el boton
        setModalMode('crear'); //seteamos el modo del modal para que el metodo que utilice el form sea el de post
        setRecetaSeleccionada(null); //no le pasamos una receta porque creamos una nueva
        setIsOpen(true); //seteamos el modal como open para que pueda verse
    };

    //  //para abrir el modal de editar la receta y pasarle la receta
    // const modalEditarReceta = (receta) => { //recibe la receta que se quiere editar
    //     setModalMode('editar'); //seteamos el modal para que el form que se abra sea el de editar con la receta a modificar
    //     setRecetaSeleccionada(receta); //le pasamos la receta para que muestre los datos y se habilite la edición
    //     setIsOpen(true); //seteamos en true para que se abra
    // };

    // //para cerrar el modal
    // const cerrarModal = () => {
    //     setIsOpen(false); //seteamos en false para que no se visualice el modal
    //     setRecetaSeleccionada(null);
    // };

    return(
        <div>
            <section>
                <div style={{display: 'inline-flex', width: '100%', justifyContent: 'space-around', padding: '2rem'}}>
                    <h2 style={{marginRight: '5rem', width: '90%'}}>RECETAS CREADAS</h2>
                    <Button texto='Agregar receta' variante='principal' icon='sumar' onClick={modalNuevaReceta}/>
                </div>
                <SeccionRecetasGrandes modo='propias' onEditReceta={(receta) => {
                    setRecetaSeleccionada(receta);
                    setModalMode('edit');
                    setIsOpen(true)}}
                />
            </section>

            <section>
                <h2>RECETAS GUARDADAS</h2>
                
            </section>

            {isOpen && (
                <Modal isOpen={isOpen} isClose={() => setIsOpen(false)} modalMode={modalMode} receta={recetaSeleccionada} />
            )}
        </div>
    );
};

export default TusRecetas;