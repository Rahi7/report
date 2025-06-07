import React, { useState, useEffect } from "react";

function PatientProfile() {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    // Dummy fetch simulation
    const fetchProfile = () => {
      setLoading(true);
      setTimeout(() => {
        const dummyData = {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "+1234567890",
          address: "123 Main St, Springfield",
        };
        setProfile(dummyData);
        setFormData(dummyData);
        setLoading(false);
      }, 1000);
    };

    fetchProfile();

    /*
    // For future backend integration:
    const fetchProfileFromBackend = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/patients/profile");
        setProfile(res.data);
        setFormData({
          name: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          address: res.data.address || "",
        });
        setError(null);
      } catch (err) {
        setError("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };
    */
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditToggle = () => {
    setEditing((prev) => !prev);
    setSuccessMessage(null);
    setError(null);
    if (!editing) {
      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        address: profile.address || "",
      });
    }
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      setProfile(formData);
      setEditing(false);
      setLoading(false);
      setSuccessMessage("Profile updated successfully.");
      setError(null);
    }, 1000);

    /*
    // For future backend integration:
    try {
      const res = await axios.put("/api/patients/profile", formData);
      setProfile(res.data);
      setEditing(false);
      setSuccessMessage("Profile updated successfully.");
      setError(null);
    } catch (err) {
      setError("Failed to update profile.");
    } finally {
      setLoading(false);
    }
    */
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10 font-sans">
      <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">
        Patient Profile
      </h2>

      <div className="space-y-6">
        <div>
          <label
            className="block font-semibold text-teal-600 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          {editing ? (
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded px-4 py-2 focus:outline-teal-500"
            />
          ) : (
            <p className="text-gray-700">{profile.name || "-"}</p>
          )}
        </div>

        <div>
          <label
            className="block font-semibold text-teal-600 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          {editing ? (
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded px-4 py-2 focus:outline-teal-500"
            />
          ) : (
            <p className="text-gray-700">{profile.email || "-"}</p>
          )}
        </div>

        <div>
          <label
            className="block font-semibold text-teal-600 mb-1"
            htmlFor="phone"
          >
            Phone
          </label>
          {editing ? (
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded px-4 py-2 focus:outline-teal-500"
            />
          ) : (
            <p className="text-gray-700">{profile.phone || "-"}</p>
          )}
        </div>

        <div>
          <label
            className="block font-semibold text-teal-600 mb-1"
            htmlFor="address"
          >
            Address
          </label>
          {editing ? (
            <textarea
              id="address"
              name="address"
              rows={3}
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-teal-300 rounded px-4 py-2 focus:outline-teal-500 resize-none"
            />
          ) : (
            <p className="text-gray-700 whitespace-pre-line">
              {profile.address || "-"}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-6">
        {editing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
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
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
          >
            Edit Profile
          </button>
        )}
      </div>

      {successMessage && (
        <p className="mt-6 text-center text-green-600 font-semibold">
          {successMessage}
        </p>
      )}
    </div>
  );
}

export default PatientProfile;
