import * as Yup from "yup";

const Validations = {
  first_name: Yup.string().max(50, "Too long").required("You miss first name"),
  last_name: Yup.string().max(50, "Too long").required("You miss last name"),
  email: Yup.string().email("Invalid email").required("You miss email"),
};

export default Validations;
