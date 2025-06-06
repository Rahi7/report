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

// Doctor-specific services (UI config only)
export const doctorServices = [
  {
    title: "View Patient Details",
    description:
      "Access comprehensive patient profiles including medical history, prescriptions, and upcoming appointments.",
    icon: FaUserInjured,
    link: "/patient-details",
  },
  {
    title: "AI Health Insights",
    description:
      "Smart AI-generated summaries of prescriptions and health records for easy understanding.",
    icon: FaBrain,
    link: "/ai-insights",
  },
  {
    title: "Patient Report Assistance",
    description:
      "Seamless access to medical reports and support in understanding health data.",
    icon: FaListAlt,
    link: "/report-assistance",
  },
  {
    title: "24x7 Helpdesk",
    description:
      "Our support team is always ready to resolve patient and doctor queries quickly.",
    icon: FaQuestionCircle,
    link: "/helpdesk",
  },
  {
    title: "Smart Notifications",
    description:
      "Get real-time updates for appointments, health reports, and medical activities.",
    icon: FaBell,
    link: "/notifications",
  },
  {
    title: "Prescription Management",
    description: "Track and manage your prescriptions in one place.",
    icon: FaFilePrescription,
    link: "/prescriptions",
  },
  {
    title: "Doctor-Patient Communication",
    description:
      "Direct messaging system between patients and healthcare providers.",
    icon: FaComments,
    link: "/communication",
  },
];

// Patient-specific services (UI config only)
export const patientServices = [
  {
    title: "Medical History Tracking",
    description:
      "Comprehensive tracking of your medical history and treatments.",
    icon: FaNotesMedical,
    link: "/medical-history",
  },
  {
    title: "Appointment Scheduling",
    description:
      "Book and manage appointments with healthcare providers easily.",
    icon: FaCalendarAlt,
    link: "/appointments",
  },
  {
    title: "Patient Report Assistance",
    description:
      "Seamless access to medical reports and support in understanding health data.",
    icon: FaListAlt,
    link: "/report-assistance",
  },
 
  {
    title: "Smart Notifications",
    description:
      "Get real-time updates for appointments, health reports, and medical activities.",
    icon: FaBell,
    link: "/notifications",
  },
  {
    title: "Prescription Management",
    description: "Track and manage your prescriptions in one place.",
    icon: FaFilePrescription,
    link: "/prescriptions",
  },
  {
    title: "Doctor-Patient Communication",
    description:
      "Direct messaging system between patients and healthcare providers.",
    icon: FaComments,
    link: "/communication",
  },
  {
    title: "AI Health Insights",
    description:
      "Smart AI-generated summaries of prescriptions and health records for easy understanding.",
    icon: FaBrain,
    link: "/ai-insights",
  },
];
