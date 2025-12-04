
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


function Projects(){
        useEffect(() => {
           
    }, []);


    return(


        <article id = "proyectosSoftware" className="apartadoProyectos">
            <div className="divInformacionProyectos">
                <h2 className="tituloProyectos">Proyectos de software realizados</h2>
            </div>
            
            <div className="proyectoServicioTecnico">
                <div className="infoServicioTecnico">
                    <h2>Servicio Tecnico</h2>
                    <p className= "palabrasServicioTecnico"> Aplicación web desarrollada para la gestión de servicios técnicos de reparación, que permite administrar clientes, técnicos, pedidos y órdenes de trabajo, además de generar reportes detallados y agregar comentarios a cada orden. Para su desarrollo se utilizaron C# y ASP.NET en el backend. En el frontend se emplearon Razor Pages de ASP.NET, combinando HTML y CSS, brindando una interfaz funcional.
                    </p>
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

            <div className="proyectoRadio">
                <div className="infoProyectoRadio">
                    <h2>Proyecto Radio</h2>
                    <p className= "palabrasRadio"> Pagina web basada en el patrón MVC, con login, registro y CRUD de usuarios, noticias y programas. Incluye módulos de clima y cotizaciones.
                        Backend: C#, ASP.NET MVC, Entity Framework, ADO.NET, SQL Server. Frontend: Razor, HTML, CSS.
                    </p>
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

            <div className="proyectoRadioFM">
                <div className="infoProyectoRadioFM">
                    <h2>Proyecto Radio FM</h2>
                    <p className= "palabrasRadioFM"> Aplicación web que permite a los usuarios registrarse e iniciar sesión para acceder a una radio en vivo. Además, ofrece la posibilidad de personalizar la interfaz seleccionando los apartados que deseen visualizar, como el pronóstico del clima, cotizaciones, últimas noticias de Uruguay y estrenos de películas. Desarrollada utilizando .NET MAUI y XAML para el frontend, C# en el backend y SQLite como base de datos local.
                    </p>
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

            <div className="proyectoPortfolio">
                <div className="infoProyectoPortfolio">
                    <h2>Proyecto Portfolio</h2>
                     <p className= "palabrasPortfolio">  Proyecto personal desarrollado con React, donde apliqué mis conocimientos en JavaScript, HTML y CSS para construir un portafolio web moderno e interactivo.
                        Durante su desarrollo, fui adquiriendo una comprensión más profunda del ecosistema de React, especialmente en la gestión de componentes, hooks y estilos dinámicos.
                        Este proyecto me permitió descubrir el potencial de React para crear interfaces visualmente atractivas y con un diseño moderno, explorando animaciones y decoración adaptable.
                        Frontend: React, JavaScript, HTML, CSS. Patrón de diseño: Basado en componentes reutilizables y arquitectura modular.
                    </p>

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