import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import ApiStore from "../../utils/request";
import styles from "./style.module.scss";
import Form from "../Form";

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
    avatar: Yup.mixed().required("You miss photo"),
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
          <Form
            values={values}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        )}
      </Formik>
    </div>
  );
}
