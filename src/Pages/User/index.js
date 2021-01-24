import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import ApiStore from "../../utils/request";

import { loadData, loadDataError, loadDataSuccess } from "./actions";
import { makeSelectUser } from "./selector";
import reducer from "./reducer";
import saga from "./saga";

import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import "../../App.css";

import Navigation from "../../Components/Navigation";
import UserList from "../../Components/UserList";

const key = "user";

export function User({ user, loadDataFunc }) {
  useEffect(() => {
    ApiStore.users.get().then(() => loadDataFunc());
  }, [loadDataFunc]);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <div className={styles.home}>
      <Navigation brand={"User"} />
      <Container>
        <Row className="mt-40">
          <Col>
            <h1>Lorem Ipsum</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <UserList users={user.list} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

User.propTypes = {
  list: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};
const mapStateToProps = createStructuredSelector({
  user: makeSelectUser(),
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(User);
