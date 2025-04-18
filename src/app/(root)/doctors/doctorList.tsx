import DoctorCard from "@/components/doctorCard";

const DoctorList = () => {
  return (
    <div>
      <DoctorCard
        name="New Doctor"
        specialities={[
          "orto",
          "cardio",
          "muscle",
          "orto",
          "cardio",
          "muscle",
          "orto",
          "cardio",
          "muscle",
          "orto",
          "cardio",
          "muscle",
        ]}
        schedule={[]}
      />
    </div>
  );
};

export default DoctorList;
