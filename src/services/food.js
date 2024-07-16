import axios from "axios";
import { errorHandler, getToken, servicesControl } from "../components/helper";

const apiUrl = import.meta.env.VITE_API_URI;

export const getAllFood = () =>
  axios({
    method: "get",
    url: `${apiUrl}food/getAllFood`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getAllPizzas = () =>
  axios({
    method: "get",
    url: `${apiUrl}food/getAllPizza`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getAllHamburgers = () =>
  axios({
    method: "get",
    url: `${apiUrl}food/getAllHamburger`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getAllMakarnas = () =>
  axios({
    method: "get",
    url: `${apiUrl}food/getAllMakarna`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response))
    .catch((err) => {
      errorHandler(err.message);
    });

export const addFood = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}food/addFood`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const updateFood = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}food/updateFood`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const deleteFood = (id) =>
  axios({
    method: "get",
    url: `${apiUrl}food/deleteFood/${id}`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });
