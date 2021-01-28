import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";

import { postData } from "./actions";
import { makeSelectHome } from "./selector";
import reducer from "./reducer";
import saga from "./saga";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import "../../App.css";

import Navigation from "../../Components/Navigation";
import FormGroup from "./form";

const key = "home";

export function Home({ home, postDataFunc, postDataSuccessFunc }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className={styles.home}>
      <Navigation brand={"Home"} navItems={["BBB", "AAA"]} />
      <Container>
        <Row className="mt-40">
          <Col xs={"12"}>
            <h1>Lorem Ipsum</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-50">
          <Col sm={"12"} md={"8"} lg={"6"} xl={"5"}>
            <FormGroup setData={postDataFunc} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Home.propTypes = {
  postLoad: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

export function mapDispatchToProps(dispatch) {
  return {
    postDataFunc: (values) => {
      dispatch(postData(values));
    },
    postDataSuccessFunc: (values) => {
      dispatch(postData(values));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
