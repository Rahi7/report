import { Navigate } from 'react-router-dom';
import { usePatientStore } from '../store/patient.store';
import { useDoctorStore } from '../store/doctor.store';

const PublicRoute = ({ children }) => {
  const patient = usePatientStore((state) => state.user);
  const doctor = useDoctorStore((state) => state.user);

  // If logged in as doctor, redirect to doctor dashboard
  if (doctor) {
    return <Navigate to="/doctordashboard" replace />;
  }

  // If logged in as patient, redirect to patient dashboard
  if (patient) {
    return <Navigate to="/patientdashboard" replace />;
  }

  // Not logged in — allow access to public pages
  return children;
};

export default PublicRoute;
