import './App.css';
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import FormationsExperiences from "./components/FormationsExperiences";
import DarkMode from "./components/DarkMode"
import Realisations from "./components/Realisations"


function App() {
  return (
    <div className="App">

      <div className="grid__container">
        <div className="sidebar">
          <div className="actions">
            <DarkMode />
            {/* <button>pdf</button> */}
          </div>
          
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
          <Realisations />
          <FormationsExperiences />
        </div>
      </div>
    </div>
  );
}

export default App;
