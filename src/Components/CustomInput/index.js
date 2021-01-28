import styles from "./style.module.scss";

const CustomInput = ({ field, props, placeHolder }) => (
  <div className={styles.customInputContainer}>
    <input placeholder={placeHolder} type="text" {...field} {...props} />
  </div>
);

export default CustomInput;
