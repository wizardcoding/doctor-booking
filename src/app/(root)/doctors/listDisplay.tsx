import { DoctorType } from "@/lib/type";
import DoctorCard from "@/components/doctorCard";

const ListDisplay = ({ list }: { list: Array<DoctorType> }) => {
  return (
    <div>
      {list.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          specialities={doctor.speciality}
          schedule={doctor.availability}
          photo={doctor.photo}
          location={doctor.location}
          rating={parseInt(doctor.rating)}
        />
      ))}
    </div>
  );
};

export default ListDisplay;
