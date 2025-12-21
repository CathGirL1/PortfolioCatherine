
import './Projects.css'
import { useEffect } from 'react';
import portfolioParte1 from '../imagenes/portfolioParte1.png'
import portfolioParte2 from '../imagenes/portfolioParte2.png'
import portfolioParte3 from '../imagenes/portfolioParte3.png'
import servicioTecParte1 from '../imagenes/servicioTecParte1.png'
import servicioTecParte2 from '../imagenes/servicioTecParte2.png'
import servicioTecParte3 from '../imagenes/servicioTecParte3.png'
import servicioTecParte4 from '../imagenes/servicioTecParte4.png'
import servicioTecParte5 from '../imagenes/servicioTecParte5.png'
import servicioTecParte6 from '../imagenes/servicioTecParte6.png'
import servicioTecParte7 from '../imagenes/servicioTecParte7.png'
import radioFMparte1 from '../imagenes/radioFMparte1.png'
import radioFMparte2 from '../imagenes/radioFMparte2.png'
import radioFMparte3 from '../imagenes/radioFMparte3.png'
import radioFMparte4 from '../imagenes/radioFMparte4.png'
import radioFMparte5 from '../imagenes/radioFMparte5.png'
import radioFMparte6 from '../imagenes/radioFMparte6.png'
import radioFMparte7 from '../imagenes/radioFMparte7.png'
import radioFMparte8 from '../imagenes/radioFMparte8.png'
import radioFMparte9 from '../imagenes/radioFMparte9.png'
import radioParte1 from '../imagenes/radioParte1.png'
import radioParte2 from '../imagenes/radioParte2.png'
import radioParte3 from '../imagenes/radioParte3.png'
import radioParte4 from '../imagenes/radioParte4.png'
import radioParte5 from '../imagenes/radioParte5.png'
import radioParte6 from '../imagenes/radioParte6.png'
import radioParte7 from '../imagenes/radioParte7.png'
import radioParte8 from '../imagenes/radioParte8.png'
import radioParte9 from '../imagenes/radioParte9.png'
import radioParte10 from '../imagenes/radioParte10.png'
import radioParte11 from '../imagenes/radioParte11.png'


