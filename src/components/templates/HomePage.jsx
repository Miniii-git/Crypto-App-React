import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";

const key = "CG-4oY4nLcbx34Ps5SyFn5jZVaG";

function HomePage() {
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState("");
  const [searchedItem, setSearchedItem] = useState("");
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${key}`
      );
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  const changeHandler = (event) => {
    setTyping(event.target.value);
  };

  const clickHandler = () => {
    setSearchedItem(typing);
    setTyping("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={typing}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}> *** </button>
      <br />
      <br />
      <TableCoins coinsData={data} />
    </>
  );
}

export default HomePage;
