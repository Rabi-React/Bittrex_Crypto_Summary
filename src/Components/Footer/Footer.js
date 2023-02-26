import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <CopyrightIcon />
      <h5 className={styles.footerText}>Crypto Summary Inc. {currentYear}</h5>
    </div>
  )
}
