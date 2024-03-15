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
  coin,
  currency,
}) {
  const [sign, setSign] = useState("$");
  const [showChart, setShowChart] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [range, setRange] = useState(1);

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

  useEffect(() => {
    const ploting = async () => {
      try {
        const res = await fetch(returnApiForChart(id, range));
        const json = await res.json();
        setChartData(json);
      } catch {
        console.log("err");
      }
    };
    ploting();
  }, [range]);

  useEffect(() => {
    if (showChart) {
      const ploting = async () => {
        try {
          const res = await fetch(returnApiForChart(id, range));
          const json = await res.json();
          setChartData(json);
        } catch {
          console.log("err");
        }
      };
      ploting();
    }
  }, [showChart]);

  return (
    <div className={styles.coinInfo}>
      <div>
        <img
          src={image}
          alt={name}
          width="16px"
          onClick={() => setShowChart(true)}
          id={styles.coinThumb}
        />
        &nbsp;{" "}
        <a id={styles.coinSymbol} onClick={() => setShowChart(true)}>
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
      {showChart ? (
        <Chart
          coin={coin}
          setChartData={setChartData}
          setShowChart={setShowChart}
          chartData={chartData}
          image={image}
          symbol={symbol}
          name={name}
          setRange={setRange}
          range={range}
        />
      ) : null}
    </div>
  );
}
