
import Home from "./componentes/Home"
import Header from "./componentes/Header"
import About from "./componentes/About"
import Projects from "./componentes/Projects"
import Technologies from "./componentes/Technologies"
import Contact from "./componentes/Contact"


function App() {
  return (
    <div style={{marginTop: "100px"}}>
      <Home/>
      <Header/>
      <About/>
      <Projects/>
      <Technologies/>
      <Contact/>
    </div>
  );
}

export default App;
