import { createContext, useContext, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';

import { db } from '../services/firebase';
import { useUserAuth } from './UserAuthContext';

export const EconomicDataContext = createContext({});

export function EconomicDataContextProvider({ children }) {
  const [tickers, setTickers] = useState([]);
  const [isShowCreateTickerOffcanvas, setIsShowCreateTickerOffcanvas] =
    useState(false);
  const { user } = useUserAuth();

  const createTicker = async (newTicker) => {
    return await addDoc(collection(db, user.uid), newTicker);
  };

  const getTickers = async () => {
    try {
      const items = [];
      const docRef = collection(db, user.uid);
      const docs = await getDocs(docRef);
      docs.forEach((doc) => items.push({ ...doc.data(), id: doc.id }));
      return items;
    } catch (error) {
      console.error(error.message);
      return [];
    }
  };

  const getTicker = (id) => {
    return tickers.find((item) => item.id === id);
  };

  const loadTickers = async () => {
    const newTickers = await getTickers();

    setTickers([...newTickers]);
  };

  const toggleCreateTickerOffcanvas = () => {
    setIsShowCreateTickerOffcanvas(!isShowCreateTickerOffcanvas);
  };

  const handleCreateTicker = async (ticker) => {
    const { id } = await createTicker(ticker);

    setTickers([...tickers, { ...ticker, id }]);
  };

  return (
    <EconomicDataContext.Provider
      value={{
        tickers,
        isShowCreateTickerOffcanvas,
        getTicker,
        loadTickers,
        handleCreateTicker,
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
