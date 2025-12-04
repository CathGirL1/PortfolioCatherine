import "./Home.css"
import catherine from '../imagenes/catherine.png'

function Home(){

    return (
        <section id = "presentacionInicio" className="fondoHomePresentacion">
            <img className="fotoCatherine" src={catherine} alt="foto de Catherine" />
            <div className="infoCatherine">
                <h1 className="palabra">Analista programadora</h1>
                <h2>Catherine Sonderegger</h2>
            </div>
        </section>
    );
}

export default Home; 