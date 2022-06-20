import React, { useEffect, useRef, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import axios from '../services/api';

import EconomicCard from '../components/EconomicCard';
import { useEconomicData } from '../contexts/EconomicContext';

function Home() {
  const buttonEl = useRef(null);

  const {data, setData} = useEconomicData();

  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const [newData, setNewData] = useState({
    title: '',
    symbol: '',
    chartType: 'candle'
  })

  const handleChangeForm = (event) => {
    const {name, value} = event.target;

    console.log(name, value);

    setNewData({...newData, [name]: value});
  }

  const handleClose = () => {
    setShowOffCanvas(false);
  }

  const handleClick = () => {
    // buttonEl.current.disabled = true;

    setShowOffCanvas(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setData([...data, newData]);

    axios.post('/economics', newData);
    
    setShowOffCanvas(false);
  }

  useEffect(() => {
    const loadData = async () => {
      const newData = (await axios.get('/economics')).data;

      setData([...data, ...newData]);
    }

    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">
          Radar Econômico
          <button
            className="btn btn-light border fw-bold float-end"
            type="button"
            aria-controls="offcanvasRight"
            onClick={handleClick}
            ref={buttonEl}
          >
            +
          </button>
        </h1>
        {!data.length && <p className="text-center">Nenhum ativo cadastrado.</p>}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {data.map((ticker, index) => (
            <EconomicCard ticker={ticker} key={index}>
              <h3 style={{textAlign: 'center'}}>{ticker.title}</h3>
            </EconomicCard>
          ))}
        </div>
      </div>

      <Offcanvas show={showOffCanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Novo Item</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Nome</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Dólar"
                onChange={handleChangeForm}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="symbol" className="form-label">Identificador</label>
              <input
                type="text"
                className="form-control"
                id="symbol"
                name="symbol"
                placeholder="USDBRL"
                onChange={handleChangeForm}
              />
            </div>
            <div className="mb-3">
              <div className="form-label">Gráfico</div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartType"
                  id="candleChart"
                  value="candle"
                  checked={newData.chartType === 'candle'}
                  onChange={handleChangeForm}
                />
                <label className="form-check-label" htmlFor="candleChart"> Vela </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartType"
                  id="lineChart"
                  value="line"
                  checked={newData.chartType === 'line'}
                  onChange={handleChangeForm}
                />
                <label className="form-check-label" htmlFor="lineChart"> Linha </label>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary border float-end">
                Cadastrar
              </button>
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>

    
  );
}

export default Home;
