import { DoctorType } from "@/lib/type";
import DoctorCard from "@/components/doctorCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const ListDisplay = ({ list }: { list: Array<DoctorType> }) => {
  return (
    <>
      <div className="grid place-items-center">
        <ScrollArea className="ml-1 max-h-96 md:max-h-[700px] overflow-y-auto">
          <div className="p-4 max-w-5xl grid gap-1 grid-cols-1 md:grid-cols-3">
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
        </ScrollArea>
      </div>
    </>
  );
};

export default ListDisplay;
