// import React from "react";
// import { useDoctorStore } from "../store/doctor.store"; // Adjust path if needed

// function DoctorProfile() {
//   // Fetch logged-in doctor user from global state/store
//   const doctorUser = useDoctorStore((state) => state.user);

//   if (!doctorUser) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-blue-50">
//         <p className="text-red-600 text-lg font-semibold">
//           No profile data found. Please log in.
//         </p>
//       </div>
//     );
//   }

//   // Dummy data placeholders except name/email from store
//   const doctorData = {
//     name: doctorUser.name || doctorUser.fullName || "Dr. Unknown",
//     specialization: "Cardiology", // Replace with backend data later
//     email: doctorUser.email || "doctor@example.com",
//     phone: "+1 (555) 123-4567",
//     experience: "15 years",
//     clinicAddress: "123 Medical St, Health City, 98765",
//     bio: "Experienced cardiologist dedicated to providing high-quality care and personalized treatment plans.",
//     profileImage:
//       "https://images.unsplash.com/photo-1580281658623-65b6a7936187?auto=format&fit=crop&w=256&q=80", // Hospital-style doctor image placeholder
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-6 sm:px-12 font-sans text-gray-900">
//       <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-blue-200 p-10">
//         <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
//           <img
//             src={doctorData.profileImage}
//             alt={`${doctorData.name} profile`}
//             className="w-32 h-32 rounded-full object-cover border-4 border-blue-600 shadow-md"
//           />
//           <div className="flex-1">
//             <h1 className="text-4xl font-extrabold text-blue-800 mb-1">
//               {doctorData.name}
//             </h1>
//             <h2 className="text-xl font-semibold text-blue-600 mb-3">
//               {doctorData.specialization}
//             </h2>
//             <p className="text-gray-700 mb-2">
//               <span className="font-semibold">Experience:</span>{" "}
//               {doctorData.experience}
//             </p>
//             <p className="text-gray-700 mb-2">
//               <span className="font-semibold">Clinic Address:</span>{" "}
//               {doctorData.clinicAddress}
//             </p>
//           </div>
//         </div>

//         <section className="mt-10 border-t border-blue-200 pt-8">
//           <h3 className="text-2xl font-bold text-blue-700 mb-4">
//             Contact Information
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800">
//             <div>
//               <p className="font-semibold text-blue-600">Email</p>
//               <p>{doctorData.email}</p>
//             </div>
//             <div>
//               <p className="font-semibold text-blue-600">Phone</p>
//               <p>{doctorData.phone}</p>
//             </div>
//           </div>
//         </section>

//         <section className="mt-10 border-t border-blue-200 pt-8">
//           <h3 className="text-2xl font-bold text-blue-700 mb-4">About Me</h3>
//           <p className="text-gray-800 leading-relaxed">{doctorData.bio}</p>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default DoctorProfile;
import React, { useEffect, useState } from "react";
import { useDoctorStore } from "../store/doctor.store";

function DoctorProfile() {
  const {
    user: doctorUser,
    loading,
    error,
    fetchProfile,
  } = useDoctorStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    phoneNumber: "",
    licenseNumber: "",
  });
  const [editing, setEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const result = await fetchProfile();
      if (result.success) {
        setFormData({
          name: doctorUser?.name || "",
          email: doctorUser?.email || "",
          specialization: doctorUser?.Specialization || "",
          phoneNumber: doctorUser?.phoneNumber || "",
          licenseNumber: doctorUser?.licenseNumber || "",
        });
      }
    };
    loadProfile();
  }, [fetchProfile]);

  useEffect(() => {
    if (doctorUser) {
      setFormData({
        name: doctorUser.name || "",
        email: doctorUser.email || "",
        specialization: doctorUser.Specialization || "",
        phoneNumber: doctorUser.phoneNumber || "",
        licenseNumber: doctorUser.licenseNumber || "",
      });
    }
  }, [doctorUser]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditToggle = () => {
    setEditing((prev) => !prev);
    setSuccessMessage(null);
    if (editing && doctorUser) {
      setFormData({
        name: doctorUser.name || "",
        email: doctorUser.email || "",
        specialization: doctorUser.Specialization || "",
        phoneNumber: doctorUser.phoneNumber || "",
        licenseNumber: doctorUser.licenseNumber || "",
      });
    }
  };

  const handleSave = async () => {
    setSuccessMessage(null);
    try {
      const res = await fetch("/api/v1/doctors/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to update profile");
      }

      useDoctorStore.setState({ user: data.data });
      setEditing(false);
      setSuccessMessage("Profile updated successfully.");
    } catch (err) {
      alert(err.message || "Error updating profile");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (!doctorUser) return <p className="text-center mt-10">No profile found.</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10 font-sans">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Doctor Profile
      </h2>

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label className="block font-semibold text-blue-600 mb-1" htmlFor="name">
            Name
          </label>
          {editing ? (
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-blue-500"
            />
          ) : (
            <p className="text-gray-700">{doctorUser.name || "-"}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold text-blue-600 mb-1" htmlFor="email">
            Email
          </label>
          {editing ? (
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              disabled
              className="w-full border border-blue-300 rounded px-4 py-2 bg-gray-100"
            />
          ) : (
            <p className="text-gray-700">{doctorUser.email || "-"}</p>
          )}
        </div>

        {/* Specialization */}
        <div>
          <label className="block font-semibold text-blue-600 mb-1" htmlFor="specialization">
            Specialization
          </label>
          {editing ? (
            <input
              id="specialization"
              name="specialization"
              type="text"
              value={formData.specialization}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-blue-500"
            />
          ) : (
            <p className="text-gray-700">{doctorUser.Specialization || "-"}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-semibold text-blue-600 mb-1" htmlFor="phoneNumber">
            Phone Number
          </label>
          {editing ? (
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-blue-500"
            />
          ) : (
            <p className="text-gray-700">{doctorUser.phoneNumber || "-"}</p>
          )}
        </div>

        {/* License Number */}
        <div>
          <label className="block font-semibold text-blue-600 mb-1" htmlFor="licenseNumber">
            License Number
          </label>
          {editing ? (
            <input
              id="licenseNumber"
              name="licenseNumber"
              type="text"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="w-full border border-blue-300 rounded px-4 py-2 focus:outline-blue-500"
            />
          ) : (
            <p className="text-gray-700">{doctorUser.licenseNumber || "-"}</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-6">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleEditToggle}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        )}
      </div>

      {successMessage && (
        <p className="mt-6 text-center text-green-600 font-semibold">{successMessage}</p>
      )}
    </div>
  );
}

export default DoctorProfile;
