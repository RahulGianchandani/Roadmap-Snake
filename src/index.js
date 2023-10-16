import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/tailwind.css';
import Timeline from './timeline'; // Adjust the path based on your folder structure
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timeline />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
