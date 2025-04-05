import {BrowserRouter,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
