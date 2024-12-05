import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { depositar, levantar } from '../saldoSlice.js';
import './ATMApp.css';

function ATMApp() {
  // Access the saldo from Redux
  const saldo = useSelector((state) => state.saldo.valor);
  const dispatch = useDispatch();
  const [valor, setValor] = useState(0);

  // Load saldo from local storage on initial render
  useEffect(() => {
    const savedSaldo = localStorage.getItem('saldo');
    if (savedSaldo) {
      dispatch(depositar(Number(savedSaldo))); // Update Redux state with saved saldo
    }
  }, [dispatch]);

  // Save saldo to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('saldo', saldo);
  }, [saldo]);

  const handleChange = (e) => {
    setValor(Number(e.target.value));
  };

  const handleDepositar = () => {
    dispatch(depositar(valor));
  };

  const handleLevantar = () => {
    dispatch(levantar(valor));
  };

  return (
    <div className="ATMApp">
      <div className="atm-container">
        <h1>Máquina Multibanco</h1>
        <h2>Saldo Atual: {saldo}€</h2>
        <div className='input-group'>
          <input
            type="number"
            value={valor}
            onChange={handleChange}
            placeholder="Digite um valor"
          />
          <div className="button-group">
            <button onClick={handleDepositar}>Depositar</button>
            <button onClick={handleLevantar}>Levantar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ATMApp;
