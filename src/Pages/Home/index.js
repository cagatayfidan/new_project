import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import PropTypes from "prop-types";
import { setUser, loadData, loadDataError, loadDataSuccess } from "./actions";
import { makeSelectHome } from "./selector";

import  request  from "../../utils/request";

import styles from "./style.module.scss";
import Navigation from "../../Components/Navigation";
//import { Col, Container, Row } from "react-bootstrap";

export class Home extends React.Component {
  componentDidMount() {
    request('/users')
  }
  render() {
    return (
      <div className={styles.home}>
        <Navigation />
        <h2>
          <strong>Türkiye’nin dijital platformu</strong> Edsen'de
        </h2>
      </div>
    );
  }
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
