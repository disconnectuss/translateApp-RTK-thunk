import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getLanguages = createAsyncThunk("getLanguages", async () => {
  const res = await axios.request(options)
  console.log(res.data)
});
