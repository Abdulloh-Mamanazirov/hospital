import { Button } from "@mui/material";

const HomeDoctorCard = ({ id, image, name, field, experience }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-offset="200"
      className="doctorCard p-5 bg-white rounded-xl shadowing flex flex-col gap-4"
    >
      <img className="rounded-lg" src={image} alt="doctor" />
      <span className="text-center">
        <h3 className="text-3xl font-medium">{name}</h3>
        <p className="text-lg opacity-80">{field}</p>
      </span>
      <p className="text-center">{experience} years of experience</p>
      <Button variant="contained">Book an appointment</Button>
    </div>
  );
};

export default HomeDoctorCard;
