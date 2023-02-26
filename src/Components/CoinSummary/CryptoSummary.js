import React, { useEffect, useState } from "react";
import Axios from "axios";
import CoinSummary from "./CoinSummary";
import Pagination from "@mui/material/Pagination";
import CircularProgress from '@mui/material/CircularProgress';
import styles from "./CryptoSummary.module.css";

export default function CryptoSummary() {
  const [summary, setSummary] = useState([]);
  const [limit] = useState(40);
  const [offset, setOffset] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchSummary = async () => {
    setLoading(true);
    const { data } = await Axios.get(
      "https://api.bittrex.com/v3/markets/summaries"
    );
    setLoading(false);
    setSummary([...data]);
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const paginationHandler = (page) => {
    setCurrPage(page);
  };

  useEffect(() => {
    setOffset(currPage * limit - limit);
  }, [currPage]);

  return (
    <div>
      <div className={styles.container}>
        {loading ? <CircularProgress className={styles.circularSpin}/> : summary.slice(offset, limit + offset).map((coin) => {
          return (
            <React.Fragment key={coin.symbol}>
              <CoinSummary
                symbol={coin.symbol}
                high={coin.high}
                low={coin.low}
                percentChange={coin.percentChange}
                // volume={coin.volume}
                // updatedAt={coin.updatedAt}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.pagination}>
        {!loading && <Pagination
          count={
            Math.floor(summary.length / limit) < summary.length / limit
              ? Math.floor(summary.length / limit) + 1
              : Math.floor(summary.length / limit)
          }
          onChange={(_, page) => paginationHandler(page)}
          size="large"
        />
}
      </div>
    </div>
  );
}
