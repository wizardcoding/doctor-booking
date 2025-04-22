import { createSlice } from '@reduxjs/toolkit';

declare type Appointment =  {
    doctor?: string;
    date?: string;
    speciality?: string;
    location?: string;
}

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: { appointments: []},
    reducers: {
        add: (state: { appointments: Array<Appointment> }, action) =>
        { state.appointments = [...state.appointments, action.payload] },
        
        remove: (state: { appointments: Array<Appointment> }, action) =>
        { state.appointments = state.appointments.filter(appoint => appoint !== state.appointments[action.payload]) },

        removeAll: (state: { appointments: Array<Appointment> }) =>
        { state.appointments = [] },
        
    }
});

export const { add, remove, removeAll } = appointmentSlice.actions;

export default appointmentSlice.reducer;