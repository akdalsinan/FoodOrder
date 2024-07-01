import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ------------- GET METHODS ------------------- //

export const getAllHamburger = createAsyncThunk(
  "/getAllHamburger",
  async () => {
    const response = await axios.get("http://localhost:5000/getAllHamburger");
    return response.data;
  }
);

export const getAllPizza = createAsyncThunk("/getAllPizza", async () => {
  const response = await axios.get("http://localhost:5000/getAllPizza");
  return response.data;
});

export const getAllMakarna = createAsyncThunk("/getAllMakarna", async () => {
  const response = await axios.get("http://localhost:5000/getAllMakarna");
  return response.data;
});

// ------------- POST METHODS ------------------- //
