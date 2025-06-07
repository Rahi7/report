import React, { useState } from "react";

function DoctorPrescriptions() {
  const [form, setForm] = useState({
    patientId: "",
    symptoms: "",
    diagnosis: "",
    notes: "",
    medications: [{ name: "", dosage: "", frequency: "", duration: "" }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMedicationChange = (index, field, value) => {
    const updatedMeds = [...form.medications];
    updatedMeds[index][field] = value;
    setForm((prev) => ({
      ...prev,
      medications: updatedMeds,
    }));
  };

  const addMedication = () => {
    setForm((prev) => ({
      ...prev,
      medications: [
        ...prev.medications,
        { name: "", dosage: "", frequency: "", duration: "" },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Prescription:", form);

    // Future: Send form to backend API using fetch/axios
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">
        Create New Prescription
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">
            Patient Wallet Address
          </label>
          <input
            type="text"
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Symptoms</label>
          <textarea
            name="symptoms"
            value={form.symptoms}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Diagnosis</label>
          <input
            type="text"
            name="diagnosis"
            value={form.diagnosis}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Medications</label>
          {form.medications.map((med, index) => (
            <div
              key={index}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4"
            >
              <input
                type="text"
                placeholder="Medicine Name"
                value={med.name}
                onChange={(e) =>
                  handleMedicationChange(index, "name", e.target.value)
                }
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Dosage"
                value={med.dosage}
                onChange={(e) =>
                  handleMedicationChange(index, "dosage", e.target.value)
                }
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Frequency"
                value={med.frequency}
                onChange={(e) =>
                  handleMedicationChange(index, "frequency", e.target.value)
                }
                className="border px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Duration"
                value={med.duration}
                onChange={(e) =>
                  handleMedicationChange(index, "duration", e.target.value)
                }
                className="border px-3 py-2 rounded"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addMedication}
            className="text-blue-600 font-semibold hover:underline"
          >
            + Add another medication
          </button>
        </div>

        <div>
          <label className="block mb-1 font-medium">Additional Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="2"
          />
        </div>
        {/* Upload Section */}
        <div>
          <label className="block mb-1 font-medium">
            Upload Prescription Image/PDF
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                alert(`Selected file: ${file.name}`);
              }
            }}
            className="w-full border border-gray-300 rounded px-3 py-2 file:bg-blue-100 file:border-0 file:px-4 file:py-2 file:rounded file:text-blue-700 file:font-semibold hover:file:bg-blue-200"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Prescription
        </button>
      </form>
    </div>
  );
}

export default DoctorPrescriptions;
