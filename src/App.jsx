import Navbar from "./Components/NavBar/Navbar";
import './Components/NavBar/Navbar.css'
import './App.css'
import Banner from "./Components/Banner/Banner";
import './Components/Banner/Banner.css'
import Rowpost from "./Components/RowPost/Rowpost";
import {orginals,action,drama} from './Constants/urls'
import './Components/RowPost/Rowpost.css'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost url={orginals} title='Netflix orginals'/>
     <Rowpost url={action} title='Action' isSmall/>
     <Rowpost url={drama} title='Drama' isSmall/>
    </div>
  );
}

export default App;
