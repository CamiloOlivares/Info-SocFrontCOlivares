import logo from './logo.svg';
import './App.css';
import { Profile } from "./pages/profile";
import { Asistencia } from "./pages/asistencia";

function App() {
  return (
    <div className="App">
      
      <div className="Perfil">
        <Profile/>
      </div>

      <div>
        <Asistencia/>
      </div>
    </div>
    
  );
}

export default App;
