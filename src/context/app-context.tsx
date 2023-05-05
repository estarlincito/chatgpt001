'use client';
import { createContext, ReactNode, useState } from 'react';

//Create Context
interface Context {
  collapse: boolean;
  setCollapse: (collapse: boolean) => void;

  alert: boolean;
  setAlert: (alert: boolean) => void;
}

export const AppContext = createContext({} as Context);

//Set Provider
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [collapse, setCollapse] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <AppContext.Provider value={{ collapse, setCollapse, alert, setAlert }}>
      {children}
    </AppContext.Provider>
  );
};
