import React from "react";
import styles from "./CoinSummary.module.css";

export default function CoinSummary({
  symbol,
  high,
  low,
  percentChange,
  volume,
  updatedAt,
}) {
  return (
    <div className={styles.coinCard}>
      <h2>{symbol}</h2>
      {percentChange && (
        <h3>
          Change:{" "}
          <span
            className={
              Number(percentChange) == 0
                ? styles.noChange
                : Number(percentChange) > 0
                ? styles.positive
                : styles.negative
            }
          >
            {percentChange}%
          </span>
        </h3>
      )}
      <h5>High: {high}</h5>
      <h5>Low: {low}</h5>
      {volume && <h5>Volume: {volume}</h5>}
      {updatedAt && <h5>Last Updated: {updatedAt}</h5>}
    </div>
  );
}
