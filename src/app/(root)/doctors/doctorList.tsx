import { doctorsData } from "@/api/data";
import ListDisplay from "./listDisplay";

const DoctorList = () => {
  return (
    <div>
      <ListDisplay list={doctorsData} />
    </div>
  );
};

export default DoctorList;
