import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import './EstilosComponentes/estiloFooter.css';

function Footer() {

    return(
        <footer className="container_footer">
            <div className="container_info">
                <Link to='/nosotros' className="footer_section">
                    <section>
                        <h4>Sobre Nosotros</h4>
                        <p>Te invitamos a conocernos. Podes encontrar que ofrecemos, cual es la visión y la misión de nuestra empresa. Y saber cuales son las propuestas que se vienen</p>
                    </section>
                </Link>
                <Link to='/contacto' className="footer_section">
                    <section>
                        <h4>Contacto</h4>
                        <p>Te invitamos a contactarnos, dejanos tus datos en el formulario de contacto y nos estaremos comunicando con vos en la brevedad.</p>
                    </section>    
                </Link>
                <section className="footer_section">
                    <h4>Nuestas Redes</h4>
                    <p>Seguinos en:</p>
                    <div className="footer_redes">
                        <FontAwesomeIcon icon={faFacebook} size="lg"/>
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                        <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                    </div>
                </section>
            </div>
            <p className="footer_derechos">Derechos reservados a Lourdes Tobal - Córdoba 2025</p>
        </footer>
    );
};

export default Footer;