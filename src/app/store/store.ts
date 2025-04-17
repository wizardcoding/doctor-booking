import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './features/appointmentSlice';

export const store = configureStore({
  reducer: {
    appoint: appointmentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>