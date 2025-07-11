import SeccionRecetasGrandes from "../componentes/organismos/SeccionRecetasGrandes";

function TusRecetas(){

    return(
        <div>
            <section>
                <h2>RECETAS CREADAS</h2>
                <SeccionRecetasGrandes modo='propias' />
            </section>

            <section>
                <h2>RECETAS GUARDADAS</h2>
                
            </section>
            
        </div>
    );
};

export default TusRecetas;