function Projects({textos, idioma}){
       

    useEffect(() => {
        const elementosDelContact = document.querySelectorAll(".animacionScrollArriba");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }else{
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.3}
        );

        elementosDelContact.forEach((el) => observer.observe(el));

        return () => {
            elementosDelContact.forEach((el) => observer.unobserve(el));
        };
    }, []);


    return(


        <article id = "proyectosSoftware" className="apartadoProyectos">
            <div className="divInformacionProyectos">
                <h2 className="tituloProyectos">{textos[idioma].proyectos}</h2>
            </div>
            
            <div className="proyectoServicioTecnico animacionScrollArriba">
                <div className="infoServicioTecnico">
                    <h2>{textos[idioma].tituloServicioTecnico}</h2>
                    <p className= "palabrasServicioTecnico">{textos[idioma].palabrasServicioTecnico}</p>
                </div>
                <div className="capturasServicioTecnico">
                   <img className="servicioTecParte1" src = {servicioTecParte1} alt = "foto parte 1 servicio tecnico"></img>
                   <img className="servicioTecParte2" src = {servicioTecParte2} alt = "foto parte 2 servicio tecnico"></img>
                   <img className="servicioTecParte3" src = {servicioTecParte3} alt = "foto parte 3 servicio tecnico"></img>
                   <img className="servicioTecParte4" src = {servicioTecParte4} alt = "foto parte 4 servicio tecnico"></img>
                   <img className="servicioTecParte5" src = {servicioTecParte5} alt = "foto parte 5 servicio tecnico"></img>
                   <img className="servicioTecParte6" src = {servicioTecParte6} alt = "foto parte 6 servicio tecnico"></img>
                   <img className="servicioTecParte7" src = {servicioTecParte7} alt = "foto parte 7 servicio tecnico"></img>
                </div>
            </div>

            <div className="proyectoRadio animacionScrollArriba">
                <div className="infoProyectoRadio">
                    <h2>{textos[idioma].tituloRadio}</h2>
                    <p className= "palabrasRadio">{textos[idioma].palabrasRadio}</p>
                </div>
                <div className="capturasProyectoRadio">
                   <img className = "radioParte1" src = {radioParte1} alt="foto parte 1 proyecto Radio"></img>
                    <img className = "radioParte2" src = {radioParte2} alt="foto parte 2 proyecto Radio"></img>
                    <img className = "radioParte3" src = {radioParte3} alt="foto parte 3 proyecto Radio"></img>
                    <img className = "radioParte4" src = {radioParte4} alt="foto parte 4 proyecto Radio"></img>
                    <img className = "radioParte5" src = {radioParte5} alt="foto parte 5 proyecto Radio"></img>
                    <img className = "radioParte6" src = {radioParte6} alt="foto parte 6 proyecto Radio"></img>
                    <img className = "radioParte7" src = {radioParte7} alt="foto parte 7 proyecto Radio"></img>
                    <img className = "radioParte8" src = {radioParte8} alt="foto parte 8 proyecto Radio"></img>
                    <img className = "radioParte9" src = {radioParte9} alt="foto parte 9 proyecto Radio"></img>
                    <img className = "radioParte10" src = {radioParte10} alt="foto parte 10 proyecto Radio"></img>
                    <img className = "radioParte11" src = {radioParte11} alt="foto parte 11 proyecto Radio"></img>
                </div>
            </div>

            <div className="proyectoRadioFM animacionScrollArriba">
                <div className="infoProyectoRadioFM">
                    <h2>{textos[idioma].tituloRadioFM}</h2>
                    <p className= "palabrasRadioFM">{textos[idioma].palabrasRadioFM}</p>
                </div>
                <div className="capturasProyectoRadioFM">
                    <img className = "radioFMparte1" src = {radioFMparte1} alt="foto parte 1 proyectoRadioFM"></img>
                    <img className = "radioFMparte2" src = {radioFMparte2} alt="foto parte 2 proyectoRadioFM"></img>
                    <img className = "radioFMparte3" src = {radioFMparte3} alt="foto parte 3 proyectoRadioFM"></img>
                    <img className = "radioFMparte4" src = {radioFMparte4} alt="foto parte 4 proyectoRadioFM"></img>
                    <img className = "radioFMparte5" src = {radioFMparte5} alt="foto parte 5 proyectoRadioFM"></img>
                    <img className = "radioFMparte6" src = {radioFMparte6} alt="foto parte 6 proyectoRadioFM"></img>
                    <img className = "radioFMparte7" src = {radioFMparte7} alt="foto parte 7 proyectoRadioFM"></img>
                    <img className = "radioFMparte8" src = {radioFMparte8} alt="foto parte 8 proyectoRadioFM"></img>
                    <img className = "radioFMparte9" src = {radioFMparte9} alt="foto parte 9 proyectoRadioFM"></img>
                </div>
            </div>

            <div className="proyectoPortfolio animacionScrollArriba">
                <div className="infoProyectoPortfolio">
                    <h2>{textos[idioma].tituloPortfolio}</h2>
                     <p className= "palabrasPortfolio">{textos[idioma].palabrasPortfolio}</p>

                </div>
                <div className="capturasPortfolio">
                    <img className="portfolioPart1" src = {portfolioParte1} alt = "foto parte 1 portfolio"></img>
                    <img className="portfolioPart2" src = {portfolioParte2} alt = "foto parte 2 portfolio"></img>
                    <img className="portfolioPart3" src = {portfolioParte3} alt = "foto parte 3 portfolio"></img>
                </div>
            </div>


        </article>


    ); 


}

export default Projects; 