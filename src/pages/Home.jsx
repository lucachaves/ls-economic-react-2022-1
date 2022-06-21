import { useRef, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import CreateTickerOffcanvas from '../components/CreateTickerOffcanvas';
import EconomicCard from '../components/EconomicCard';

import { useEconomicData } from '../contexts/EconomicContext';

function Home() {
  const buttonEl = useRef(null);
  const { tickers, loadTickers, toggleCreateTickerOffcanvas } =
    useEconomicData();

  const handleClick = () => {
    buttonEl.current.blur();

    toggleCreateTickerOffcanvas();
  };

  useEffect(() => {
    loadTickers();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">
          Radar Econômico
          <Button
            variant="light"
            className="border fw-bold float-end"
            aria-controls="offcanvasRight"
            onClick={handleClick}
            ref={buttonEl}
          >
            +
          </Button>
        </h1>
        {!tickers.length && (
          <p className="text-center">Nenhum ativo cadastrado.</p>
        )}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {tickers.map((ticker, index) => (
            <EconomicCard ticker={ticker} key={index}>
              <h3 style={{ textAlign: 'center' }}>{ticker.title}</h3>
            </EconomicCard>
          ))}
        </div>
      </div>

      <CreateTickerOffcanvas />
    </>
  );
}

export default Home;
