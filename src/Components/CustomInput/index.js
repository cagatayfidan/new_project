import styles from "./style.module.scss";

const CustomInput = ({
  field,
  form: { touched, errors },
  props,
  placeHolder,
}) => (
  <div className={styles.customInputContainer}>
    <input placeholder={placeHolder} type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <span className={styles.errors}>!</span>
    )}
  </div>
);

export default CustomInput;
