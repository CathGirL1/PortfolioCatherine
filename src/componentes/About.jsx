import { useEffect } from "react";
import './About.css'
import gooodMe from '../imagenes/gooodMe.png'

function About(){
    useEffect(() => {

        const divMovimiento = document.querySelector(".divSobreMi");
        
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
    },[]); 

    

    return(

        <section id="sobreMi" className="seccionSobreMi">
            <div className= "divSobreMi">
                <div className="infoSobreMi">
                    <h2>Sobre mi...</h2>
                    <p className= "palabrasSobreMi"> Estoy en la etapa final de la carrera Analista Programador en la
                        Universidad Técnica del CEI. Trabajé en varios proyectos de software,
                        como una emisora de radio en vivo con mapa geolocalizable o una página
                        para la gestión de pedidos de servicios de reparación técnica.  
                        Tengo 20 años, siempre tengo ganas de superarme, aprendiendo algo nuevo
                        y poniendo a prueba mis conocimientos adquiridos!
                    </p>
                </div>
                <div className="imagenAnimada">
                    <img className="fotoCatherineAnimada" src={gooodMe} alt="foto de Catherine" />
                </div>
                
            </div>
        </section>

    )

}

export default About; 