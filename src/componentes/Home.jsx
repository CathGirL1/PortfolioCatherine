import "./Home.css"
import catherine from '../imagenes/catherine.png'

function Home({textos, idioma}){

    return (
        <section id = "presentacionInicio" className="fondoHomePresentacion">
            <img className="fotoCatherine" src={catherine} alt="foto de Catherine" />
            <div className="infoCatherine">
                <h1 className="palabra">{textos[idioma].carrera}</h1>
                <h2>{textos[idioma].nombreApellido}</h2>
            </div>
        </section>
    );
}

export default Home; 