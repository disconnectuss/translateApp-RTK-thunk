import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../utils/constant";

export const getLanguages = createAsyncThunk("getLanguages", async () => {
  const res = await axios.request(options);
  console.log(res.languages);
});
