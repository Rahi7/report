import { Navigate, useLocation } from 'react-router-dom';
import { usePatientStore } from '../store/patient.store';
import { useDoctorStore } from '../store/doctor.store';

const ProtectedRoute = ({ children }) => {
  const patient = usePatientStore((state) => state.user);
  const doctor = useDoctorStore((state) => state.user);
  const isAuthenticated = Boolean(patient || doctor);
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/register" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
