import React from "react";
import { useNavigate } from "react-router-dom";
import { useDoctorStore } from "../store/doctor.store";
import { usePatientStore } from "../store/patient.store";
import ServiceCard from "../components/ServiceCard";

import { doctorServices, patientServices } from "../config/services.config";

const Services = () => {
  const navigate = useNavigate();
  const doctor = useDoctorStore((state) => state.user);
  const patient = usePatientStore((state) => state.user);

  const isDoctor = Boolean(doctor);
  const isPatient = Boolean(patient);

  const servicesToShow = isDoctor
    ? doctorServices
    : isPatient
    ? patientServices
    : [];

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-8 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-black drop-shadow-md">
        {isDoctor ? "Doctor" : isPatient ? "Patient" : "Guest"} Services
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
        Empowering{" "}
        {isDoctor ? "doctors" : isPatient ? "patients" : "users"} with smart,
        secure, and effective digital health solutions.
      </p>

      {servicesToShow.length === 0 ? (
        <p className="text-gray-500 text-lg">Please login to see available services.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {servicesToShow.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              onClick={() =>
                service.link &&
                navigate(`/services/${service.link.replace(/^\//, "")}`)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
