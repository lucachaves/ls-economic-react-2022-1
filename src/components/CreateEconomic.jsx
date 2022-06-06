import React from 'react'

function CreateEconomic() {
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Novo Item</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">
            Nome
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="Dólar"
          />
        </div>
        <div class="mb-3">
          <label for="symbol" class="form-label">
            Identificador
          </label>
          <input
            type="text"
            class="form-control"
            id="symbol"
            placeholder="USDBRL"
          />
        </div>
        <div class="mb-3">
          <div class="form-label">Gráfico</div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="chartType"
              id="candleChart"
              value="candle"
              checked
            />
            <label class="form-check-label" for="candleChart">
              {' '}
              Vela{' '}
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="chartType"
              id="lineChart"
              value="line"
            />
            <label class="form-check-label" for="lineChart">
              {' '}
              Linha{' '}
            </label>
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-primary border float-end">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>;
}
