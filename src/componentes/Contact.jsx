import './Contact.css'
import linkedinIcono from '../imagenes/linkedinIcono.png'
import iconoGitHub from '../imagenes/iconoGitHub.png'
import iconoInstagram from '../imagenes/iconoInstagram.png'
import iconoWpp from '../imagenes/iconoWpp.png'
import {useState} from 'react'; 

function Contact(){

    const [datosFormulario, setDatosFormulario] = useState({

        nombre: "", 
        email: "", 
        mensaje: ""

    })

    const manejarCambioDatosInput = (evento) => {

        const campo = evento.target.id; 
        const valor = evento.target.value; 

        setDatosFormulario({
            ...datosFormulario, 
            [campo]: valor
        })

    }

    const manejoEnvioDatosFormulario = async (evento) => {

        evento.preventDefault(); 
        setEnviado(true); 

        try{
            const respuesta = await fetch("/api/enviar-mensaje", {

                method: "POST", 
                headers: {
                    "Content-Type" : "application/json"
                }, 
                body: JSON.stringify(datosFormulario)

            })

            if(respuesta.ok){
                alert("Correo enviado correctamente");
                setDatosFormulario({nombre: "", email: "", mensaje: ""}) 
            }else{
                alert("Error al enviar el correo"); 
            }


        }catch(error){
            
            console.error("Error al conectar con el servidor:", error); 
            alert("No se pudo conectar con el servidor")

        }

        setEnviado(false); 


    }

    const [estaEnviado, setEnviado] = useState(false); 


    return(

        <section id = "contacto" className="seccionContacto">
            <div className="infoRedesSociales">
                <div className="redesSociales">
                    <h2>Redes sociales</h2>

                    <div className="iconosImagenes">
                        <a className = "iconoLinkedin" href="https://www.linkedin.com/in/catherine-salomé-sonderegger-goméz-20050b387" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcono} alt="Icono de linkedin" width="40" height="40" />
                        </a>
                        <a className = "iconoGitHub" href="https://github.com/CathGirL1" target="_blank" rel="noopener noreferrer">
                            <img src={iconoGitHub} alt="Icono de github" width="40" height="40" />
                        </a>
                        <a className = "iconoInstagram" href="https://www.instagram.com/__cath_1?igsh=MWo0NjZzem8wdXQyNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                            <img src={iconoInstagram} alt="Icono de instagram" width="40" height="40" />
                        </a>
                        <a className = "iconoWpp" href= "https://wa.me/598949650?text=¡Hola!%20Vi%20tu%20portafolio%20y%20me%20encantaría%20contactarte." target="_blank" rel="noopener noreferrer">
                            <img src={iconoWpp} alt="Icono de wpp" width="40" height="40" />
                        </a>
                    </div>
                </div>

                <div className="formularioContacto">
                    <h2>Contáctame</h2>
                    <form className="bandejaFormulario" onSubmit={manejoEnvioDatosFormulario}>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Tu @email" value={datosFormulario.email} onChange={manejarCambioDatosInput}></input>

                        <label htmlFor="nombre">Nombre del propietario de mensaje</label>
                        <input type="text" id="nombre" placeholder="Tu nombre" value={datosFormulario.nombre} onChange={manejarCambioDatosInput}></input>

                        <label htmlFor="mensaje">Asunto del mensaje</label>
                        <textarea id="mensaje" placeholder="Tu mensaje" rows="4" value={datosFormulario.mensaje} onChange={manejarCambioDatosInput}></textarea>

                        <button type="submit" disabled={estaEnviado}>
                            {estaEnviado ? "Enviando..." : "Enviar"}
                        </button>


                    </form>
                </div>
                

            </div>
        </section>

    )


}

export default Contact; 