"use client";

import ListDisplay from "./listDisplay";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const DoctorList = () => {
  const medicalData = useSelector((state: RootState) => state.doctors.doctors);
  return (
    <section>
      <h1 className="font-extrabold text-6xl text-slate-800">
        Doctor Directory
      </h1>
      <p className="p-3.5">
        Here you can book an appointment with our specialists, because we care
        about you.
      </p>
      <ListDisplay list={medicalData} />
    </section>
  );
};

export default DoctorList;
