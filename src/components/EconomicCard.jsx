import React from 'react'
import { Link } from 'react-router-dom';
import { SingleTicker } from 'react-ts-tradingview-widgets';

function EconomicCard({ ticker, children }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <Link to={'/economic/' + ticker.id }>{children}</Link>
        </div>
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
