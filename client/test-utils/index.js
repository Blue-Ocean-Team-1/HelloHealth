import React from 'react';
import { render } from '@testing-library/react';
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom';
>>>>>>> main
import { MainProvider } from '../src/context/MainContext.jsx';
import { AuthProvider } from '../src/context/AuthContext.jsx';

const AllProviders = ({ children }) => (
<<<<<<< HEAD
  <MainProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </MainProvider>
=======
  <Router>
    <MainProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </MainProvider>
  </Router>
>>>>>>> main
);

const customRender = (ui, options) => (
  render(ui, { wrapper: AllProviders, ...options })
);

export * from '@testing-library/react';

export { customRender as render };
