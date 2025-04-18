"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ConfirmationModal from "@/components/confirmationModal";
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

  return (
    <Card className="max-w-2xs md:max-w-3xs min-w-56 h-52 md:h-[400px] text-center m-2">
      <CardHeader className="justify-center">
        <Avatar className="w-24 h-24 hidden md:block mx-auto">
          <AvatarImage src="/doctor1.png" />
          <AvatarFallback>DR</AvatarFallback>
        </Avatar>
        <CardTitle className="text-slate-800">{name}</CardTitle>
        <CardDescription className="p-0 m-0">
          <Split />
          <span className="overflow-ellipsis">{specialities.join(" | ")}</span>
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
        <ConfirmationModal
          name={name}
          location={"location"}
          schedule={schedule}
        />
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
