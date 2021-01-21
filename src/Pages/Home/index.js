import React from "react";
import { connect } from "react-redux";
//import ApiStore from "../../utils/request";
import { createStructuredSelector } from "reselect";
import { useInjectReducer } from "../../utils/injectReducer";
import { useInjectSaga } from "../../utils/injectSaga";

import PropTypes from "prop-types";
import { loadData, setUser } from "./actions";
import { makeSelectHome } from "./selector";
import reducer from "./reducer";
import saga from "./saga";

import styles from "./style.module.scss";

const key = "home";
export function Home() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  return (
    <div className={styles.home}>
      <div style={{ color: "red" }}> 
      </div>
    </div>
  );
}
Home.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

export function mapDispatchToProps(dispatch) {
  return {
    addItemInArrayFunc: (item) => {
      dispatch(setUser(item));
    },
    loadDataFunc: () => {
      dispatch(loadData());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
