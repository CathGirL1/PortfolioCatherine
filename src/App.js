
import Home from "./componentes/Home"
import Header from "./componentes/Header"
import About from "./componentes/About"
import Projects from "./componentes/Projects"
import Technologies from "./componentes/Technologies"
import Contact from "./componentes/Contact"
import Footer from "./componentes/Footer"
import { useState } from "react";
import { textos } from "./lang"

function App() {
  const [idioma, setIdioma] = useState("es");
  return (
    <div style={{marginTop: "100px"}}>
      <Header idioma={idioma} setIdioma={setIdioma} textos={textos} />
      <Home idioma={idioma} textos={textos} />
      <About textos={textos} idioma={idioma} />
      <Projects textos={textos} idioma={idioma} />
      <Technologies textos={textos} idioma={idioma} />
      <Contact textos={textos} idioma={idioma} />
      <Footer textos={textos} idioma={idioma}/>
    </div>
  );
}

export default App;
