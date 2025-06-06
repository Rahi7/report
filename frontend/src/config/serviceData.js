export const serviceDataMap = {
  "patient-details": {
    name: "John Doe",
    age: 35,
    gender: "Male",
    medicalHistory: ["Hypertension", "Allergy: Penicillin"],
    upcomingAppointments: [
      { date: "2025-07-15", description: "General Checkup" },
      { date: "2025-08-01", description: "Blood Test" },
    ],
    prescriptions: [
      { medicine: "Lisinopril", dosage: "10mg daily" },
      { medicine: "Cetirizine", dosage: "5mg as needed" },
    ],
  },

  "ai-insights": {
    summary:
      "This patient has a history of hypertension and mild allergies. Prescriptions indicate management of blood pressure and seasonal allergies. Upcoming appointments suggest regular health monitoring.",
    riskFactors: ["Hypertension", "Allergy to Penicillin"],
    recommendations: [
      "Continue current medication regimen",
      "Monitor blood pressure weekly",
      "Schedule follow-up in 1 month",
    ],
    notes:
      "AI recommends evaluating possible side effects of Lisinopril based on reported dizziness during last consultation.",
  },

  "prescriptions": {
    prescriptions: [
      { medicine: "Lisinopril", dosage: "10mg daily", notes: "Monitor BP weekly" },
      { medicine: "Cetirizine", dosage: "5mg as needed", notes: "For allergies" },
    ],
  },

  "communication": {
    messages: [
      {
        from: "Doctor",
        text: "Please update me on your latest symptoms.",
        date: "2025-06-01",
      },
      {
        from: "Patient",
        text: "Feeling better, but slight dizziness persists.",
        date: "2025-06-02",
      },
    ],
  },

  "report-assistance": {
    reports: [
      {
        id: "RPT-001",
        title: "Blood Test Report",
        date: "2025-05-15",
        summary: "Normal blood count. Slightly elevated cholesterol levels.",
      },
      {
        id: "RPT-002",
        title: "X-Ray Chest",
        date: "2025-04-20",
        summary: "No abnormalities detected.",
      },
    ],
    helpText: "Use this section to view and understand medical reports.",
  },

  "helpdesk": {
    contactInfo: {
      phone: "+1-800-HEALTH",
      email: "support@healthapp.com",
      hours: "24x7 Support Available",
    },
    faq: [
      { question: "How to reset password?", answer: "Use 'Forgot Password' link on login." },
      { question: "How to book an appointment?", answer: "Use the Appointment Scheduling service." },
    ],
  },

  "notifications": {
    notifications: [
      { id: 1, message: "Appointment with Dr. Smith on 2025-07-15", date: "2025-06-05" },
      { id: 2, message: "New lab report uploaded.", date: "2025-06-04" },
    ],
  },

  // Add more detailed data as you want:
  // Example for a service with simple description only, no extra data:
  "smart-notifications": {
    description: "Get real-time updates for appointments, health reports, and medical activities."
  },

  "doctor-patient-communication": {
    messages: [
      {
        from: "Doctor",
        text: "Please update me on your symptoms.",
        date: "2025-06-01",
      },
      {
        from: "Patient",
        text: "I'm feeling better today.",
        date: "2025-06-02",
      },
    ],
  },
};
