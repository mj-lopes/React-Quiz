import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [numeroPerguntas, setNumeroPerguntas] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState(null);
  const respostas = [];

  return (
    <GlobalContext.Provider
      value={{
        numeroPerguntas,
        setNumeroPerguntas,
        erro,
        setErro,
        loading,
        setLoading,
        data,
        setData,
        respostas,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
