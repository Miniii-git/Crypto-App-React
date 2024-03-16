import React, { PureComponent, useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { convertDataForPloting } from "../../helper/convertDataForPloting";
import { returnApiForChart } from "../../services/apiUrl";
import styles from "./littleGraph.module.css";

function LittleGraph({ id, setChartData, percentage_24h }) {
  const [dc, setDC] = useState(null);
  useEffect(() => {
    const ploting = async () => {
      try {
        const res = await fetch(returnApiForChart(id, 1));
        const json = await res.json();
        setDC(json);
      } catch (err) {
        console.log("err in little raph");
        console.log(err.name);
      }
    };
    ploting();
  }, []);

  return (
    <div className={styles.littleGraph}>
      {dc ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={convertDataForPloting(dc, "prices")}>
            <YAxis hide domain={["auto", "auto"]} />
            <XAxis hide />

            <Area
              type="monotone"
              dataKey="prices"
              stroke={percentage_24h <= 0 ? "#dc3a3adf" : "#58bd7db9"}
              fill={percentage_24h <= 0 ? "#dc3a3adf" : "#58bd7db9"}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : null}
    </div>
  );
}
export default LittleGraph;
