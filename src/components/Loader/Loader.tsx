import React from 'react';
import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loaderWrapper}>
    <p className={styles.text}>Loading...</p>
  </div>
);
