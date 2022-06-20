import { createContext, useContext, useState } from "react";

export const EconomicDataContext = createContext({});

export function EconomicDataContextProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = (id) => {
    return data.find((item) => item.id === Number(id));
  }

  return (
    <EconomicDataContext.Provider
      value={{
        data,
        setData,
        getData
      }}
    >
      {children}
    </EconomicDataContext.Provider>
  )
}

export function useEconomicData() {
  return useContext(EconomicDataContext);
}