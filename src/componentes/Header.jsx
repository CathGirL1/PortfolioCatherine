
import "./Header.css"
import logo from '../imagenes/logo.png'
import banderaEEUU from '../imagenes/banderaEEUU.png'
import banderaEspaña from '../imagenes/banderaEspaña.png'

function Header({ setIdioma }){
    return(
        <header className="header">
          
          <img className="logoCatherine" src={logo} alt="Logo" />
          <nav className= "nav">
            <ul className="nav-links">
              <li><a href="presentacionInicio">Inicio</a></li>
              <li><a href="#sobreMi">Sobre mí</a></li>
              <li><a href="#proyectosSoftware">Proyectos</a></li>
              <li><a href="#tecnologias">Tecnologias</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>

          </nav>
          <div className="idiomas">
            <button onClick={ () => setIdioma("es")}>
              <img src={banderaEspaña} alt="Español" />
            </button> 

            <button onClick={ () => setIdioma("en")}>
              <img src={banderaEEUU} alt="English" />
            </button> 

          </div>

        </header>
        
    );
}

export default Header; 