import axios from "axios";

/** Documentation can be found at https://poeditor.com/docs/api */
export const poeditorApi = axios.create({
  baseURL: "https://api.poeditor.com/v2",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
