import axios from '../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

import { useEconomicData } from '../contexts/EconomicContext';

function EconomicDetails() {
  const { id } = useParams();

  const { getTicker } = useEconomicData();

  const [ticker, setTicker] = useState({});

  useEffect(() => {
    const loadTicker = async () => {
      setTicker(getTicker(id));
    };

    loadTicker();
  }, []);

  return (
    <>
      <h1 className="text-center my-5">{ticker.title}</h1>

      <div style={{ height: 400 }}>
        <AdvancedRealTimeChart theme="dark" autosize symbol={ticker.symbol} />
      </div>
    </>
  );
}

export default EconomicDetails;
