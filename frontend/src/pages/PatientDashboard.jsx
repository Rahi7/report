import React from "react";
import { Link } from "react-router-dom";

function PatientDashboard() {
  const icons = {
    prescriptions: (
      <svg
        className="w-10 h-10 text-blue-600 mb-3 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v8m-4-4h8m2 10h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2z"
        />
      </svg>
    ),
    appointments: (
      <svg
        className="w-10 h-10 text-blue-600 mb-3 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10m-12 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
        />
      </svg>
    ),
    profile: (
      <svg
        className="w-10 h-10 text-blue-600 mb-3 mx-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"
        />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-10 font-sans text-gray-900">
      {/* Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-2">
          Welcome, Patient
        </h1>
        <p className="text-lg text-blue-600">
          Manage your health records, prescriptions, and appointments.
        </p>
      </header>

      {/* Feature Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link
          to="/patient/prescriptions"
          className="bg-white rounded-xl p-8 shadow-md border border-transparent hover:shadow-xl hover:border-blue-400 transition text-center"
        >
          {icons.prescriptions}
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Prescriptions
          </h2>
          <p className="text-blue-500">
            View prescribed medicines and treatment history.
          </p>
        </Link>

        <Link
          to="/patient/appointments"
          className="bg-white rounded-xl p-8 shadow-md border border-transparent hover:shadow-xl hover:border-blue-400 transition text-center"
        >
          {icons.appointments}
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Appointments
          </h2>
          <p className="text-blue-500">Book or review doctor appointments.</p>
        </Link>

        <Link
          to="/patient/profile"
          className="bg-white rounded-xl p-8 shadow-md border border-transparent hover:shadow-xl hover:border-blue-400 transition text-center"
        >
          {icons.profile}
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Profile</h2>
          <p className="text-blue-500">
            Manage your personal information and contact details.
          </p>
        </Link>
      </main>
    </div>
  );
}

export default PatientDashboard;
