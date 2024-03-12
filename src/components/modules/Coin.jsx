import React, { useEffect, useState } from "react";
import styles from "./Coin.module.css";
import upGraph from "../../assets/chart-up.svg";
import downGraph from "../../assets/chart-down.svg";
import Chart from "./Chart";
import { returnApiForChart } from "../../services/apiUrl";

export default function Coin({
  coin: {
    id,
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: percentage_24h,
  },
  currency,
}) {
  const [sign, setSign] = useState("$");

  const [chartSection, setChartSection] = useState(null);

  useEffect(() => {
    if (currency === "usd") {
      setSign("$");
    }
    if (currency === "eur") {
      setSign("€");
    }
    if (currency === "jpy") {
      setSign("¥");
    }
  }, [currency]);

  const showChart = async () => {
    try {
      const res = await fetch(returnApiForChart(id));
      const json = await res.json();
      setChartSection(json);
    } catch {
      console.log("err");
    }
  };
  return (
    <div className={styles.coinInfo}>
      <div>
        <img
          src={image}
          alt={name}
          width="15px"
          onClick={showChart}
          id={styles.coinThumb}
        />
        &nbsp;{" "}
        <a id={styles.coinSymbol} onClick={showChart}>
          {symbol}
        </a>
      </div>
      <p>{name}</p>
      <p>
        <span>{sign}&nbsp;</span>
        {current_price.toLocaleString()}
      </p>
      <p
        style={{
          color: percentage_24h <= 0 ? "#d33535" : "#58bd7d",
        }}
      >
        {percentage_24h >= 0
          ? `+${percentage_24h.toFixed(2)}`
          : percentage_24h.toFixed(2)}
        &nbsp;%
      </p>
      <p>{total_volume.toLocaleString()}</p>
      <img src={percentage_24h <= 0 ? downGraph : upGraph} />
      {!!chartSection ? (
        <Chart setChartSection={setChartSection} chartSection={chartSection} />
      ) : null}
    </div>
  );
}
