import axios from "axios";

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export const instance = axios.create({
  baseURL: "//reqres.in/api",
  timeout: 1000,
});
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
export default function request(url, options) {
  return instance.get(url, options).then(checkStatus).then(parseJSON);
}
