import Appbar from "./components/Appbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import End from "./components/End";
import Project from "./components/Project"
import "./App.css"
import Education from "./components/Education";


function App() {
  return (
    <div className="App">
     <Appbar></Appbar>
     <Header></Header>
     <Skills></Skills>
     <Education></Education>
     <Project></Project>
     <Footer></Footer>
<End></End>
    </div>
  );
}

export default App;
