import { createContext, useContext, useState, useEffect } from 'react';

export const EconomicDataContext = createContext({});

import axios from '../services/api';

export function EconomicDataContextProvider({ children }) {
  const [tickers, setTickers] = useState([]);
  const [isShowCreateTickerOffcanvas, setIsShowCreateTickerOffcanvas] =
    useState(false);

  const getTicker = (id) => {
    return tickers.find((item) => item.id === Number(id));
  };

  const toggleCreateTickerOffcanvas = () => {
    setIsShowCreateTickerOffcanvas(!isShowCreateTickerOffcanvas);
  };

  const createTicker = (newTicker) => {
    setTickers([...tickers, newTicker]);

    axios.post('/economics', newTicker);
  };

  useEffect(() => {
    const loadTickers = async () => {
      const newTickers = (await axios.get('/economics')).data;

      setTickers([...tickers, ...newTickers]);
    };

    if (!tickers.length) {
      loadTickers();
    }
  }, []);

  return (
    <EconomicDataContext.Provider
      value={{
        tickers,
        getTicker,
        createTicker,
        isShowCreateTickerOffcanvas,
        toggleCreateTickerOffcanvas,
      }}
    >
      {children}
    </EconomicDataContext.Provider>
  );
}

export function useEconomicData() {
  return useContext(EconomicDataContext);
}
