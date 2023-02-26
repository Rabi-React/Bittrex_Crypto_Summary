import React, { useContext, useState } from "react";
import { CoinQuery } from "../../ContextFolder/CoinContext";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./Header.module.css";

function Header({headerSearch}) {
  const { query, setQuery } = useContext(CoinQuery);
  return (
    <div className={styles.container}>
      <p className={styles.headerText}>Today's Crypto Summary</p>
      <div className={styles.searchBar}>
      <input
        className={styles.inputBox}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Coin"
      />
      <SearchIcon className={styles.searchIcon} fontSize="medium" onClick={()=>headerSearch()}/>
      </div>
    </div>
  );
}

export default Header;
