import AppointmentsList from "@/app/(root)/appointments/appointmentsList";

const Appointments = () => {
  return (
    <>
      <h1 className="font-extrabold text-6xl text-slate-800">Get Ready !</h1>
      <p className="p-3.5">
        Here you can view all your appointments confirmed, make sure you are
        ready for your visit !
      </p>
      <section className="mx-auto max-w-4xl">
        <AppointmentsList />
      </section>
    </>
  );
};

export default Appointments;
