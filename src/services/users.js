import axios from "axios";
import { errorHandler, getToken, servicesControl } from "../components/helper";

const apiUrl = "http://localhost:5000/";
// const apiUrl = "https://food-order-backend2-5tu9.onrender.com/";

export const userRegister = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}register`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const userLogin = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}login`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const updateUser = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}updateUser`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });
