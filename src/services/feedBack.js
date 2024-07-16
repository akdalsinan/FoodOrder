import axios from "axios";
import { errorHandler, getToken, servicesControl } from "../components/helper";

const apiUrl = import.meta.env.VITE_API_URI;
// const apiUrl = "https://food-order-backend2-5tu9.onrender.com/";

export const addFeedback = (createData) =>
  axios({
    method: "post",
    url: `${apiUrl}feedback/addFeedback`,
    data: createData,
    headers: getToken(),
  })
    .then((response) => servicesControl(response, true))
    .catch((err) => {
      errorHandler(err.message);
    });

export const getAllFeedBack = () =>
  axios({
    method: "get",
    url: `${apiUrl}feedback/getAllFeedBack`,
    headers: getToken(),
  })
    .then((response) => servicesControl(response))
    .catch((err) => {
      errorHandler(err.message);
    });
