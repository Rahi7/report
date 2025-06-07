import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PatientAppointments() {
  const navigate = useNavigate();

  // Sample appointment data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "2025-06-15",
      time: "10:00 AM",
      doctor: "Dr. John Smith",
      department: "Cardiology",
      status: "Confirmed",
    },
    {
      id: 2,
      date: "2025-07-02",
      time: "2:30 PM",
      doctor: "Dr. Jane Doe",
      department: "Dermatology",
      status: "Pending",
    },
  ]);

  // Cancel appointment handler
  const cancelAppointment = (id) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white p-12 font-sans text-slate-900 max-w-4xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-teal-700 mb-3 tracking-wide">
          Your Appointments
        </h1>
        <p className="text-teal-600 max-w-xl mx-auto text-lg">
          Manage your upcoming medical appointments with ease.
        </p>
      </header>

      {/* Back Button */}
      <div className="mb-10">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded bg-teal-300 text-teal-900 hover:bg-teal-400 transition"
          aria-label="Go back to previous page"
        >
          ← Back
        </button>
      </div>

      {/* Appointments List */}
      {appointments.length === 0 ? (
        <p className="text-center text-gray-500 italic">
          No upcoming appointments.
        </p>
      ) : (
        <ul className="space-y-8">
          {appointments.map((appt) => (
            <li
              key={appt.id}
              className="bg-white rounded-3xl shadow-xl border border-teal-200 p-6 flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <p className="text-teal-700 font-semibold text-lg mb-1">
                  {appt.doctor} —{" "}
                  <span className="text-teal-500">{appt.department}</span>
                </p>
                <p className="text-slate-700 text-base mb-1">
                  📅 Date: <span className="font-medium">{appt.date}</span>
                </p>
                <p className="text-slate-700 text-base mb-1">
                  ⏰ Time: <span className="font-medium">{appt.time}</span>
                </p>
                <p
                  className={`mt-1 font-semibold ${
                    appt.status === "Confirmed"
                      ? "text-green-600"
                      : appt.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  Status: {appt.status}
                </p>
              </div>

              <div className="mt-4 md:mt-0 flex space-x-4">
                <button
                  onClick={() => cancelAppointment(appt.id)}
                  className="px-5 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                  aria-label={`Cancel appointment on ${appt.date} at ${appt.time}`}
                >
                  Cancel
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* New Appointment Button */}
      <div className="mt-16 text-center">
        <button
          onClick={() => alert("Booking functionality coming soon!")}
          className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-xl shadow hover:bg-teal-700 transition"
          aria-label="Book a new appointment"
        >
          + Book New Appointment
        </button>
      </div>
    </div>
  );
}

export default PatientAppointments;
