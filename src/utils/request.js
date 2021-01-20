import axios from "axios";

const createAxios = (url) =>
  axios.create({
    baseURL: `https://reqres.in/api/${url}`,
    timeout: 1000,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    validateStatus(status) {
      return status >= 200 && status < 501;
    },
  });

var users = createAxios("users");

var ApiStore = {
  users: users,
};
export default ApiStore;
