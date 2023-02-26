import React, { useState, useEffect } from "react";
import CoinSummary from "./CoinSummary";
import Axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import styles from "./SingleCoinSummary.module.css"

const SingleCoinSummary = ({ dbQuery }) => {
  const [singleCoin, setSingleCoin] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchSingleSummary = async () => {
    setSingleCoin();
    setError();
    setLoading(true);
    const { data } = await Axios.get(
      `https://api.bittrex.com/v3/markets/${dbQuery}/summary`
    ).catch((err) => {
      setLoading(false);
      setError(err.message)});
    setSingleCoin(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSingleSummary();
  }, [dbQuery]);
  return (
    <div className= {styles.container}>
      {loading && <CircularProgress className={styles.circularSpin}/>}
      {singleCoin && (
        <CoinSummary
          symbol={singleCoin.symbol}
          high={singleCoin.high}
          low={singleCoin.low}
          percentChange={singleCoin.percentChange}
          volume={singleCoin.volume}
          updatedAt={singleCoin.updatedAt}
        />
      )}
      {error && <div className={styles.errorMsg}>Please Enter a Valid Coin Symbol</div>}
    </div>
  );
};

export default SingleCoinSummary;