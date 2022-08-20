import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './app.scss'
import { Homepage } from './pages/client/home/Homepage';
import { Login } from './pages/client/login/Login';
import { Register } from './pages/client/register/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Homepage/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
