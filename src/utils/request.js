import axios from "axios";

const createAxios = (url) =>
  axios.create({
    baseURL: `https://reqres.in/api/${url}`,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    validateStatus(status) {
      return status >= 200 && status < 400;
    },
  });

var users = createAxios("users");
var register = createAxios("register");
var ApiStore = {
  users: users,
  register: register,
};
export default ApiStore;
