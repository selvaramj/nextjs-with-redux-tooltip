import { createSlice, current } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      let previousData = current(state);
      console.log('Previous data ', previousData);
      const nextState = {
        ...previousData, // use previous state
        users: [...action.payload.users.users, ...previousData.users],
      };
      return nextState;
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
