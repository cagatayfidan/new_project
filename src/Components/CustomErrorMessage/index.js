import styles from "./style.module.scss";

const CustomErrorMessage = ({ form: { touched, errors }, field,props }) => (
  <div>
    {touched[field.name] && errors[field.name] && (
      <span className={styles.errors}>!</span>
    )}
  </div>
);

export default CustomErrorMessage;
