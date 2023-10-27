import React from "react";
import axios from "axios";

import { tokenState } from "../../reducer/tokenBoolean";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Index = () => {
  const dispatch = useDispatch();

  const sessionToken = sessionStorage.getItem("token");
  const headers = { Authorization: `Bearer ${sessionToken}` };
  // console.log("token",header)
  axios
    .get("http://localhost:3000/users/profile", { headers })
    .then((res) => {
      dispatch(tokenState({ token: true }));
      console.log("res.dataaa", res.data);
    })
    .catch((err) => {
      ERROR(ERR)
      ERR.
      if (err.request.status === 401) {
        dispatch(tokenState({ token: false }));
      }
      console.log("errr", err.request.status);
    });

  return <>PROFİL PAGEEEE</>;
};

export default Index;
