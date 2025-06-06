import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DoctorRegister from './pages/DoctorRegister'
import PatientRegister from './pages/PatientRegister'
import ContactUs from './pages/Contact_us'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import ForgotPassword from './pages/ForgotPassword'
import Notifications from './pages/Notification'
import History from './pages/History'
import PatientDashboard from './pages/PatientDashboard'
import DoctorDashboard from './pages/DoctorDashboard'
import ServiceDetails from './pages/ServiceDetails' // ✅ Import service detail page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
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
        {/* ✅ Dynamic service detail route */}
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

        {/* Placeholder for other protected routes */}
        <Route element={<ProtectedRoute />}>
          {/* Add future protected routes here if needed */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App
