import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import UserProvider from './Providers/UserProvider'

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>, 

document.getElementById('root'));

