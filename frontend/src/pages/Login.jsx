
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { Formik, Form, Field } from 'formik'
// import * as Yup from 'yup'
// import { toast } from 'react-toastify'
// import { usePatientStore } from '../store/patient.store'

// const loginSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Required'),
//   password: Yup.string().required('Required'),
//   role: Yup.string().oneOf(['patient', 'doctor']).required('Role is required')
// })

// function Login() {
//   const navigate = useNavigate()
//   const [showPassword, setShowPassword] = useState(false)
//   const loginPatient = usePatientStore((state) => state.loginPatient)

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       if (values.role !== 'patient') {
//         toast.error('Only patient login is currently supported')
//         setSubmitting(false)
//         return
//       }

//       const result = await loginPatient(values.email, values.password)

//       if (!result.success) {
//         toast.error(result.message || 'Login failed')
//       } else {
//         toast.success('Login successful as patient')
//         navigate('/patient/dashboard')
//       }
//     } catch (error) {
//       toast.error(error.message || 'Login failed')
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
//         <div>
//           <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-2">
//             Sign in to your account
//           </h2>
//           <p className="text-center text-sm text-gray-500 mb-6">Welcome back! Please login to continue.</p>
//         </div>

//         <Formik
//           initialValues={{ email: '', password: '', role: 'patient' }}
//           validationSchema={loginSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ errors, touched, isSubmitting }) => (
//             <Form className="space-y-6">
//               <div className="space-y-4">
//                 <div>
//                   <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
//                     Email Address
//                   </label>
//                   <Field
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     placeholder="example@email.com"
//                   />
//                   {errors.email && touched.email && (
//                     <div className="text-sm text-red-500 mt-1">{errors.email}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Field
//                       id="password"
//                       name="password"
//                       type={showPassword ? 'text' : 'password'}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                       placeholder="Enter your password"
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? 'Hide' : 'Show'}
//                     </button>
//                   </div>
//                   {errors.password && touched.password && (
//                     <div className="text-sm text-red-500 mt-1">{errors.password}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="role" className="text-sm font-medium text-gray-700 block mb-1">
//                     Select Role
//                   </label>
//                   <Field
//                     as="select"
//                     name="role"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   >
//                     <option value="patient">Patient</option>
//                     <option value="doctor">Doctor</option>
//                   </Field>
//                   {errors.role && touched.role && (
//                     <div className="text-sm text-red-500 mt-1">{errors.role}</div>
//                   )}
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <Link
//                   to="/forgot-password"
//                   className="text-sm text-purple-600 hover:underline"
//                 >
//                   Forgot your password?
//                 </Link>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
//                 >
//                   {isSubmitting ? 'Signing in...' : 'Sign in'}
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>

//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link
//               to="/register"
//               className="font-medium text-purple-600 hover:underline"
//             >
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { usePatientStore } from '../store/patient.store'
import { useDoctorStore } from '../store/doctor.store'  // <-- import doctor store

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  role: Yup.string().oneOf(['patient', 'doctor']).required('Role is required')
})

function Login() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  // Get login functions from Zustand stores
  const loginPatient = usePatientStore((state) => state.loginPatient)
  const loginDoctor = useDoctorStore((state) => state.loginDoctor)

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let result

      if (values.role === 'patient') {
        result = await loginPatient(values.email, values.password)
      } else if (values.role === 'doctor') {
        result = await loginDoctor(values.email, values.password)
      } else {
        toast.error('Invalid role selected')
        setSubmitting(false)
        return
      }

      if (!result.success) {
        toast.error(result.message || 'Login failed')
      } else {
        toast.success(`Login successful as ${values.role}`)
        if (values.role === 'patient') {
          navigate('/patientdashboard')
        } else if (values.role === 'doctor') {
          navigate('/doctordashboard')
        }
      }
    } catch (error) {
      toast.error(error.message || 'Login failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-2">
            Sign in to your account
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">Welcome back! Please login to continue.</p>
        </div>

        <Formik
          initialValues={{ email: '', password: '', role: 'patient' }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">
                    Email Address
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="example@email.com"
                  />
                  {errors.email && touched.email && (
                    <div className="text-sm text-red-500 mt-1">{errors.email}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Field
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  {errors.password && touched.password && (
                    <div className="text-sm text-red-500 mt-1">{errors.password}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="role" className="text-sm font-medium text-gray-700 block mb-1">
                    Select Role
                  </label>
                  <Field
                    as="select"
                    name="role"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </Field>
                  {errors.role && touched.role && (
                    <div className="text-sm text-red-500 mt-1">{errors.role}</div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm text-purple-600 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200 ease-in-out"
                >
                  {isSubmitting ? 'Signing in...' : 'Sign in'}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="font-medium text-purple-600 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
