"use client";

import ListDisplay from "./listDisplay";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const DoctorList = () => {
  const medicalData = useSelector((state: RootState) => state.doctors.doctors);
  return (
    <div>
      <ListDisplay list={medicalData} />
    </div>
  );
};

export default DoctorList;
