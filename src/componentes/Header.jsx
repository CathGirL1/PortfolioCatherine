
import "./Header.css"
import logo from '../imagenes/logo.png'

function Header(){
    return(
        <header>

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
          
        </header>
    );
}

export default Header; 