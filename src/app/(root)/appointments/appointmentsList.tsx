"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const AppointmentsList = () => {
  const scheduleData = useSelector(
    (state: RootState) => state.appoint.appointments
  );
  // min height height: 380px; 660px     height: 79px;
  return (
    <>
      {scheduleData.length > 0 ? (
        <ScrollArea className="ml-1 max-h-96 md:max-h-[700px] overflow-y-auto">
          <section>
            {scheduleData.map(
              (
                data: {
                  doctor: string;
                  date: string;
                  speciality: string;
                  location: string;
                },
                index
              ) => (
                <div
                  className=" min-h-12 max-w-4xl m-2 mt-2.5 rounded-2xl bg-teal-100 p-3 text-slate-800 grid grid-cols-2"
                  key={index}
                >
                  <div className="grid grid-rows-2">
                    <span>
                      <strong className="hidden md:inline-flex">Doctor:</strong>
                      <strong className="md:hidden">Dr.:</strong>
                      &nbsp;{data.doctor}
                    </span>
                    <span>
                      <strong className="hidden md:inline-flex">
                        Appointment:
                      </strong>
                      <strong className="md:hidden">Date:</strong>
                      &nbsp;{data.date}
                    </span>
                  </div>
                  <div className="grid grid-rows-2">
                    <span>
                      <strong className="hidden md:inline-flex">
                        Speciality:
                      </strong>
                      <strong className="md:hidden">Spec.:</strong>
                      &nbsp;{data.speciality}
                    </span>
                    <span>
                      <strong className="hidden md:inline-flex">
                        Location:
                      </strong>
                      <strong className="md:hidden">Loc.:</strong>
                      &nbsp;{data.location}
                    </span>
                  </div>
                </div>
              )
            )}
          </section>
        </ScrollArea>
      ) : (
        <p className="text-center">You dont Have any Appointments yet</p>
      )}
    </>
  );
};

export default AppointmentsList;
