import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import styles from "./HomePage.module.css";

import { returnApiUrl } from "../../services/apiUrl";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [typing, setTyping] = useState("");
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [isloading, setIsloading] = useState(true);
  const [diconnect, setDiconnect] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setDiconnect(false);
        setIsloading(true);
        const res = await fetch(returnApiUrl(currency, page));
        const json = await res.json();
        setData(json);
        setIsloading(false);
        console.log(page);
      } catch (error) {
        console.log("some thing went wrong");
        setTimeout(() => {
          setDiconnect(true);
          console.log("no");
        }, 5000);
      }
      console.log(data);
    }
    fetchData();
  }, [page, currency, diconnect]);

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
      <Search typing={typing} setTyping={setTyping} />
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
