import { createSlice } from "@reduxjs/toolkit";
import { DoctorType } from '@/lib/type';
import { doctorsData } from '@/api/data';

export const doctorsSlice = createSlice({
    name: 'doctors',
    initialState: {doctors: doctorsData},
    reducers: {
        set: (state: {doctors: Array<DoctorType>}, action) => { 
            console.log(state)
            state.doctors = [...action.payload]
        }
    }
});

export const { set } = doctorsSlice.actions;

export default doctorsSlice.reducer;