import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import styles from "./HomePage.module.css";

import { returnApiUrl } from "../../services/apiUrl";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState("");
  const [searchedItem, setSearchedItem] = useState("");
  const [page, setPage] = useState(1);

  const [currency, setCurrency] = useState("usd");

  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(returnApiUrl(currency, page));
        const json = await res.json();
        setData(json);
        setIsloading(false);

        console.log(page);
      } catch (error) {
        console.log("some thing went wrong");
      }
      console.log(data);
    }
    fetchData();
  }, [page, currency]);

  const changeHandler = (event) => {
    setTyping(event.target.value);
  };

  const changePage = (event) => {
    setPage((page) => event.target.value);
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
      <TableCoins coinsData={data} currency={currency} isloading={isloading} />
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default HomePage;
