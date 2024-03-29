import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Componant/Home.jsx';
import Register from './Componant/Register.jsx';

import EffectOne from './Componant/03-03/EffectOne.jsx';
import EffectTwo from './Componant/03-03/EffectTwo.jsx';
import EffectThree from './Componant/03-03/EffectThree.jsx';
import EffectFour from './Componant/03-03/EffectFour.jsx';
import Counter from './Componant/02-03/Counter.jsx';
import Welcome from './Componant/03-03/Welcome.jsx';
import Registerr from './Componant/06-03/Registerr.jsx';
import Login from './Componant/09-03/Login.jsx';
import UseReducer from './Componant/09-03/UseReducer.jsx';
import Propsdrilling from './Componant/09-03/Propsdrilling.jsx';
import { useState } from 'react';
import Allproducts from './Componant/10-03/Allproducts.jsx';
import Fakestore from './Componant/10-03/Fakestore.jsx';
import Reduceruse from './Componant/practice/Reduceruse.jsx';
import Countercontex from './Componant/practice/Countercontexuse.jsx';
import ChildA from './Componant/practice/ChildA.jsx';
import Todo from './Componant/15-03/Todo.jsx';
import Navbar from './Componant/global/Navbar.jsx';
import Notfound from './Componant/global/Notfound.jsx';
import Fakestoresingle from './Componant/16-03/Fakestoresingle.jsx';
import Render from './Componant/16-03/Render.jsx';
import Darktheme from './Componant/15-03/Darktheme.jsx';
import CurrencyConverter from './Componant/17-03/CurrencyConverter.jsx';
import Counterredux from './Componant/20-03/CounterRedux.jsx';
import Usememo from './Componant/22-03/Usememo.jsx';
import UseCallback from './Componant/23-03/usecallback.jsx';
import Themeredux from './Componant/REDUX.NEW/Theme-redux/Theme-redux.jsx';


function App() {
const [student, setstudent] = useState(["a","b","c","d"])
const [counter, setcounter] = useState(1234);
const [product, setproduct] = useState([
  {name: "tshirt", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "jeans", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "cap", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "tshirt", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "jeans", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "cap", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "tshirt", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "jeans", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"},
{name: "cap", Image :"https://m.media-amazon.com/images/I/51uGECebmZL._AC_UY1100_.jpg"}, ])
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
      <Route path='*' element={<Notfound/>}/>
     
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/counter' element={<Counter/>} />
        <Route path='/welcome' element={<Welcome/>} />
        <Route path='/effect-1' element={<EffectOne/>} />
        <Route path='/effect-2' element={<EffectTwo/>} />
        <Route path='/effect-3' element={<EffectThree/>} />
        <Route path='/effect-4' element={<EffectFour/>} />
        <Route path='/registernew' element={<Registerr/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/reducer' element={<UseReducer/>}/>
        <Route path='/props' element={<Propsdrilling student={student} counter={counter}/>}/>
        <Route path='/allproduct' element={<Allproducts products={product}/>}/>
        <Route path='/fakestore' element={<Fakestore/>}/>
        <Route path='/redu' element={<Reduceruse/>}/>
        <Route path='/countercontex' element={<Countercontex/>}/>
        <Route path='/childa' element={<ChildA/>}/>
        <Route path='/todo' element={<Todo/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/fakesingleproduct/:id' element={<Fakestoresingle/>} />
        <Route path='/render' element={<Render/>} />
        <Route path='/darktheme' element={<Darktheme/>} />
        <Route path='converter' element={<CurrencyConverter/>} />
        <Route path='conter-redux' element={<Counterredux/>}/>
        <Route path='use-memo' element={<Usememo/>}/>
        <Route path='use-callback' element={<UseCallback/>}/>
        <Route path='theme-redux' element={<Themeredux/>}/>

       
      </Routes>

     
    </div>
  );
}

export default App;
