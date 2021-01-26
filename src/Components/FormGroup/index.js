import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Row } from "react-bootstrap";

import ApiStore from "../../utils/request";
import styles from "./style.module.scss";
import CustomInput from "../CustomInput";
import CustomErrorMessage from "../CustomErrorMessage";

export default function FormGroup({ postReducer, postSuccess, postError }) {
  const setData = (values) => {
    ApiStore.users.post("/", values).then(postReducer).catch(postError);
  };
  let valitadionSchema = Yup.object().shape({
    first_name: Yup.string()
      .max(50, "Too long")
      .required("You miss first name"),
    last_name: Yup.string().max(50, "Too long").required("You miss last name"),
    email: Yup.string().email("Invalid email").required("You miss email"),
  });

  return (
    <div className={styles.formGroup}>
      <Formik
        validationSchema={valitadionSchema}
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
                <Row className={"align-items-center"}>
                  <Col sm={"12"} md={"6"}>
                    <label>First Name</label>
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
                    <label>Last Name</label>
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
                    <label>E-mail</label>
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
                  <Col xs={"12"} sm={"7"} md={"6"}>
                    <Field
                      type="file"
                      name="avatar"
                      accept="image/png,image/jpeg"
                    />
                  </Col>
                  <Col xs={"12"} sm={"5"} md={"6"}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <ErrorMessage name="first_name" />
                <ErrorMessage name="last_name" />
                <ErrorMessage name="email" />
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
}
