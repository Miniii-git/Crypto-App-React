import styles from "./search.module.css";
import React, { useEffect, useState } from "react";
import { returnApiForSearch } from "../../services/apiUrl";

function Search({ typing, setTyping }) {
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    async function fetchSearch() {
      const res = await fetch(returnApiForSearch(typing));
      const json = await res.json();
      setSearchList(json.coins);
      console.log(searchList);
    }
    fetchSearch();
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
          <ul>
            {searchList.map((coin) => (
              <li key={coin.id}>
                <a href="#" target="_blank">
                  <img src={coin.thumb} width="15px" /> &nbsp; {coin.name}&nbsp;
                  • {coin.symbol}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Search;
