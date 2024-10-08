import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../utils/constant";

export const getLanguages = createAsyncThunk("languages", async () => {
  const res = await axios.request(options);
  // console.log(res.data);
  const data = res.data.languages;
  const refinedData = data.map((lang) => ({
    value: lang.language,
    label: lang.name,
  }));

  return refinedData;
});

export const translateText = createAsyncThunk(
  "translateText",
  async (params) => {
    const options = {
      method: "POST",
      url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "x-rapidapi-key": "bb908fbc39msh59a27f0e0c50ae2p1220bdjsn816ff2daf147",
        "x-rapidapi-host": "deep-translate1.p.rapidapi.com",
      },
      data: JSON.stringify({
        source: params.source,
        target: params.target,
        q: params.text,
      }),
    };
    try {
      const res = await axios.request(options);
      return res.data.data.translations.translatedText; 
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);
 
