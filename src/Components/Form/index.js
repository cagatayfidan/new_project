import React from "react";
import styles from "./style.module.scss";
import CustomInput from "../CustomInput";
import { ErrorMessage, Field } from "formik";
import { Button, Col, Row } from "react-bootstrap";

export default function Form({ values, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <h4>Tell me who are you</h4>
      <Row>
        <Col md={"12"}>
          <Row className={"align-items-center"}>
            <Col sm={"12"} md={"6"}>
              <label className={styles.customLabel}>First Name</label>
              <span className={styles.customErrors}>
                <ErrorMessage name="first_name" />
              </span>
            </Col>
            <Col sm={"12"} md={"6"}>
              <Field
                type="text"
                placeHolder="You know what we want"
                component={CustomInput}
                onChange={handleChange}
                value={values.first_name}
                name="first_name"
              />
            </Col>
          </Row>
        </Col>
        <Col md={"12"}>
          <Row className={"align-items-center"}>
            <Col sm={"12"} md={"6"}>
              <label className={styles.customLabel}>Last Name</label>
              <span className={styles.customErrors}>
                <ErrorMessage name="last_name" />
              </span>
            </Col>
            <Col sm={"12"} md={"6"}>
              <Field
                type="text"
                placeHolder="yes, your last name"
                component={CustomInput}
                onChange={handleChange}
                value={values.last_name}
                name="last_name"
              />
            </Col>
          </Row>
        </Col>
        <Col md={"12"}>
          <Row className={"align-items-center"}>
            <Col sm={"12"} md={"6"}>
              <label className={styles.customLabel}>E-mail</label>
              <span className={styles.customErrors}>
                <ErrorMessage name="email" />
              </span>
            </Col>
            <Col sm={"12"} md={"6"}>
              <Field
                type="email"
                placeHolder="Exactly"
                component={CustomInput}
                value={values.email}
                onChange={handleChange}
                name="email"
              />
            </Col>
          </Row>
        </Col>
        <Col md={"12"}>
          <Row className={"align-items-center"}>
            <Col xs={"12"} sm={"7"} md={"6"} lg={"8"}>
              <label className={styles.fileInput}>
                <Field
                  id="file"
                  type="file"
                  name="avatar"
                  accept="image/png,image/jpeg"
                />
                <span className={styles.customFileInput}></span>
              </label>
              <span className={styles.customErrors}>
                <ErrorMessage name="avatar" />
              </span>
            </Col>
            <Col xs={"12"} sm={"5"} md={"6"} lg={"4"}>
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
}
