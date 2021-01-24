import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { Button, Col, Row } from "react-bootstrap";

import ApiStore from "../../utils/request";

import styles from "./style.module.scss";

export default function FormGroup({
  postReducer,
  postSuccess,
  postError,
}) {
  const setData = (values) => {
    ApiStore.users
      .post("/", values)
      .then(postReducer)
      .then(response=>console.log(response))
      .catch(postError);
  };
  return (
    <div className={styles.formGroup}>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          avatar: "",
        }}
        onSubmit={setData}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={"12"}>
                <Row>
                  <Col md={"6"}>
                    <label>First Name</label>
                  </Col>
                  <Col md={"6"}>
                    <Field
                      type="text"
                      onChange={handleChange}
                      value={values.first_name}
                      name="first_name"
                    />
                  </Col>
                  <ErrorMessage name="first_name" />
                </Row>
              </Col>
              <Col md={"12"}>
                <Row>
                  <Col>
                    <label>Last Name</label>
                  </Col>
                  <Col>
                    <Field
                      type="text"
                      onChange={handleChange}
                      value={values.last_name}
                      name="last_name"
                    />
                  </Col>
                  <ErrorMessage name="last_name" />
                </Row>
              </Col>
              <Col md={"12"}>
                <Row>
                  <Col>
                    <label>E-mail</label>
                  </Col>
                  <Col>
                    <Field
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </Col>
                  <ErrorMessage name="email" />
                </Row>
              </Col>
              <Col md={"12"}>
                <Row>
                  <Col md={"9"}>
                    <Field
                      type="file"
                      name="file"
                      accept="image/png,image/jpeg"
                      value={values.avatar}
                    />
                  </Col>
                  <Col md={"3"}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}
