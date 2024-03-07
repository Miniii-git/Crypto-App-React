import React from "react";
import styles from "./graph.module.css";

function Graph({ setGraphSection }) {
  return (
    <div className={styles.graphSection}>
      <button className={styles.exist} onClick={() => setGraphSection(false)}>
        X
      </button>
      <div>graph</div>
    </div>
  );
}

export default Graph;
