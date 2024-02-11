import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import styles from "./HomePage.module.css";

const key = "CG-4oY4nLcbx34Ps5SyFn5jZVaG";

function HomePage() {
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState("");
  const [searchedItem, setSearchedItem] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${key}`
      );
      const json = await res.json();
      setData(json);
      console.log(page);
    }
    fetchData();
  }, [page]);

  const changeHandler = (event) => {
    setTyping(event.target.value);
  };

  const clickHandler = () => {
    setSearchedItem(typing);
    setTyping("");
  };

  const changePage = (event) => {
    setPage(event.target.value);
    console.log(page);
  };

  const previousPage = (event) => {
    if (page === 1) {
      return;
    }
    setPage((page) => page - 1);
    console.log(page);
  };

  const nextPage = (event) => {
    if (page === 20) {
      return;
    }
    setPage((page) => page + 1);
    console.log(page);
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
      <div className={styles.pageButtons}>
        <input type="submit" onClick={previousPage} value="previous" />
        <input type="submit" onClick={changePage} value={1} />
        <input type="submit" onClick={changePage} value={2} />
        <span>...</span>
        <input type="submit" onClick={changePage} value={19} />
        <input type="submit" onClick={changePage} value={20} />
        <input type="submit" onClick={nextPage} value="next" />
      </div>
    </>
  );
}

export default HomePage;
