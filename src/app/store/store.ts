import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './features/appointmentSlice';
import doctorsSlice from './features/doctorsSlice'

export const store = configureStore({
  reducer: {
        appoint: appointmentReducer,
      doctors: doctorsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>