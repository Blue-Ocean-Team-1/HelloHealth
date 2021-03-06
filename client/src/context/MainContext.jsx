import React, { useState, useContext, useEffect } from 'react';
import config from '../config/config';

export const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  // add state here
  const [page, setPage] = useState('home');
  const [userType, setUserType] = useState('');
  const [currentProduct, setCurrentProduct] = useState({});
  const [productsInCart, setProductsInCart] = useState([]);
  const [selected, setSelected] = useState(null);

  const addProductToCart = (value) => {
    setProductsInCart([...productsInCart, value]);
  };

  const showFarms = () => {
    setSelected(null);
  };

  useEffect(() => {
    if (!userType) {
      const type = localStorage.getItem('userType', userType);
      setUserType(type);
    } else {
      localStorage.setItem('userType', userType);
    }
  }, [userType]);

  return (
    <MainContext.Provider
      value={{
        // copy state to here
        page,
        setPage,
        userType,
        addProductToCart,
        productsInCart,
        setProductsInCart,
        setUserType,
        currentProduct,
        setCurrentProduct,
        selected,
        setSelected,
        showFarms,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export default useMainContext;
