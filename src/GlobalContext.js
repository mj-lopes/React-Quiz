import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [numeroPerguntas, setNumeroPerguntas] = useState(null);

  return (
    <GlobalContext.Provider value={{ numeroPerguntas, setNumeroPerguntas }}>
      {children}
    </GlobalContext.Provider>
  );
};
