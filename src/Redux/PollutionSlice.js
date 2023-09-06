import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  pollutionData: [],
  isLoading: true,
  isPollutionLoding: true,
};

const URL = 'https://restcountries.com/v3.1/region/asia';

export const getData = createAsyncThunk('pollution/getData', async () => {
  const response = await axios(URL);
  return response.data;
});

const API_KEY = 'a23aac3477cdfbedd97197df96ee12c6';

export const getPollutionData = createAsyncThunk(
  'pollution/getPollutionData',
  async ({ lat, lon }) => {
    const response = await axios(
      `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
    );
    return response.data.list[0];
  },
);

const pollutionSlice = createSlice({
  name: 'pollution',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getPollutionData.fulfilled, (state, action) => {
        state.isPollutionLoding = false;
        state.pollutionData = action.payload;
      });
  },
});

export default pollutionSlice.reducer;
