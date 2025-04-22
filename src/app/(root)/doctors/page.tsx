import DoctorList from "./doctorList";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Doctors",
  description: "List of profrsionals",
};

const Doctors = () => {
  return (
    <div>
      <DoctorList />
    </div>
  );
};

export default Doctors;
