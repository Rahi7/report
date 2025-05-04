// import { useState } from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { useDoctorStore } from '../store/doctor.store'

// const doctorSchema = Yup.object().shape({
//   fullName: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
//   Specialization: Yup.string().required('Required'),
//   licenseNumber: Yup.string().required('Required'),
//   phoneNumber: Yup.string().required('Required'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Required'),
// })

// function DoctorRegister() {
//   const navigate = useNavigate()
//   const {createDoctors} = useDoctorStore()
//   const [walletAddress, setWalletAddress] = useState('')

//   const connectWallet = async () => {
//     if(window.ethereum){
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
//         setWalletAddress(accounts[0])
//         toast.success('Wallet connected successfully')
//       } catch(err) {
//         toast.error('Wallet connection failed')
//       }
//     } else {
//       toast.error('MetaMask not detected. Please install it')
//       }
//     }
//   }

//   const handleSubmit = async (values, { setSubmitting }) => {
//     if(!walletAddress) {
//       toast.error('please connect MetaMask before registering')
//       setSubmitting(false)
//       return
//     }

//     try {
//       // TODO: Implement actual registration API call
//       const result = await createDoctors({ ...values, walletAddress })
//       if (result.success) {
//         toast.success(result.message)
//         navigate('/login')
//       }else {
//         toast.error(result.message)
//       }
//       // toast.success('Registration successful!')
//       // navigate('/login')
//     } catch (error) {
//       console.log(error)
//       toast.error(error.response?.data?.message || 'Something went wrong')
//       // toast.error(error.message || 'Registration failed')
//     } finally {
//     setSubmitting(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Doctor Registration
//           </h2>
//         </div>

//         <Formik
//           initialValues={{
//             fullName: '',
//             email: '',
//             specialization: '',
//             licenseNumber: '',
//             phone: '',
//             password: '',
//             confirmPassword: '',
//           }}
//           validationSchema={doctorSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ errors, touched, isSubmitting }) => (
//             <Form className="mt-8 space-y-6">
//               <div className="rounded-md shadow-sm space-y-4">
//                 <div>
//                   <label htmlFor="fullName" className="label">
//                     Full Name
//                   </label>
//                   <Field
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     className="input"
//                   />
//                   {errors.fullName && touched.fullName && (
//                     <div className="error">{errors.fullName}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="label">
//                     Email
//                   </label>
//                   <Field
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="input"
//                   />
//                   {errors.email && touched.email && (
//                     <div className="error">{errors.email}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="specialization" className="label">
//                     Specialization
//                   </label>
//                   <Field
//                     id="specialization"
//                     name="specialization"
//                     type="text"
//                     className="input"
//                   />
//                   {errors.specialization && touched.specialization && (
//                     <div className="error">{errors.specialization}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="licenseNumber" className="label">
//                     License Number
//                   </label>
//                   <Field
//                     id="licenseNumber"
//                     name="licenseNumber"
//                     type="text"
//                     className="input"
//                   />
//                   {errors.licenseNumber && touched.licenseNumber && (
//                     <div className="error">{errors.licenseNumber}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="label">
//                     Phone Number
//                   </label>
//                   <Field
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     className="input"
//                   />
//                   {errors.phone && touched.phone && (
//                     <div className="error">{errors.phone}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="password" className="label">
//                     Password
//                   </label>
//                   <Field
//                     id="password"
//                     name="password"
//                     type="password"
//                     className="input"
//                   />
//                   {errors.password && touched.password && (
//                     <div className="error">{errors.password}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="confirmPassword" className="label">
//                     Confirm Password
//                   </label>
//                   <Field
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type="password"
//                     className="input"
//                   />
//                   {errors.confirmPassword && touched.confirmPassword && (
//                     <div className="error">{errors.confirmPassword}</div>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="btn btn-primary w-full"
//                 >
//                   {isSubmitting ? 'Registering...' : 'Register'}
//                 </button>
//               </div>

//               <div className="text-center">
//                 <p className="text-sm text-gray-600">
//                   Already have an account?{' '}
//                   <Link
//                     to="/login"
//                     className="font-medium text-primary-600 hover:text-primary-500"
//                   >
//                     Sign in here
//                   </Link>
//                 </p>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   )
// }

// export default DoctorRegister

import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDoctorStore } from '../store/doctor.store'

const doctorSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  Specialization: Yup.string().required('Specialization is required'),
  licenseNumber : Yup.string().required('Required'),
  phoneNumber: Yup.string()
  .matches(/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number')
  .required('Phone number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

function DoctorRegister() {
  const navigate = useNavigate()
  const { createDoctors } = useDoctorStore()
  const [walletAddress, setWalletAddress] = useState('')

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setWalletAddress(accounts[0])
        toast.success('Wallet connected successfully')
      } catch (err) {
        toast.error('Wallet connection failed')
      }
    } else {
      toast.error('MetaMask not detected. Please install it.')
    }
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!walletAddress) {
      toast.error('Please connect MetaMask before registering')
      setSubmitting(false)
      return
    }

    try {
      const result = await createDoctors({ ...values, walletAddress })
      if (result.success) {
        toast.success(result.message)
        navigate('/login')
      } else {
        toast.error(result.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Doctor Registration
          </h2>
        </div>

        {/* MetaMask Button */}
        <div className="text-center mb-4">
          <button
            onClick={connectWallet}
            className="btn btn-outline-primary w-full mb-2"
          >
            {walletAddress ? 'Wallet Connected ✅' : 'Connect MetaMask 🔗'}
          </button>
          {walletAddress && (
            <p className="text-xs break-all text-gray-600">
              Connected Wallet: <br />
              <span className="text-sm font-medium">{walletAddress}</span>
            </p>
          )}
        </div>

        {/* Formik Form */}
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            Specialization: '',
            licenseNumber: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={doctorSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="space-y-4">

                <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">FULL NAME</label>
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">EMAIL</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">SPECIALIZATION</label>
                  <Field
                    name="Specialization"
                    type="text"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="Specialization" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">LICENSE NUMBER</label>
                  <Field
                    name="licenseNumber"
                    type="text"
                    placeholder="License Number"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="licenseNumber" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">PHONE NUMBER</label>
                  <Field
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">PASSWORD</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">CONFIRM PASSWORD</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                </div>

              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Registering...' : 'Register'}
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:text-primary-500"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default DoctorRegister
