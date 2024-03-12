import React, { useState } from "react";
import styles from "./chart.module.css";
import { convertDataForPloting } from "../../helper/convertDataForPloting";

function Chart({ setChartSection, chartSection }) {
  const [type, setType] = useState("prices");

  console.log(chartSection);
  const convertedData = convertDataForPloting(chartSection, type);
  console.log(convertedData);

  return (
    <div className={styles.container}>
      <button className={styles.exist} onClick={() => setChartSection(false)}>
        X
      </button>
      <div className={styles.chartSection}></div>
    </div>
  );
}

export default Chart;
