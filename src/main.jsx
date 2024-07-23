import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'boxicons/css/boxicons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronLeft, faChevronRight);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

)
