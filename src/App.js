import logo from './logo.svg';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {
  return (
  <div>
    <div className="wrap-content">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          {/* < Route 
          path = "*"
            element ={ 
              < main  style = { {  padding : "1rem"  } } > 
                < p > Здесь ничего нет! < / p > 
              < / main > 
            } 
          / >  */}
        </Routes>
      </div>
    </div>
  </div>
  );
}

export default App;
