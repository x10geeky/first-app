import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/couter';
import postReducer from './slices/post';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
