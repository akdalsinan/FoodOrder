import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllHamburger = createAsyncThunk(
  "food/getAllHamburger",
  async () => {
    const response = await axios.get("http://localhost:3000/food/getAllHamburger");
    return response.data;
  }
);

export const getAllPizza = createAsyncThunk(
  "food/getAllPizza",
  async () => {
    const response = await axios.get("http://localhost:3000/food/getAllPizza");
    return response.data;
  }
);

export const getAllMakarna = createAsyncThunk(
  "food/getAllMakarna",
  async () => {
    const response = await axios.get("http://localhost:3000/food/getAllMakarna");
    return response.data;
  }
);
