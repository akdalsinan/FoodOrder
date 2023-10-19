import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ------------- GET METHODS ------------------- //

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  const response = await axios.get("http://localhost:3000/users/getAllUsers");
  return response.data;
});

// ------------- POST METHODS ------------------- //

export const loginUser = createAsyncThunk("users/loginUser", async (data) => {
    const response = await axios.post(
      "http://localhost:3000/users/loginUser",
      data
    );
    return response.data;
  });

export const addUser = createAsyncThunk("users/addUser", async (data) => {
  const response = await axios.post(
    "http://localhost:3000/users/addUser",
    data
  );
  return response.data;
});

