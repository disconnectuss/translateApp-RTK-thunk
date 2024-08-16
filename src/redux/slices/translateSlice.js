import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, translateText } from "../actions/translateActions";

const initialState = {
  isLoading: true,
  isError: false,
  languages: [],
  translateLoading: true,
  translateError: false,
  translatedText: "",
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    clearTranslate: (state) => {
      state.translatedText = "";
    },
  },
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
      })
      .addCase(translateText.pending, (state) => {
        state.translateLoading = true;
      })
      .addCase(translateText.fulfilled, (state, action) => {
        (state.translatedText = action.payload),
          (state.translateLoading = false),
          (state.translateError = false);
      })
      .addCase(translateText.rejected, (state) => {
        (state.translateLoading = false), (state.translateError = true);
      });
  },
});

export default translateSlice.reducer;

export const clearTranslate = translateSlice.actions.clearTranslate;
