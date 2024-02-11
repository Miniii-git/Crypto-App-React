import React from "react";

export default function Coin({ coin }) {
  console.log(coin);
  return (
    <div>
      <img src={coin.image} alt={coin.name} width="15px" />
      <span> {coin.symbol}</span>

      <p>{coin.name}</p>
      <p>{coin.current_price}</p>
      <p>{coin.price_change_percentage_24h}</p>
      <p>{coin.total_volume}</p>
      <br />
      <hr />
      <br />
    </div>
  );
}
