import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './HelloWorld';
import OhMyGod from './OhMyGod';

// 여기서 전체 랜더링? 
ReactDOM.render(
  <React.StrictMode>
    <div>
      <HelloWorld />
      <OhMyGod/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
