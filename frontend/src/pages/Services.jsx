// import { CheckCircleIcon } from '@heroicons/react/24/outline'

// function Services() {
//   const services = [
//     {
//       title: 'Medical Records Management',
//       description: 'Securely store and access your medical records anytime, anywhere.',
//     },
//     {
//       title: 'Appointment Scheduling',
//       description: 'Book and manage appointments with healthcare providers easily.',
//     },
//     {
//       title: 'Prescription Management',
//       description: 'Track and manage your prescriptions in one place.',
//     },
//     {
//       title: 'Doctor-Patient Communication',
//       description: 'Direct messaging system between patients and healthcare providers.',
//     },
//     {
//       title: 'Medical History Tracking',
//       description: 'Comprehensive tracking of your medical history and treatments.',
//     },
//     {
//       title: 'Report Sharing',
//       description: 'Securely share medical reports with authorized healthcare providers.',
//     },
//   ]

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
//         <p className="mt-4 text-lg text-gray-500">
//           Comprehensive healthcare management solutions for patients and providers
//         </p>
//       </div>

//       <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {services.map((service) => (
//           <div
//             key={service.title}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//           >
//             <div className="flex items-center">
//               <CheckCircleIcon className="h-6 w-6 text-primary-600" />
//               <h3 className="ml-2 text-lg font-medium text-gray-900">
//                 {service.title}
//               </h3>
//             </div>
//             <p className="mt-4 text-gray-500">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Services

import React from "react";
import {
  FaListAlt,
  FaQuestionCircle,
  FaBell,
  FaUpload,
  FaEye,
  FaCalendarAlt,
  FaFilePrescription,
  FaComments,
  FaNotesMedical,
  FaBrain,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
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
      title: "Appointment Scheduling",
      description:
        "Book and manage appointments with healthcare providers easily.",
      icon: <FaCalendarAlt size={40} />,
      link: "/appointments",
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
      title: "Medical History Tracking",
      description:
        "Comprehensive tracking of your medical history and treatments.",
      icon: <FaNotesMedical size={40} />,
      link: "/medical-history",
    },
    {
      title: "AI Health Insights",
      description:
        "Smart AI-generated summaries of prescriptions and health records for easy understanding.",
      icon: <FaBrain size={40} />,
      link: "/ai-insights",
    },
    {
      title: "View Patient Details",
      description:
        "View Patient informations and documents.",
      icon: <FaEye size={40} />,
      link: "/view-details",
    },
    {
      title: "Upload Patient details",
      description:
        "Add patient informations and upload documents.",
      icon: <FaUpload size={40} />,
      link: "/upload",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-8 text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-black drop-shadow-md">
        Our Services
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
        Empowering patients and doctors with smart, secure, and effective digital health solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {services.map((service, idx) => {
          const isClickable = !!service.link;
          return (
            <div
              key={idx}
              onClick={() => isClickable && navigate(service.link)}
              className={`${
                isClickable
                  ? "cursor-pointer hover:scale-[1.03]"
                  : "cursor-default opacity-70"
              } bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl shadow-xl w-72 p-6 transition-transform transform duration-300 ease-in-out`}
            >
              <div className="mb-5 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
