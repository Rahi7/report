import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorRegister from "./pages/DoctorRegister";
import PatientRegister from "./pages/PatientRegister";
import ContactUs from "./pages/Contact_us";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ForgotPassword from "./pages/ForgotPassword";
import Notifications from "./pages/Notification";
import History from "./pages/History";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ServiceDetails from "./pages/ServiceDetails";

import DoctorPrescriptions from "./pages/DoctorPrescriptions";
import PatientPrescription from "./pages/PatientPrescription";
import PatientAppointments from "./pages/PatientAppointments";
import PatientProfile from "./pages/PatientProfile";

// Import the new DoctorProfile component
import DoctorProfile from "./pages/DoctorProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="doctor-register"
          element={
            <PublicRoute>
              <DoctorRegister />
            </PublicRoute>
          }
        />
        <Route
          path="patient-register"
          element={
            <PublicRoute>
              <PatientRegister />
            </PublicRoute>
          }
        />
        <Route path="about" element={<About />} />
        <Route
          path="services"
          element={
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          }
        />
        <Route
          path="services/:slug"
          element={
            <ProtectedRoute>
              <ServiceDetails />
            </ProtectedRoute>
          }
        />
        <Route path="contact" element={<ContactUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="history" element={<History />} />
        <Route path="patientdashboard" element={<PatientDashboard />} />
        <Route path="doctordashboard" element={<DoctorDashboard />} />
        <Route
          path="doctor/prescriptions"
          element={
            <ProtectedRoute>
              <DoctorPrescriptions />
            </ProtectedRoute>
          }
        />
        <Route
          path="patient/prescriptions"
          element={
            <ProtectedRoute>
              <PatientPrescription />
            </ProtectedRoute>
          }
        />
        <Route
          path="patient/appointments"
          element={
            <ProtectedRoute>
              <PatientAppointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="patient/profile"
          element={
            <ProtectedRoute>
              <PatientProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="doctor/profile"
          element={
            <ProtectedRoute>
              <DoctorProfile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
