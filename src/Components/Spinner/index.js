import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectSpinner } from "./selector";
import { close } from "./actions";
import styles from "./style.module.scss";

const Spinner = ({ spinner, closeFunc }) => {
  useEffect(() => {
    if (spinner.status === "LOAD_SUCCESS") {
      setTimeout(() => {
        closeFunc();
      }, 2000);
    }
  }, [spinner.status, closeFunc]);
  return (
    <div
      className={styles.spinner}
      style={{
        display: spinner.status === null ? "none" : "flex",
      }}
    >
      {spinner.status === "LOADING" && <div className={styles.loading}></div>}
      {spinner.status === "LOAD_SUCCESS" && (
        <div className={styles.success}>
          <span>OK.</span>
        </div>
      )}
      {spinner.status === "LOAD_ERROR" && (
        <div className={styles.error}>
          <span>OH!</span>
          <span>NO!</span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  spinner: makeSelectSpinner(),
});

export function mapDispatchToProps(dispatch) {
  return {
    closeFunc: () => {
      dispatch(close());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);
