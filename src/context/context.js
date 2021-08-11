import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer.js';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const HousechoresCalculatorContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const balance = transactions.reduce(
    (acc, currVal) => (currVal.type === 'Player1' ? acc - currVal.amount : acc + currVal.amount),
    0
  );

  return (
    <HousechoresCalculatorContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
      {children}
    </HousechoresCalculatorContext.Provider>
  );
};
