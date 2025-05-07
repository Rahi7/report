import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ViewPatientDetails() {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Mock data fetch, replace this with your actual API call   /////   API calling for actual data 
    const fetchPatientData = async () => {
      try {
        const mockData = {
          patientId: '12345',
          visitDateTime: '2025-05-07T14:30:00Z',
          uploadDateTime: '2025-05-07T15:00:00Z',
          checkupDetails: {
            chiefComplaint: 'Fever and Cough',
            symptoms: ['Fever', 'Cough', 'Headache'],
            observations: 'Patient appears tired, throat is slightly red.',
            diagnosis: 'Viral Infection',
            treatmentPlan: 'Rest, Hydration, Paracetamol',
            vitalSigns: {
              bloodPressure: '120/80 mmHg',
              heartRate: 80,
              temperature: 38.5,
              respiratoryRate: 18,
              oxygenSaturation: 98,
            },
          },
          documents: [
            { documentName: 'Lab Report', documentType: 'PDF', fileUrl: '/path/to/lab-report.pdf' },
            { documentName: 'Prescription', documentType: 'Image', fileUrl: '/path/to/prescription.jpg' }
          ]
        };

        setPatientData(mockData);
      } catch (error) {
        toast.error('Failed to load patient data.');
      }
    };

    fetchPatientData();
  }, []);

  if (!patientData) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-4">Patient Details</h2>
        <p><strong>Patient ID:</strong> {patientData.patientId}</p>
        <p><strong>Visit DateTime:</strong> {new Date(patientData.visitDateTime).toLocaleString()}</p>
        <p><strong>Upload DateTime:</strong> {new Date(patientData.uploadDateTime).toLocaleString()}</p>

        <h3 className="mt-4 font-bold text-lg">Checkup Details</h3>
        <p><strong>Chief Complaint:</strong> {patientData.checkupDetails.chiefComplaint}</p>
        <p><strong>Symptoms:</strong> {patientData.checkupDetails.symptoms.join(', ')}</p>
        <p><strong>Diagnosis:</strong> {patientData.checkupDetails.diagnosis}</p>

        <h3 className="mt-4 font-bold text-lg">Vital Signs</h3>
        {Object.entries(patientData.checkupDetails.vitalSigns).map(([key, value]) => (
          <p key={key}><strong>{key}:</strong> {value}</p>
        ))}

        <h3 className="mt-4 font-bold text-lg">Documents</h3>
        {patientData.documents.map((doc, index) => (
          <div key={index} className="mt-2">
            <p><strong>{doc.documentName}:</strong> ({doc.documentType})</p>
            {doc.documentType === 'Image' ? (
              <img src={doc.fileUrl} alt={doc.documentName} className="w-32 h-32 object-cover rounded-md mt-2" />
            ) : (
              <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View Document</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewPatientDetails;

