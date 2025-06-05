import React from 'react'
import { Link } from 'react-router-dom'

function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Doctor Dashboard</h1>
        <p className="text-gray-600">Manage your appointments, patients, and profile details here.</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          to="/doctor/appointments"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          <p>View your upcoming and past appointments.</p>
        </Link>

        <Link 
          to="/doctor/patients"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Patients</h2>
          <p>Access patient records and histories.</p>
        </Link>

        <Link 
          to="/doctor/profile"
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
        >
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p>Update your professional details and contact info.</p>
        </Link>
      </main>
    </div>
  )
}

export default DoctorDashboard
