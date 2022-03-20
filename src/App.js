import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>

      <a className="call text-decoration-none" href="tel:6477048938"><i className="fas fa-phone-alt"></i></a> 
    </div>
  );
}

export default App;
