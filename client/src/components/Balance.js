import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { numerosComPontos } from "../utils/format";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const quantias  = transactions.map(transaction => transaction.quantia);
  const total = quantias.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Balanço Atual</h4>
      <h1 id="balance">R$ {numerosComPontos(total)}</h1>
    </>
  )
}
