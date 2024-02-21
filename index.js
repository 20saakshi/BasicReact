import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import App1 from './App1'
//import Home from './Home';
import reportWebVitals from './reportWebVitals';
//import MyForm from './MyForm';
//import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App>Hello i am App Componenet</App>*/}
    {/*<App firstname="sakshi" lastname="patwari"/>*/}
    {/* <App n1="2" n2='2'> */}
    {/*<App n1="2"/>*/}
    {/*<App n1="22" n2="32"/>*/}
    <App1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
