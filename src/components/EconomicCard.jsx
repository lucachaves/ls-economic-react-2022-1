import React from 'react'
import { SingleTicker } from 'react-ts-tradingview-widgets';

function EconomicCard({ ticker }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">{ticker.title}</div>
        <div className="card-body p-0">
          <SingleTicker
            colorTheme="dark"
            width="100%"
            symbol={ticker.symbol}
          ></SingleTicker>
        </div>
      </div>
    </div>
  );
}

export default EconomicCard;
