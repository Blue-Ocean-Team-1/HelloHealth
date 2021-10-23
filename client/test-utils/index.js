import React from 'react';
import * as axios from 'axios';

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainProvider } from '../src/context/MainContext.jsx';
import { AuthProvider } from '../src/context/AuthContext.jsx';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios');

const AllProviders = ({ children }) => (
  <Router>
    <MainProvider>
      <AuthProvider>{children}</AuthProvider>
    </MainProvider>
  </Router>
);

const customRender = (ui, options) => render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
