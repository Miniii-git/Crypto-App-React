import styles from "./search.module.css";
import React, { useEffect, useState } from "react";
import { returnSearchList } from "../../services/apiUrl";

function Search({ typing, setTyping }) {
  const [status, setStatus] = useState(null);
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    async function fetchSearch() {
      const res = await fetch(returnSearchList(typing));
      const json = await res.json();
      console.log(json);
    }
  }, [typing]);

  const searchHandler = (event) => {
    setTyping(event.target.value);
  };
  return (
    <>
      {typing.length ? (
        <div>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      ) : null}
      <input
        type="text"
        placeholder="Search"
        value={typing}
        onChange={searchHandler}
        id={styles.searchInput}
      />
    </>
  );
}

export default Search;
