import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { MainProvider } from './context/MainContext.jsx';

ReactDOM.render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.getElementById('root'),
);
