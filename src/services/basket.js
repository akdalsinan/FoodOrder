import axios from "axios";
import { errorHandler, getToken, servicesControl } from "../components/helper";

const apiUrl = "http://localhost:5000/";
// const apiUrl = "https://food-order-backend2-5tu9.onrender.com/";

export const addBasket = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}basket/add`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const deleteBasket = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}basket/remove`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getAllUserBasket = (id) =>
  axios({
    method: "get",
    url: `${apiUrl}basket/${id}`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });
