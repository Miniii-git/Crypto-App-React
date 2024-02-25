import React, { useState } from "react";
import styles from "./pagination.module.css";

function Pagination({ page, setPage }) {
  const [disabled, setDisabled] = useState(true);

  const goPrevious = () => {
    if (page === 1) {
      return;
    }
    setPage((page) => page - 1);
  };

  const goNext = () => {
    if (page === 20) {
      return;
    }
    setPage((page) => page + 1);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={goPrevious} className={page === 1 ? styles.dis : null}>
        previous
      </button>
      <button
        onClick={() => setPage(1)}
        className={page === 1 ? styles.onPage : null}
      >
        1
      </button>
      <button
        onClick={() => setPage(2)}
        className={page === 2 ? styles.onPage : null}
      >
        2
      </button>

      {page >= 3 && page <= 18 ? (
        <>
          <span>...</span>
          <input type="submit" value={page} className={styles.onPage} />
          <span>...</span>
        </>
      ) : (
        <span>...</span>
      )}

      <button
        onClick={() => setPage(19)}
        className={page === 19 ? styles.onPage : null}
      >
        19
      </button>
      <button
        onClick={() => setPage(20)}
        className={page === 20 ? styles.onPage : null}
      >
        20
      </button>
      <button onClick={goNext} className={page === 20 ? styles.dis : null}>
        next
      </button>
    </div>
  );
}

export default Pagination;
