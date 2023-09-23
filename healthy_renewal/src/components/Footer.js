import React from 'react'
import '../styles/Footer.css';
import Instagram from '../imagenes/insta.png';
import Facebook from '../imagenes/face.png';
import Twitter from '../imagenes/twit.png';
import Whatsapp from '../imagenes/whats.png';


const Footer = () => {
  return (
    <footer>
            <div className="footer-container">
           <div >
                <h1>Healthy Renewal</h1>
                <p>Correo: healthy.renewal@email.com</p>
                <p>Tel: +573051234567</p>
                <p>2023</p>

           </div>
           <div id="informacion-container"> 
                <h1 id="tituloInformacion"> Información</h1>
                <p> Nosotros</p>
                <p>Contáctanos</p>
                <p>Términos y condiciones</p>
                <p>Soporte</p>
           </div>
           <div >
                <h1 id="tituloSiguenos">Síguenos</h1>
                <div id="siguenosdiv">                   
                            <img className="imgredes" src={Instagram} title="@Healthy.Renewal" />                   
                            <img className="imgredes" src={Facebook} title="@Healthy.Renewal"/>                    
                            <img className="imgredes" src={Twitter} title="#HealthyRenewal"/>                    
                            <img className="imgredes" src={Whatsapp} title="HRWhatsapp"/>                    
                </div>
             </div>
           </div>
        </footer>  
  )
}

export default Footer;