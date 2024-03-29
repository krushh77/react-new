import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import ProviderCounterContext from './Componant/contex/Countercontexxxx';
import AuthContextComponent from './Componant/contex/AuthContext';
import Store from './Componant/Redux/Rducers.js/Store';
import { Provider } from 'react-redux';
import Stores from './Componant/REDUX.NEW/Reducer.theme/Store-theme';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >

<AuthContextComponent>
  
<ProviderCounterContext>
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
      
        className: '',
        duration: 5000,
        style: {
          background: '#363636',
          color: '#fff',
        },

  
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
    <Provider store={Store}>
      <Provider store={Stores}>
    <App />
    </Provider>
    </Provider>
    </ProviderCounterContext> 
    
    
    </AuthContextComponent>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
