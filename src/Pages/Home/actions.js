import { POST_DATA } from "./constants";

export function postData(values) {
  return {
    type: POST_DATA,
    values,
  };
}
