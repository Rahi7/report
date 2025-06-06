import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctorServices, patientServices } from "../config/services.config";
import { serviceDataMap } from "../config/serviceData"; // Import your data map here
import { useDoctorStore } from "../store/doctor.store";
import { usePatientStore } from "../store/patient.store";

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const doctor = useDoctorStore((state) => state.user);
  const patient = usePatientStore((state) => state.user);

  const allServices = [...doctorServices, ...patientServices];
  const service = allServices.find((s) => s.link.replace("/", "") === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <button
          onClick={() => navigate("/services")}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const Icon = service.icon;
  const data = serviceDataMap[slug]; // get corresponding data from map

  // Renders patient profile data for 'patient-details'
  const renderPatientDetails = () => {
    if (!data) return <p>{service.description}</p>;

    return (
      <div className="text-left text-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Patient Profile</h2>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Gender:</strong> {data.gender}</p>

        <h3 className="mt-6 text-xl font-semibold">Medical History</h3>
        <ul className="list-disc ml-6">
          {data.medicalHistory.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Upcoming Appointments</h3>
        <ul className="list-disc ml-6">
          {data.upcomingAppointments.map((appt, idx) => (
            <li key={idx}>
              {appt.date} - {appt.description}
            </li>
          ))}
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Prescriptions</h3>
        <ul className="list-disc ml-6">
          {data.prescriptions.map((presc, idx) => (
            <li key={idx}>
              {presc.medicine} — {presc.dosage}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Render AI Insights content for 'ai-insights'
  const renderAIInsights = () => {
    if (!data) return <p>{service.description}</p>;

    return (
      <div className="text-left text-lg max-w-xl mx-auto">
        <h3 className="text-xl font-semibold mb-2">AI Summary</h3>
        <p className="mb-4">{data.summary}</p>

        <h3 className="text-xl font-semibold mb-2">Risk Factors</h3>
        <ul className="list-disc ml-6 mb-4">
          {data.riskFactors.map((risk, idx) => (
            <li key={idx}>{risk}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Recommendations</h3>
        <ul className="list-disc ml-6 mb-4">
          {data.recommendations.map((rec, idx) => (
            <li key={idx}>{rec}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Notes</h3>
        <p>{data.notes}</p>
      </div>
    );
  };

  // Render prescriptions list for 'prescriptions'
  const renderPrescriptions = () => {
    if (!data) return <p>{service.description}</p>;

    return (
      <div className="text-left text-lg max-w-xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Prescriptions</h3>
        <ul className="list-disc ml-6">
          {data.prescriptions.map((presc, idx) => (
            <li key={idx}>
              <strong>{presc.medicine}</strong> — {presc.dosage}
              {presc.notes && <em> ({presc.notes})</em>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Render communication messages for 'communication'
  const renderCommunication = () => {
    if (!data) return <p>{service.description}</p>;

    return (
      <div className="text-left text-lg max-w-xl mx-auto">
        <h3 className="text-xl font-semibold mb-4">Messages</h3>
        <ul className="list-disc ml-6">
          {data.messages.map((msg, idx) => (
            <li key={idx}>
              <strong>{msg.from}:</strong> {msg.text} <em>({msg.date})</em>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Fallback render for services without extra data
  const renderDefault = () => <p className="text-lg leading-relaxed">{service.description}</p>;

  // Switch rendering based on slug (service link)
  const renderCustomContent = () => {
    switch (slug) {
      case "patient-details":
        return renderPatientDetails();

      case "ai-insights":
        return renderAIInsights();

      case "prescriptions":
        return renderPrescriptions();

      case "communication":
        return renderCommunication();

      default:
        return renderDefault();
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-8 text-center">
      <button
        onClick={() => navigate("/services")}
        className="mb-8 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        ← Back to Services
      </button>
      <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-3xl p-10 shadow-lg max-w-3xl">
        <div className="mb-6 flex justify-center">
          <Icon size={60} />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">{service.title}</h1>
        {renderCustomContent()}
      </div>
    </div>
  );
};

export default ServiceDetails;
