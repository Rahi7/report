import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DoctorRegister from './pages/DoctorRegister'
import PatientRegister from './pages/PatientRegister'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="doctor-register" element={<DoctorRegister />} />
        <Route path="patient-register" element={<PatientRegister />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          {/* Add protected routes here */}
        </Route>
      </Route>
    </Routes>
  )
}

export default App