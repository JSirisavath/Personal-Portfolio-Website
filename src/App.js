// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { PurpleLine } from './components/PurpleLine';

function App() {
  return (
    <div className="App">
      <PurpleLine />
      {/* Custom NavBar link */}
      <NavBar />
      {/* Banner with the space animation and about me section. Also includes the "space" background */}
      <Banner />
    </div>
  );
}

export default App;
