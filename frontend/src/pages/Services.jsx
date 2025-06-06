import React from "react";
import {
  FaListAlt,
  FaQuestionCircle,
  FaBell,
  FaCalendarAlt,
  FaFilePrescription,
  FaComments,
  FaNotesMedical,
  FaBrain,
  FaUserInjured,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDoctorStore } from "../store/doctor.store";
import { usePatientStore } from "../store/patient.store";

const Services = () => {
  const navigate = useNavigate();
  const doctor = useDoctorStore((state) => state.user);
  const patient = usePatientStore((state) => state.user);

  const isDoctor = Boolean(doctor);
  const isPatient = Boolean(patient);

  // Doctor-specific services
  const doctorServices = [
    {
      title: "View Patient Details",
      description:
        "Access comprehensive patient profiles including medical history, prescriptions, and upcoming appointments.",
      icon: <FaUserInjured size={40} />,
      link: "/patient-details",
    },
    {
      title: "AI Health Insights",
      description:
        "Smart AI-generated summaries of prescriptions and health records for easy understanding.",
      icon: <FaBrain size={40} />,
      link: "/ai-insights",
    },
    {
      title: "Patient Report Assistance",
      description:
        "Seamless access to medical reports and support in understanding health data.",
      icon: <FaListAlt size={40} />,
      link: "/report-assistance",
    },
    {
      title: "24x7 Helpdesk",
      description:
        "Our support team is always ready to resolve patient and doctor queries quickly.",
      icon: <FaQuestionCircle size={40} />,
      link: "/helpdesk",
    },
    {
      title: "Smart Notifications",
      description:
        "Get real-time updates for appointments, health reports, and medical activities.",
      icon: <FaBell size={40} />,
      link: "/notifications",
    },
    {
      title: "Prescription Management",
      description: "Track and manage your prescriptions in one place.",
      icon: <FaFilePrescription size={40} />,
      link: "/prescriptions",
    },
    {
      title: "Doctor-Patient Communication",
      description:
        "Direct messaging system between patients and healthcare providers.",
      icon: <FaComments size={40} />,
      link: "/communication",
    },
  ];

  // Patient-specific services
  const patientServices = [
    {
      title: "Medical History Tracking",
      description:
        "Comprehensive tracking of your medical history and treatments.",
      icon: <FaNotesMedical size={40} />,
      link: "/medical-history",
    },
    {
      title: "Appointment Scheduling",
      description:
        "Book and manage appointments with healthcare providers easily.",
      icon: <FaCalendarAlt size={40} />,
      link: "/appointments",
    },
    {
      title: "Patient Report Assistance",
      description:
        "Seamless access to medical reports and support in understanding health data.",
      icon: <FaListAlt size={40} />,
      link: "/report-assistance",
    },
    {
      title: "24x7 Helpdesk",
      description:
        "Our support team is always ready to resolve patient and doctor queries quickly.",
      icon: <FaQuestionCircle size={40} />,
      link: "/helpdesk",
    },
    {
      title: "Smart Notifications",
      description:
        "Get real-time updates for appointments, health reports, and medical activities.",
      icon: <FaBell size={40} />,
      link: "/notifications",
    },
    {
      title: "Prescription Management",
      description: "Track and manage your prescriptions in one place.",
      icon: <FaFilePrescription size={40} />,
      link: "/prescriptions",
    },
    {
      title: "Doctor-Patient Communication",
      description:
        "Direct messaging system between patients and healthcare providers.",
      icon: <FaComments size={40} />,
      link: "/communication",
    },
    {
      title: "AI Health Insights",
      description:
        "Smart AI-generated summaries of prescriptions and health records for easy understanding.",
      icon: <FaBrain size={40} />,
      link: "/ai-insights",
    },
  ];

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
            <div
              key={idx}
              onClick={() => service.link && navigate(service.link)}
              className={`${
                service.link
                  ? "cursor-pointer hover:scale-[1.03]"
                  : "cursor-default opacity-70"
              } bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl shadow-xl w-72 p-6 transition-transform transform duration-300 ease-in-out`}
            >
              <div className="mb-5 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
