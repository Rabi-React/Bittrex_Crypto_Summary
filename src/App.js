import { useContext, useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import CryptoSummary from './Components/CoinSummary/CryptoSummary';
import Footer from './Components/Footer/Footer';
import SingleCoinSummary from './Components/CoinSummary/SingleCoinSummary';
import { CoinQuery } from './ContextFolder/CoinContext';
import useDebounce from "./Hooks/useDebounce";
import styles from './App.module.css'

function App() {
  const [dbQueryApp, setDbQueryApp] = useState();

  const { query } = useContext(CoinQuery);
  const dbQuery = useDebounce(query, 500);
  const headerSearch = () => {
    setDbQueryApp(dbQuery);
  }

  useEffect(()=>{
    if(dbQuery==="" || dbQuery===undefined)setDbQueryApp()
  },[dbQuery]);
  
  return (
    <div className={styles.App}>
      <Header headerSearch={headerSearch}/>
      {dbQueryApp && dbQuery ? <SingleCoinSummary dbQuery={dbQueryApp}/> : <CryptoSummary /> }
      <Footer />
    </div>
  );
}

export default App;
