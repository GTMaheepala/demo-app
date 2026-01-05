import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Work />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
