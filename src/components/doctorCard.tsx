"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaMapLocationDot } from "react-icons/fa6";

const DoctorCard = ({
  name,
  specialities,
  schedule,
}: {
  name: string;
  specialities: Array<string>;
  schedule: Array<string>;
}) => {
  const Split = () => (
    <Separator
      orientation="horizontal"
      decorative
      className="text-slate-600 border-1"
    />
  );

  const scheduleData = useSelector(
    (state: RootState) => state.appoint.appointments
  );

  //   const slots = scheduleData.map((doc: { doctor: string; date: string }) => {
  //     if (doc.doctor === name) {
  //     }

  //     return doc.date;
  //   });

  //const available = slots.includes(schedule);

  return (
    <Card className=" max-w-2xs md:max-w-3xs min-w-56 h-52 md:h-[400px] text-center m-2">
      <CardHeader className="justify-center">
        <Avatar className="w-24 h-24 hidden md:block mx-auto">
          <AvatarImage src="/doctor1.png" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        <CardTitle className="text-slate-800">{name}</CardTitle>
        <CardDescription className="p-0 m-0">
          <Split />
          {specialities.join(" | ")}
          <Split />
          <p className="justify-items-center p-3 hidden md:block">
            <FaMapLocationDot className="text-teal-500" /> <>{"Mexico city"}</>
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Schedules</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Button className="focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
          <span className="hidden md:block">Make an Appointment</span>
          <span className="md:hidden">Book Now</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
