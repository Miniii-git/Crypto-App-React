import React, { useState, PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./chart.module.css";
import { convertDataForPloting } from "../../helper/convertDataForPloting";

function Chart({
  coin: {
    image,
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: percentage_24h,
  },
  setChartSection,
  chartSection,
}) {
  const [type, setType] = useState("prices");

  const convertedData = convertDataForPloting(chartSection, type);

  return (
    <div className={styles.container}>
      <button className={styles.exist} onClick={() => setChartSection(false)}>
        X
      </button>
      <div className={styles.chartSection}>
        <div className={styles.graph}>
          <div className={styles.head}>
            <div className={styles.S_N}>
              <img src={image} alt={symbol} />
              <span>{name}</span> &nbsp;(<span>&nbsp;{symbol}&nbsp;</span>)
            </div>
            <div className={styles.radio}>
              <label htmlFor="7">7</label>
              <input name="range" type="radio" value={7} id="7" />
              <label htmlFor="14">14</label>
              <input name="range" type="radio" value={14} />
              <label htmlFor="30">30</label>
              <input name="range" type="radio" value={30} />
            </div>
          </div>
          <Rechart convertedData={convertedData} type={type} />
          <div className={styles.buttons}>
            <button
              onClick={() => setType("prices")}
              className={type === "prices" ? styles.selected : null}
            >
              Prices
            </button>
            <button
              onClick={() => setType("market_caps")}
              className={type === "market_caps" ? styles.selected : null}
            >
              Market Cap
            </button>
            <button
              onClick={() => setType("total_volumes")}
              className={type === "total_volumes" ? styles.selected : null}
            >
              Total Volumes
            </button>
          </div>
          <div className={styles.details}>
            <p>Current Price : $ {current_price.toLocaleString()}</p>
            <p>Total Volume : {total_volume}</p>
            <p>Percentage Change 24h : {percentage_24h.toFixed(2)} %</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

function Rechart({ convertedData, type }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={400}
        height={400}
        data={convertedData}
        margin={{
          top: 50,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#404042" />
        <Line
          type="monotone"
          dataKey={type}
          stroke="#8884d8"
          strokeWidth={2}
          dot={false}
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="time" hide padding={{ left: 10, right: 10 }} />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
