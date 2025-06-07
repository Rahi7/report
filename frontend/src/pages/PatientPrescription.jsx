import React from "react";
import { jsPDF } from "jspdf";
import { useNavigate } from "react-router-dom";

function PatientPrescription() {
  const navigate = useNavigate();

  const prescriptions = [
    {
      id: 1,
      date: "2025-05-25",
      doctor: "Dr. John Smith",
      medicines: [
        {
          name: "Amoxicillin",
          dosage: "500mg",
          instructions: "3 times a day after meals",
        },
        {
          name: "Paracetamol",
          dosage: "650mg",
          instructions: "2 tablets every 6 hours as needed",
        },
      ],
      notes: "Take medicines with plenty of water.",
    },
    {
      id: 2,
      date: "2025-06-01",
      doctor: "Dr. Jane Doe",
      medicines: [
        {
          name: "Ibuprofen",
          dosage: "400mg",
          instructions: "Twice daily for 5 days",
        },
      ],
      notes: "Avoid driving after taking medicine.",
    },
  ];

  const downloadPDF = (prescription) => {
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();

    // Header: Clinic/Hospital Name
    doc.setFontSize(22);
    doc.setTextColor("#0D9488"); // teal color
    doc.setFont("helvetica", "bold");
    doc.text("Green Valley Medical Center", pageWidth / 2, 50, {
      align: "center",
    });

    // Subtitle / tagline
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#2d3748");
    doc.text("Quality Care, Compassionate Service", pageWidth / 2, 70, {
      align: "center",
    });

    // Horizontal line under header
    doc.setDrawColor("#0D9488");
    doc.setLineWidth(1);
    doc.line(40, 80, pageWidth - 40, 80);

    // Prescription Title
    doc.setFontSize(18);
    doc.setTextColor("#0D9488");
    doc.setFont("helvetica", "bold");
    doc.text("Medical Prescription", pageWidth / 2, 110, { align: "center" });

    // Patient & Prescription Info
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#334155");

    doc.text(`Date: ${prescription.date}`, 50, 140);
    doc.text(`Prescribed by: ${prescription.doctor}`, 50, 160);

    // Medicines Title
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#0D9488");
    doc.text("Medicines:", 50, 190);

    // Medicine List
    let y = 210;
    const lineHeight = 18;
    prescription.medicines.forEach((med, index) => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const medText = `${index + 1}. ${med.name} - ${med.dosage}`;
      const instructionsText = `Instructions: ${med.instructions}`;

      doc.text(medText, 60, y);
      y += lineHeight;

      // Wrap instructions text if long
      const splitInstructions = doc.splitTextToSize(
        instructionsText,
        pageWidth - 100
      );
      doc.text(splitInstructions, 70, y);
      y += lineHeight * splitInstructions.length + 5;
    });

    // Notes Section
    if (prescription.notes) {
      doc.setFont("helvetica", "bolditalic");
      doc.setTextColor("#0D9488");
      doc.text("Notes:", 50, y + 10);
      doc.setFont("helvetica", "italic");
      doc.setTextColor("#475569");
      const splitNotes = doc.splitTextToSize(
        prescription.notes,
        pageWidth - 100
      );
      doc.text(splitNotes, 60, y + 30);
      y += lineHeight * splitNotes.length + 20;
    }

    // Footer line
    doc.setDrawColor("#0D9488");
    doc.setLineWidth(0.5);
    doc.line(40, 770, pageWidth - 40, 770);

    // Footer text (contact info)
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#64748b");
    doc.text(
      "Green Valley Medical Center | 123 Wellness Ave, Healthy City | Phone: (555) 123-4567 | Email: contact@greenvalleymed.com",
      pageWidth / 2,
      790,
      { align: "center" }
    );

    // Digital signature (simple text)
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#0D9488");
    doc.text("Dr. Signature:", 50, 720);
    doc.setLineWidth(1);
    doc.line(130, 715, 250, 715); // Signature line

    doc.save(`Prescription_${prescription.date}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white p-12 font-sans text-slate-900 max-w-4xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-teal-700 mb-3 tracking-wide">
          Your Prescriptions
        </h1>
        <p className="text-teal-600 max-w-xl mx-auto text-lg">
          Easily review your prescription history and medication instructions.
        </p>
      </header>

      {/* Back Button */}
      <div className="mb-10">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 rounded bg-teal-300 text-teal-900 hover:bg-teal-400 transition"
          aria-label="Go back to previous page"
        >
          ← Back
        </button>
      </div>

      <section className="space-y-12">
        {prescriptions.length === 0 ? (
          <p className="text-center text-gray-500 italic">
            No prescriptions found.
          </p>
        ) : (
          prescriptions.map((prescription) => (
            <article
              key={prescription.id}
              className="bg-white rounded-3xl shadow-xl border border-teal-200 p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-teal-100 pb-6">
                <div className="flex items-center space-x-3 text-teal-700 font-semibold text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-7H3v7a2 2 0 002 2z"
                    />
                  </svg>
                  <p>
                    <span className="block font-medium">Date</span>
                    <span className="text-slate-600 text-base">
                      {prescription.date}
                    </span>
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-teal-700 font-semibold text-lg mt-4 md:mt-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-teal-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                    />
                  </svg>
                  <p>
                    <span className="block font-medium">Prescribed by</span>
                    <span className="text-slate-600 text-base">
                      {prescription.doctor}
                    </span>
                  </p>
                </div>
              </div>

              {/* Medicine Table */}
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-teal-300">
                    <th className="py-4 px-5 text-teal-700 text-lg font-semibold">
                      Medicine
                    </th>
                    <th className="py-4 px-5 text-teal-700 text-lg font-semibold">
                      Dosage
                    </th>
                    <th className="py-4 px-5 text-teal-700 text-lg font-semibold">
                      Instructions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prescription.medicines.map((med, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? "bg-teal-50" : "bg-white"}
                    >
                      <td className="py-3 px-5 font-medium flex items-center space-x-2 text-teal-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-teal-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-3-3v6m-6 4h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a2 2 0 002 2z"
                          />
                        </svg>
                        <span>{med.name}</span>
                      </td>
                      <td className="py-3 px-5">{med.dosage}</td>
                      <td className="py-3 px-5">{med.instructions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Notes */}
              {prescription.notes && (
                <p className="mt-7 text-teal-700 italic text-base font-medium">
                  🍃 Notes: {prescription.notes}
                </p>
              )}

              {/* Download Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => downloadPDF(prescription)}
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition"
                  aria-label={`Download prescription dated ${prescription.date}`}
                >
                  Download PDF
                </button>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}

export default PatientPrescription;
