// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { Formik, Form, Field } from 'formik'
// import * as Yup from 'yup'
// import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice'
// import { toast } from 'react-toastify'

// const loginSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Required'),
//   password: Yup.string().required('Required'),
// })

// function Login() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [showPassword, setShowPassword] = useState(false)

//   const handleSubmit = async (values, { setSubmitting }) => {
//     dispatch(loginStart())
//     try {
//       // TODO: Implement actual login API call here
//       const mockResponse = { user: { id: 1, email: values.email, name: 'Test User' } }
//       dispatch(loginSuccess(mockResponse.user))
//       toast.success('Login successful!')
//       navigate('/')
//     } catch (error) {
//       dispatch(loginFailure(error.message))
//       toast.error(error.message || 'Login failed')
//     }
//     setSubmitting(false)
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
//         <Formik
//           initialValues={{ email: '', password: '' }}
//           validationSchema={loginSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ errors, touched, isSubmitting }) => (
//             <Form className="mt-8 space-y-6">
//               <div className="rounded-md shadow-sm -space-y-px">
//                 <div>
//                   <label htmlFor="email" className="sr-only">
//                     Email address
//                   </label>
//                   <Field
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="input rounded-t-md"
//                     placeholder="Email address"
//                   />
//                   {errors.email && touched.email && (
//                     <div className="error">{errors.email}</div>
//                   )}
//                 </div>
//                 <div>
//                   <label htmlFor="password" className="sr-only">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Field
//                       id="password"
//                       name="password"
//                       type={showPassword ? 'text' : 'password'}
//                       className="input rounded-b-md"
//                       placeholder="Password"
//                     />
//                     <button
//                       type="button"
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? 'Hide' : 'Show'}
//                     </button>
//                   </div>
//                   {errors.password && touched.password && (
//                     <div className="error">{errors.password}</div>
//                   )}
//                 </div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="text-sm">
//                   <Link
//                     to="/forgot-password"
//                     className="font-medium text-primary-600 hover:text-primary-500"
//                   >
//                     Forgot your password?
//                   </Link>
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="btn btn-primary w-full"
//                 >
//                   {isSubmitting ? 'Signing in...' : 'Sign in'}
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>

//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link
//               to="/register"
//               className="font-medium text-primary-600 hover:text-primary-500"
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
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice'
import { toast } from 'react-toastify'

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
})

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (values, { setSubmitting }) => {
    dispatch(loginStart())
    try {
      const mockResponse = { user: { id: 1, email: values.email, name: 'Test User' } }
      dispatch(loginSuccess(mockResponse.user))
      toast.success('Login successful!')
      navigate('/')
    } catch (error) {
      dispatch(loginFailure(error.message))
      toast.error(error.message || 'Login failed')
    }
    setSubmitting(false)
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
          initialValues={{ email: '', password: '' }}
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
