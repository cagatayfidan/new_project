import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";

import {
  loadData,
  loadDataError,
  loadDataSuccess,
  postData,
  postDataError,
  postDataSuccess,
} from "./actions";
import { makeSelectHome } from "./selector";
import reducer from "./reducer";
import saga from "./saga";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import "../../App.css";

import Navigation from "../../Components/Navigation";
import FormGroup from "./form";
import ApiStore from "../../utils/request";
const key = "home";

export function Home({
  home,
  postDataFunc,
  postDataErrorFunc,
  postDataSuccessFunc,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const setData = (values) => {
    ApiStore.users
      .post("/", values)
      .then(postDataFunc)
      .then(postDataSuccessFunc)
      .catch(postDataErrorFunc);
  };
  return (
    <div className={styles.home}>
      <Navigation
        brand={"Home"}
        textColor={"#7b96a7"}
        navItems={["BBB", "AAA"]}
      />
      <Container>
        <Row className="mt-40">
          <Col xs={"12"}>
            <h1>Lorem Ipsum</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-50">
          <Col sm={"12"} md={"8"} lg={"6"} xl={"5"}>
            <FormGroup
              postError={postDataErrorFunc}
              postReducer={postDataFunc}
              postSuccess={postDataSuccessFunc}
              setData={setData}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Home.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadDataFunc: () => {
      dispatch(loadData());
    },
    loadDataSuccessFunc: () => {
      dispatch(loadDataSuccess());
    },
    loadDataErrorFunc: () => {
      dispatch(loadDataError());
    },
    postDataFunc: () => {
      dispatch(postData());
    },
    postDataSuccessFunc: () => {
      dispatch(postDataSuccess());
    },
    postDataErrorFunc: () => {
      dispatch(postDataError());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
