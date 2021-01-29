import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeSelectSpinner } from "./selector";
import { close } from "./actions";

import styles from "./style.module.scss";
const Spinner = ({ spinner, closeFunc }) => {
  const takeColor = () => {
    switch (spinner.status) {
      case "LOAD_SUCCESS":
        return "green";
      case "LOAD_ERROR":
        return "red";
      case "LOADING":
        return "gray";
      default:
        break;
    }
  };
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
        backgroundColor: takeColor(),
        display: spinner.status === null ? "none" : "block",
      }}
    >
      {spinner.status === "LOADING" && (
        <div>
          <span>Loading</span>
        </div>
      )}
      {spinner.status === "LOAD_SUCCESS" && (
        <div>
          <span>Success</span>
        </div>
      )}
      {spinner.status === "LOAD_ERROR" && (
        <div>
          <span>Error</span>
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
