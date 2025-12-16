import { useEffect } from "react";
import './Technologies.css'
import backendTecnologias from '../imagenes/backendTecnologias.png'
import herramientasTecnologias from '../imagenes/herramientasTecnologias.png'
import frontendTecnologias from '../imagenes/frontendTecnologias.png'
import dataBaseTecnologias from '../imagenes/dataBaseTecnologias.png'

function Technologies(){
    useEffect(() => {

        const divMovimiento = document.querySelector(".tecnologiasContenido");
        
        const observer = new IntersectionObserver(

            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        entry.target.classList.add("visible"); //se activa la animacion cuando entra a la page
                    }else{
                        // y aca se quta cuando sale
                        entry.target.classList.remove("visible"); 
                    }
                }
            )},
            {threshold: 0.3} //se activa cuando por lo menos el 30% del div se ve
        ); 

        if(divMovimiento) observer.observe(divMovimiento); 

        return () => {
            if (divMovimiento) observer.unobserve(divMovimiento); 
        }                 

    },[])
    
    return(

       <section id="tecnologias" className="seccionTecnologias">
            <div className="tituloDiv">
                <h2 className="tituloTecnologias">Tecnologías</h2>
            </div>

            <div className="tecnologiasContenido">
                <div className = "filaSuperior">
                    <div className="columnaBackend">
                        <h2 className="backendH2">Backend</h2>
                        <img className="capturaBackend" src={backendTecnologias} alt="captura de tecnologías de backend"/>
                    </div>

                    <div className="columnaHerramientas">
                        <h2 className="herramientasH2">Herramientas</h2>
                        <img className="capturaHerramientas" src={herramientasTecnologias} alt="captura de tecnologías de herramientas"/>
                    </div>
                </div>
               
                <div className="filaInferior">
                    <div className="columnaFrontend">
                        <h2 className="frontendH2">Frontend</h2>
                        <img className="capturaFrontend" src={frontendTecnologias} alt="captura de tecnologías de frontend"/>
                    </div>

                    <div className="columnaDataBase">
                        <h2 className="dataBaseH2">Bases de datos</h2>
                        <img className="capturaDataBase" src={dataBaseTecnologias} alt="captura de tecnologías de base de datos"/>
                    </div>
                </div>
                    
            </div>
        </section>


    ); 


}

export default Technologies; 