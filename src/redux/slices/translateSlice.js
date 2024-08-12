import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  isError: false,
  languages: [],
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  extraReducers: {},
});
export default translateSlice.reducer;
