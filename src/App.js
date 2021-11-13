import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import ScreensRoot from './screens/Root';


function App() {
  return (
  <div>
    <div className="wrap-content">
      <div className="container">
        <ScreensRoot />
      </div>
    </div>
  </div>
  );
}

export default App;
