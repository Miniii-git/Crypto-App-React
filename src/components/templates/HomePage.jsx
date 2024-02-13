import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import styles from "./HomePage.module.css";

const key = "CG-4oY4nLcbx34Ps5SyFn5jZVaG";

function HomePage() {
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState("");
  const [searchedItem, setSearchedItem] = useState("");
  const [page, setPage] = useState(1);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${key}`
        );
        const json = await res.json();
        setData(json);
        if (page == 1) {
          setStart(true);
        } else {
          setStart(false);
        }
        if (page == 20) {
          setEnd(true);
        } else {
          setEnd(false);
        }
        console.log(page);
      } catch (error) {
        console.log("some thing went wrong");
      }
    }
    fetchData();
  }, [page, currency]);

  const changeHandler = (event) => {
    setTyping(event.target.value);
  };

  const changePage = (event) => {
    setPage(event.target.value);
    console.log(page);
  };

  const previousPage = (event) => {
    if (page == 1) {
      return;
    }
    setPage((page) => Number(page) - 1);
    console.log(page);
    setStart(false);
  };

  const nextPage = (event) => {
    if (page == 20) {
      return;
    }
    setPage((page) => Number(page) + 1);
    console.log(page);
    setEnd(false);
  };

  const changeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={typing}
        onChange={changeHandler}
        id={styles.searchInput}
      />

      <select onChange={changeCurrency} id={styles.selectCurrency}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <br />
      <br />
      <TableCoins coinsData={data} currency={currency} />
      <div className={styles.pageButtons}>
        <button
          onClick={previousPage}
          style={{ color: start && "grey", cursor: start && "default" }}
        >
          previous
        </button>
        <input type="submit" onClick={changePage} value={1} />
        <input type="submit" onClick={changePage} value={2} />
        <span>. . .</span>
        <input type="submit" onClick={changePage} value={19} />
        <input type="submit" onClick={changePage} value={20} />
        <button
          onClick={nextPage}
          style={{ color: end && "grey", cursor: end && "default" }}
        >
          next
        </button>
      </div>
    </>
  );
}

export default HomePage;
