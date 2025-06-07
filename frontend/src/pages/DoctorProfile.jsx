import React from "react";
import { useDoctorStore } from "../store/doctor.store"; // Adjust path if needed

function DoctorProfile() {
  // Fetch logged-in doctor user from global state/store
  const doctorUser = useDoctorStore((state) => state.user);

  if (!doctorUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <p className="text-red-600 text-lg font-semibold">
          No profile data found. Please log in.
        </p>
      </div>
    );
  }

  // Dummy data placeholders except name/email from store
  const doctorData = {
    name: doctorUser.name || doctorUser.fullName || "Dr. Unknown",
    specialization: "Cardiology", // Replace with backend data later
    email: doctorUser.email || "doctor@example.com",
    phone: "+1 (555) 123-4567",
    experience: "15 years",
    clinicAddress: "123 Medical St, Health City, 98765",
    bio: "Experienced cardiologist dedicated to providing high-quality care and personalized treatment plans.",
    profileImage:
      "https://images.unsplash.com/photo-1580281658623-65b6a7936187?auto=format&fit=crop&w=256&q=80", // Hospital-style doctor image placeholder
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6 sm:px-12 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-blue-200 p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
          <img
            src={doctorData.profileImage}
            alt={`${doctorData.name} profile`}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-md"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-1">
              {doctorData.name}
            </h1>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {doctorData.specialization}
            </h2>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Experience:</span>{" "}
              {doctorData.experience}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Clinic Address:</span>{" "}
              {doctorData.clinicAddress}
            </p>
          </div>
        </div>

        <section className="mt-10 border-t border-blue-200 pt-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
            <div>
              <p className="font-semibold text-blue-600">Email</p>
              <p>{doctorData.email}</p>
            </div>
            <div>
              <p className="font-semibold text-blue-600">Phone</p>
              <p>{doctorData.phone}</p>
            </div>
          </div>
        </section>

        <section className="mt-10 border-t border-blue-200 pt-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">About Me</h3>
          <p className="text-gray-800 leading-relaxed">{doctorData.bio}</p>
        </section>
      </div>
    </div>
  );
}

export default DoctorProfile;
