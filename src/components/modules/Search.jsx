import styles from "./search.module.css";
import React, { useEffect, useState } from "react";
import { returnApiForSearch } from "../../services/apiUrl";
import { RotatingLines } from "react-loader-spinner";

function Search({ typing, setTyping }) {
  const [searchList, setSearchList] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const abortRequset = new AbortController();
  useEffect(() => {
    async function fetchSearch() {
      setIsloading(true);
      try {
        const res = await fetch(returnApiForSearch(typing), {
          signal: abortRequset.signal,
        });
        const json = await res.json();
        setIsloading(false);
        setSearchList(json.coins);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("aborted");
        } else {
          setIsloading(false);
          console.log("something went wrong while searching");
        }
      }
    }
    fetchSearch();
    return () => {
      abortRequset.abort();
    };
  }, [typing]);

  const searchHandler = (event) => {
    setTyping(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={typing}
        onChange={searchHandler}
        id={styles.searchInput}
      />

      {typing.length ? (
        <div className={styles.searchList}>
          {isloading ? (
            <div id={styles.rotate}>
              <RotatingLines width="60" strokeWidth="3" strokeColor="pink" />
            </div>
          ) : (
            <ul>
              {searchList.map((coin) => (
                <li key={coin.id}>
                  <a href="#" target="_blank">
                    <img src={coin.thumb} width="15px" /> &nbsp; {coin.name}
                    &nbsp; • {coin.symbol}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Search;
