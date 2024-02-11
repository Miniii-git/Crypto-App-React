import React from "react";
import Coin from "./Coin";

function TableCoins({ coinsData }) {
  return (
    <div>
      {coinsData.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default TableCoins;
