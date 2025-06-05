import React from 'react'
import { Link } from 'react-router-dom'

function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Patient Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard. Here you can manage your appointments, prescriptions, and profile.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          to="/patient/appointments"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          <p>View and schedule your appointments.</p>
        </Link>

        <Link 
          to="/patient/prescriptions"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Prescriptions</h2>
          <p>Access your medical prescriptions securely.</p>
        </Link>

        <Link 
          to="/patient/profile"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p>Update your personal information and preferences.</p>
        </Link>
      </main>
    </div>
  )
}

export default PatientDashboard
