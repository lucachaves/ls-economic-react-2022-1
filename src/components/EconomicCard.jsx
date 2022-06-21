import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SingleTicker } from 'react-ts-tradingview-widgets';

function EconomicCard({ ticker, children }) {
  return (
    <div className="col">
      <div className="card">
        <div className="card-header">
          <Nav.Link as={Link} to={'/economic/' + ticker.id}>
            {children}
          </Nav.Link>
        </div>
        <div className="card-body p-0">
          <SingleTicker colorTheme="dark" width="100%" symbol={ticker.symbol} />
        </div>
      </div>
    </div>
  );
}

export default EconomicCard;
