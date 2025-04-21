import { DoctorType } from "@/lib/type";
import DoctorCard from "@/components/doctorCard";

const ListDisplay = ({ list }: { list: Array<DoctorType> }) => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-extrabold text-slate-600 xs:col-span-1 xs:w-1/2">
          Doctor Directory
        </h1>
        <p className="text-slate-600 hidden md:block">
          Here you can book an appointment with our specialists
        </p>
      </div>
      <div className="grid place-items-center md:place-items-left  min-h-screen">
        <div className="p-4 max-w-5xl grid gap-4 xs:grid-cols-1 grid-cols-2">
          {list.map((doctor, index) => (
            <div key={index}>
              <DoctorCard
                name={doctor.name}
                specialities={doctor.speciality}
                schedule={doctor.availability}
                photo={doctor.photo}
                location={doctor.location}
                rating={parseInt(doctor.rating)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListDisplay;
