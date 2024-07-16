import axios from "axios";
import { errorHandler, getToken, servicesControl } from "../components/helper";

const apiUrl = import.meta.env.VITE_API_URI;
// const apiUrl = "https://food-order-backend2-5tu9.onrender.com/";

export const addCreditCart = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}cart/addCreditCart`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const updateCreditCart = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}cart/updateCreditCart`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getCreditCartById = (id) =>
  axios({
    method: "get",
    url: `${apiUrl}cart/getCreditCartById/${id}`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const deleteCreditCar = (id) =>
  axios({
    method: "get",
    url: `${apiUrl}cart/deleteCreditCar/${id}`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });
