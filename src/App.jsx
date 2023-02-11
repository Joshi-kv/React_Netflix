import Navbar from "./Components/NavBar/Navbar";
import './Components/NavBar/Navbar.css'
import './App.css'
import Banner from "./Components/Banner/Banner";
import './Components/Banner/Banner.css'
import Rowpost from "./Components/RowPost/Rowpost";
import './Components/RowPost/Rowpost.css'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost/>
    </div>
  );
}

export default App;
