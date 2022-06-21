import { useState } from 'react';
import { Offcanvas, Form, Button } from 'react-bootstrap';
import { useEconomicData } from '../contexts/EconomicContext';

function CreateTickerOffcanvas() {
  const {
    isShowCreateTickerOffcanvas,
    createTicker,
    toggleCreateTickerOffcanvas,
  } = useEconomicData();

  const [newTicker, setNewTicker] = useState({
    title: '',
    symbol: '',
    chartType: 'candle',
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;

    setNewTicker({ ...newTicker, [name]: value });
  };

  const handleClose = () => {
    toggleCreateTickerOffcanvas();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    createTicker(newTicker);

    toggleCreateTickerOffcanvas();
  };

  return (
    <Offcanvas
      show={isShowCreateTickerOffcanvas}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Novo Item</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Dólar"
              name="title"
              onChange={handleChangeForm}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSymbol">
            <Form.Label>Identificador</Form.Label>
            <Form.Control
              type="text"
              placeholder="USDBRL"
              name="symbol"
              onChange={handleChangeForm}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gráfico</Form.Label>
            <Form.Check
              type="radio"
              id="candleChart"
              label="Vela"
              name="chartType"
              value="candle"
              checked={newTicker.chartType === 'candle'}
              onChange={handleChangeForm}
            />
            <Form.Check
              type="radio"
              id="lineChart"
              label="Linha"
              name="chartType"
              value="line"
              checked={newTicker.chartType === 'line'}
              onChange={handleChangeForm}
            />
          </Form.Group>
          <div>
            <Button type="submit" variant="primary">
              Cadastrar
            </Button>
          </div>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default CreateTickerOffcanvas;
