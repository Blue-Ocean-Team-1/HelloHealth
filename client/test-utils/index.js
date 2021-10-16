import React from 'react';
import { render } from '@testing-library/react';
import { MainProvider } from '../src/context/MainContext.jsx';
import { AuthProvider } from '../src/context/AuthContext.jsx';

const AllProviders = ({ children }) => (
  <MainProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </MainProvider>
);

const customRender = (ui, options) => (
  render(ui, { wrapper: AllProviders, ...options })
);

export * from '@testing-library/react';

export { customRender as render };