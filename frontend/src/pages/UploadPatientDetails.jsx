import { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const patientSchema = Yup.object().shape({
  patientId: Yup.string().required('Patient ID is required'),
  visitDateTime: Yup.date().required('Visit DateTime is required'),
  checkupDetails: Yup.object().shape({
    chiefComplaint: Yup.string().required('Chief complaint is required'),
    symptoms: Yup.array().of(Yup.string()),
    observations: Yup.string(),
    diagnosis: Yup.string(),
    treatmentPlan: Yup.string(),
    vitalSigns: Yup.object().shape({
      bloodPressure: Yup.string(),
      heartRate: Yup.number().integer(),
      temperature: Yup.number(),
      respiratoryRate: Yup.number().integer(),
      oxygenSaturation: Yup.number(),
    }),
  }),
  documents: Yup.array().of(
    Yup.object().shape({
      documentName: Yup.string().required('Document name is required'),
      documentType: Yup.string().required('Document type is required'),
      file: Yup.mixed().required('File is required')
    })
  )
});

function UploadPatientDetails() {
  const handleSubmit = (values) => {
    values.uploadDateTime = new Date().toISOString();
    toast.success('Patient details uploaded successfully!');
    console.log(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-purple-700">Upload Patient Details & Documents</h2>
        <Formik initialValues={{ patientId: '', visitDateTime: '', checkupDetails: {}, documents: [] }} validationSchema={patientSchema} onSubmit={handleSubmit}>
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-6">
              <div className="mb-4">
                <label className="block font-semibold mb-1">Patient ID:</label>
                <Field name="patientId" className="w-full p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" />
              </div>

              <div className="mb-4">
                <label className="block font-semibold mb-1">Visit DateTime:</label>
                <Field name="visitDateTime" type="datetime-local" className="w-full p-3 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500" />
              </div>

              <FieldArray name="documents">
                {({ push, remove }) => (
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">Documents</h3>
                    {values.documents.map((_, index) => (
                      <div key={index} className="flex gap-4 mb-3 items-center">
                        <Field name={`documents.${index}.documentName`} placeholder="Document Name" className="p-3 border rounded-lg flex-1" />
                        <Field name={`documents.${index}.documentType`} placeholder="Document Type" className="p-3 border rounded-lg flex-1" />
                        <input type="file" onChange={(e) => setFieldValue(`documents.${index}.file`, e.target.files[0])} className="p-3 border rounded-lg" />
                        <button type="button" onClick={() => remove(index)} className="text-red-500 hover:text-red-700">Remove</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => push({ documentName: '', documentType: '', file: null })} className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">+ Add Document</button>
                  </div>
                )}
              </FieldArray>

              <button type="submit" className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition" disabled={isSubmitting}>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default UploadPatientDetails;
