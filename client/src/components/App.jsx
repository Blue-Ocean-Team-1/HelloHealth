import React, { useEffect } from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import ProductsPage from './Pages/ProductsPage';
import BoxPage from './Pages/BoxPage';
import FarmsPage from './Pages/FarmsPage';
import CartPage from './Pages/CartPage';
import AccountPage from './Pages/AccountPage';
// import useAuth from '../context/AuthContext.jsx';
import useMainContext from '../context/MainContext';

export default function App() {
  const { page } = useMainContext();
  console.log(page);

  // test endpoint and server connection
  useEffect(() => {
    axios.get('http://localhost:8001/hello')
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.error(err));
  }, []);

  const renderPage = () => {
    if (page === 'home') {
      return <ProductsPage />;
    } if (page === 'box') {
      return <BoxPage />;
    } if (page === 'farms') {
      return <FarmsPage />;
    } if (page === 'cart') {
      return <CartPage />;
    } if (page === 'account') {
      return <AccountPage />;
    }
    return <ProductsPage />;
  };

  return (
    <>
      <nav><Navigation /></nav>
      <section>{renderPage()}</section>
    </>
  );
}
