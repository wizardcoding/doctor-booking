"use client";

import { useSelector, useDispatch } from "react-redux";
import { add, remove, removeAll } from "@/app/store/features/appointmentSlice";
import { RootState } from "@/app/store/store";

const AppointmentsList = () => {
  const scheduleData = useSelector(
    (state: RootState) => state.appoint.appointments
  );
  const dispatch = useDispatch();

  const addNew = (appointment: { doctor: string; date: string }) =>
    dispatch(add(appointment));
  const removeOne = (indx: number) => {
    dispatch(remove(indx));
  };
  const removeComplete = () => dispatch(removeAll());
  return (
    <>
      data list{" "}
      {scheduleData.map((data: { doctor: string; date: string }, index) => (
        <div key={index}>
          {data.doctor} {data.date} {index}
          <button type="button" onClick={() => removeOne(index)}>
            {" "}
            remove
          </button>
        </div>
      ))}{" "}
      <button
        type="button"
        onClick={() => addNew({ doctor: `nex Doc`, date: "today" })}
      >
        add new app
      </button>
    </>
  );
};

export default AppointmentsList;
