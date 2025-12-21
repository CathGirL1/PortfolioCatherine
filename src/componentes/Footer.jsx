import './Footer.css'


function Footer({textos, idioma}){

    return (

        <footer className="footer">
           <div class="footer-contenedor">
               {textos[idioma].footer}
           </div>
        </footer>
    );
}

export default Footer 