import React from "react";

import styles from "./style.module.scss";

export default function Modal({ status }) {
  return (
    <div className={styles.modalContainer} style={{}}>
      <div className={styles.modalContent}></div>
    </div>
  );
}
