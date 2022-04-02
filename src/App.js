import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route path = "/aboutus" element = {<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      <Copyright/>
      <a className="call text-decoration-none" href="tel:6477048938"><i className="fas fa-phone-alt"></i></a> 
    </div>
  );
}

export default App;
