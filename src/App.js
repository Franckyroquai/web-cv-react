import './App.css';
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"

function App() {
  return (
    <div className="App">

      <div className="grid__container">
        <div className="sidebar">
          <User />
          <Skills />
        </div>
        <div className="main">
          <Profil />
        </div>
      </div>

      {/* react, material ui, react-html2pdf */
      
      /* compétences - skills */
      /* langues - skills */
      /* centres d'intérets - interest */

      /* colonne de droite */
      /* profil - profil */
      /* formations - formations */
      /* exp - experiences */

      /* light/dark mode */
      /* generation pdf */}
    </div>
  );
}

export default App;
