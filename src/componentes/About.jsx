import { useEffect } from "react";
import './About.css'
import gooodMe from '../imagenes/gooodMe.png'

function About({textos, idioma}){
    useEffect(() => {

        const divMovimiento = document.querySelector(".animacionScrollDerecha");
        
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
            <div className= "divSobreMi animacionScrollDerecha">
                <div className="infoSobreMi">
                    <h2>{textos[idioma].sobreMi}</h2>
                    <p className= "palabrasSobreMi">{textos[idioma].palabrasSobreMi}</p>
                </div>
                <div className="imagenAnimada">
                    <img className="fotoCatherineAnimada" src={gooodMe} alt="foto de Catherine" />
                </div>
                
            </div>
        </section>

    )

}

export default About; 