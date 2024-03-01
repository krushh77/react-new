import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Componant/Login.jsx';
import Home from './Componant/Home.jsx';
import Register from './Componant/Register.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>

     
    </div>
  );
}

export default App;
