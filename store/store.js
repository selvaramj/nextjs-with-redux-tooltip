import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import users from './usersSlice';
import counter from './counterSlice';
import { type } from 'os';

// const combinedReducer = combineReducers({
//   counter,
//   users,
// });

// const masterReducer = (state, action) => {
//   console.log('1. From Hydrate action ', state, action);
//   if (action.type === HYDRATE) {
//     console.log('2. From Hydrate action ', state, action);
//     const nextState = {
//       ...state, // use previous state
//       counter: {
//         count: state.counter.count + action.payload.counter.count,
//       },
//       users: {
//         users: [...action.payload.users.users, ...state.users.users],
//       },
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

export const makeStore = () =>
  configureStore({
    reducer: {
      counter,
      users,
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
