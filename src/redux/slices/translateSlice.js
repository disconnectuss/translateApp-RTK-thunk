import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions/translateActions";

const initialState = {
  isLoading: true,
  isError: false,
  languages: [],
  status: "idle",
  error: null,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLanguages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLanguages.fulfilled, (state, action) => {
        (state.languages = action.payload),
          (state.isLoading = false),
          (state.isError = false);
      })
      .addCase(getLanguages.rejected, (state) => {
        (state.languages = action.payload),
          (state.isLoading = false),
          (state.isError = true);
      });
  },
});

export default translateSlice.reducer;
