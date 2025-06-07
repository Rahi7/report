import React from "react";
import { Link } from "react-router-dom";

function DoctorDashboard() {
  const stats = {
    totalPatients: 120, // Placeholder: fetch real data from your contract
    pendingPrescriptions: 3, // Placeholder: fetch real data from your contract
  };

  // SVG icons, no dependencies, inline
  const icons = {
    patients: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m0 0a4 4 0 110-8 4 4 0 010 8z"
        />
      </svg>
    ),
    prescriptions: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v8m-4-4h8m-2 10h4a2 2 0 002-2v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2z"
        />
      </svg>
    ),
    profile: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10 font-sans text-gray-900">
      {/* Header */}
      <header className="mb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-3 tracking-wide">
          Doctor's Dashboard
        </h1>
        <p className="text-lg text-blue-600 max-w-xl mx-auto">
          Manage your patients, prescriptions, and profile with ease.
        </p>
      </header>

      {/* Stats summary */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-7 flex items-center space-x-6 hover:shadow-xl transition-shadow duration-300">
          {icons.patients}
          <div>
            <p className="uppercase text-sm text-blue-400 font-semibold tracking-wide">
              Total Patients
            </p>
            <p className="text-4xl font-bold text-blue-700">
              {stats.totalPatients}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-blue-200 p-7 flex items-center space-x-6 hover:shadow-xl transition-shadow duration-300">
          {icons.prescriptions}
          <div>
            <p className="uppercase text-sm text-blue-400 font-semibold tracking-wide">
              Pending Prescriptions
            </p>
            <p className="text-4xl font-bold text-blue-700">
              {stats.pendingPrescriptions}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation panels */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <Link
          to="/doctor/patients"
          className="bg-white rounded-xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-lg transition flex flex-col items-center justify-center py-8 space-y-4 cursor-pointer"
        >
          {icons.patients}
          <h3 className="text-2xl font-semibold text-blue-700">Patients</h3>
          <p className="text-blue-500 text-center max-w-xs">
            Access detailed patient records and histories.
          </p>
        </Link>

        <Link
          to="/doctor/prescriptions"
          className="bg-white rounded-xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-lg transition flex flex-col items-center justify-center py-8 space-y-4 cursor-pointer"
        >
          {icons.prescriptions}
          <h3 className="text-2xl font-semibold text-blue-700">
            Prescriptions
          </h3>
          <p className="text-blue-500 text-center max-w-xs">
            Manage patient prescriptions efficiently.
          </p>
        </Link>

        <Link
          to="/doctor/profile"
          className="bg-white rounded-xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-lg transition flex flex-col items-center justify-center py-8 space-y-4 cursor-pointer"
        >
          {icons.profile}
          <h3 className="text-2xl font-semibold text-blue-700">Profile</h3>
          <p className="text-blue-500 text-center max-w-xs">
            View and update your professional details and contact info.
          </p>
        </Link>
      </section>
    </div>
  );
}

export default DoctorDashboard;
