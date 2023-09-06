import { configureStore } from '@reduxjs/toolkit';
import PollutionReducer from './PollutionSlice';

const store = configureStore({
  reducer: {
    pollution: PollutionReducer,
  },
});

export default store;
