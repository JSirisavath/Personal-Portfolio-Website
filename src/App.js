// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { PurpleLine } from './components/PurpleLine';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      {/* Custom purple line on the left side with "gradient" effect */}
      <PurpleLine />
      {/* Custom NavBar link */}
      <NavBar />
      {/* Banner with the space animation and about me section. Also includes the "space" background */}
      <Banner />
      {/* Skills tab */}
      <Skills />
    </div>
  );
}

export default App;
