import axios from "axios";
import { errorHandler, getToken, servicesControl } from "../components/helper";

// const apiUrl = "http://localhost:5000/";
const apiUrl = "https://food-order-backend2-5tu9.onrender.com/";

export const addOrder = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}order/addOrder`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getOrderById = (id) =>
  axios({
    method: "get",
    url: `${apiUrl}order/getOrder/${id}`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getAllOrder = () =>
  axios({
    method: "get",
    url: `${apiUrl}order/getAllOrder`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const updateOrder = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}order/updateOrder`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });
