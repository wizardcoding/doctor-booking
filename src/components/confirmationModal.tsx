import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ConfirmationModal = ({
  name,
  location,
  schedule,
}: {
  name: string;
  location: string;
  schedule: Array<string>;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="mx-auto" asChild>
        <Button className="focus:outline-none text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
          <span className="hidden md:block">Make an Appointment</span>
          <span className="md:hidden">Book Now</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="justify-center">
          <DialogTitle className="text-center">
            Confirm Your appointment?
          </DialogTitle>
          <DialogDescription>
            <section className="max-w-32 justify-start mx-auto">
              <p>
                <strong>Doctor:</strong> {name}
              </p>
              <p>
                <strong>Location: </strong>
                {location}
              </p>
              <Button className="focus:outline-none text-white bg-teal-500 hover:bg-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-4">
                <span>Confirm</span>
              </Button>
            </section>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
