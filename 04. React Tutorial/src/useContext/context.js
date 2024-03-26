import React, { useState, useContext } from "react";
import { data } from "../data/data";

const AppContext = React.createContext();
// two components - Provider, Consumer
// useContext to access value property

const AppProvider = ({ children }) => {
  const [people, setPeople] = useState(data);

  const removeItem = id => {
    const newPeople = people.filter(item => item.id !== id);
    setPeople(newPeople);
  };
  return (
    <AppContext.Provider
      value={{
        people,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
