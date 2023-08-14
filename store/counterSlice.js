import { createSlice, current } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      let previousData = current(state);
      console.log('Previous data ', previousData);
      const nextState = {
        ...state, // use previous state
        count: previousData.count + action.payload.counter.count,
      };
      return nextState;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
