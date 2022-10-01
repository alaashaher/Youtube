import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { HomeProivder } from './contexts/home-context/HomeProvider';
import reportWebVitals from './reportWebVitals';

import './scss/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HomeProivder>
    <App />
    </HomeProivder>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
