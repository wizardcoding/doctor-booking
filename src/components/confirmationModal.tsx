import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { add } from "@/app/store/features/appointmentSlice";
import DropdownSchedule from "./dropdownSchedule";
import { useState } from "react";

const ConfirmationModal = ({
  name,
  location,
  schedule,
}: {
  name: string;
  location: string;
  schedule: Array<string>;
}) => {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const addNew = (appointment: { doctor: string; date: string }) => {
    if (appointment.doctor && appointment.date) {
      dispatch(add(appointment));
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="mx-auto" asChild>
        <Button className="focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
          <span className="hidden md:block">Make an Appointment</span>
          <span className="md:hidden">Book Now</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-96">
        <DialogHeader className="justify-center">
          <DialogTitle className="text-center">
            Confirm Your appointment ?
          </DialogTitle>
          <DialogDescription className="max-w-52 grid grid-flow-col grid-rows-3 gap-3 mt-2.5 mx-auto">
            <span className="break-after-all">
              <strong>Doctor:</strong> {name}
            </span>
            <span className="break-after-all">
              <strong>Location: </strong>
              {location}
            </span>
            <span className="break-after-all">
              <strong>Date: </strong>
              <DropdownSchedule
                options={schedule}
                setDate={setDate}
                date={date}
              />
            </span>
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button
            onClick={() => addNew({ doctor: name, date: date })}
            className={`focus:outline-none text-white bg-teal-500 hover:bg-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4 cursor-pointer`}
            disabled={!date ? true : false}
          >
            <span>Confirm</span>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default ConfirmationModal;
