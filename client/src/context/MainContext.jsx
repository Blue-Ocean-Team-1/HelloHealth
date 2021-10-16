import React, { useState, useContext } from 'react';

export const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  // add state here
  const [page, setPage] = useState('home');
  const [userType, setUserType] = useState('consumer');

  return (
    <MainContext.Provider
      value={{
        // copy state to here
        page,
        setPage,
        userType,
        setUserType,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export default useMainContext;
