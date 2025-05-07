// import { Formik, Form, Field } from 'formik'
// // import * as Yup from 'yup'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { usePatientStore } from '../store/patient.store'

// // const patientSchema = Yup.object().shape({
// //   name: Yup.string().required('Required'),
// //   email: Yup.string().email('Invalid email').required('Required'),
// //   dateOfBirth: Yup.date().required('Required'),
// //   aadharNumber: Yup.string().required('Required'),
// //   // medicalId: Yup.string(),
// //   password: Yup.string()
// //     .min(8, 'Password must be at least 8 characters')
// //     .required('Required'),
// //   confirmPassword: Yup.string()
// //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
// //     .required('Required'),
// // })

// function PatientRegister() {


//   const [newPatient, setNewPatient] = useState({
//     name: "",
//     email: "",
//     dateOfBirth: "",
//     aadharNumber: "",
//     password: "",
//     confirmPassword: ""

//   })
//   // const navigate = useNavigate()
//   const createPatients = usePatientStore()


//   // const handleSubmit = async (values, { setSubmitting }) => {
//   //   try {
//   //     // TODO: Implement actual registration API call
//   //     toast.success('Registration successful!')
//   //     navigate('/login')
//   //   } catch (error) {
//   //     toast.error(error.message || 'Registration failed')
//   //   }
//   //   setSubmitting(false)
//   // }

//   const handleSubmit = async (values, { setSubmitting }) => {
//     const { confirmPassword, ...patientData } = values
  
//     try {
//       const result = await createPatients(patientData)
  
//       if (result.success) {
//         toast.success(result.message)
//         navigate('/login')
//       } else {
//         toast.error(result.message)
//       }
//     } catch (error) {
//       toast.error('Something went wrong')
//     } finally {
//       setSubmitting(false)
//     }
//   }
  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Patient Registration
//           </h2>
//         </div>

//         <Formik
//           initialValues={{
//             fullName: '',
//             email: '',
//             dateOfBirth: '',
//             aadharNumber: '',
//             // medicalId: '',
//             password: '',
//             confirmPassword: '',
//           }}
//           validationSchema={patientSchema}
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
//                   <label htmlFor="dateOfBirth" className="label">
//                     Date of Birth
//                   </label>
//                   <Field
//                     id="dateOfBirth"
//                     name="dateOfBirth"
//                     type="date"
//                     className="input"
//                   />
//                   {errors.dateOfBirth && touched.dateOfBirth && (
//                     <div className="error">{errors.dateOfBirth}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="aadharNumber" className="label">
//                     Phone Number
//                   </label>
//                   <Field
//                     id="aadharNumner"
//                     name="aadharNumber"
//                     type="text"
//                     className="input"
//                   />
//                   {errors.phone && touched.phone && (
//                     <div className="error">{errors.phone}</div>
//                   )}
//                 </div>

//                 {/* <div>
//                   <label htmlFor="medicalId" className="label">
//                     Medical ID (Optional)
//                   </label>
//                   <Field
//                     id="medicalId"
//                     name="medicalId"
//                     type="text"
//                     className="input"
//                   />
//                   {errors.medicalId && touched.medicalId && (
//                     <div className="error">{errors.medicalId}</div>
//                   )}
//                 </div> */}

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

// export default PatientRegister

// import { Formik, Form, Field } from 'formik'
// import * as Yup from 'yup' // Uncomment this to use validation
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { usePatientStore } from '../store/patient.store'

// const patientSchema = Yup.object().shape({
//   fullName: Yup.string().required('Full name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   dateOfBirth: Yup.date().required('Date of birth is required'),
//   aadharNumber: Yup.string()
//   .matches(/^[2-9]{1}[0-9]{11}$/, 'Please enter a valid 12-digit Aadhar number')
//   .required('Aadhar number is required'),

//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
// })

// function PatientRegister() {
//   const navigate = useNavigate()
//   const { createPatients } = usePatientStore()

//   const handleSubmit = async (values, { setSubmitting }) => {
//     // const { confirmPassword, ...patientData } = values

//     try {
//       const result = await createPatients(values)

//       if (result.success) {
//         toast.success(result.message)
//         navigate('/login')
//       } else {
//         toast.error(result.message)
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message||'Something went wrong')
//     } finally {
//       setSubmitting(false)
//     }
//   }

//       // const isValidAadhar = (aadharNumber) => {
//       //   const aadharRegex = /^[2-9]{1}[0-9]{11}$/;
//       //   return aadharRegex.test(aadharNumber);
//       // };
  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Patient Registration
//           </h2>
//         </div>

//         <Formik
//           initialValues={{
//             fullName: '',
//             email: '',
//             dateOfBirth: '',
//             aadharNumber: '',
//             password: '',
//             confirmPassword: '',
//           }}
//           validationSchema={patientSchema}
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
//                   <label htmlFor="dateOfBirth" className="label">
//                     Date of Birth
//                   </label>
//                   <Field
//                     id="dateOfBirth"
//                     name="dateOfBirth"
//                     type="date"
//                     className="input"
//                   />
//                   {errors.dateOfBirth && touched.dateOfBirth && (
//                     <div className="error">{errors.dateOfBirth}</div>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="aadharNumber" className="label">
//                     Aadhar Number
//                   </label>
//                   <Field
//                     id="aadharNumber"
//                     name="aadharNumber"
//                     type="text"
//                     className="input"
//                   />
//                   {errors.aadharNumber && touched.aadharNumber && (
//                     <div className="error">{errors.aadharNumber}</div>
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

// export default PatientRegister


import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { usePatientStore } from '../store/patient.store'

const patientSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  aadharNumber: Yup.string()
    .matches(/^[2-9]{1}[0-9]{11}$/, 'Please enter a valid 12-digit Aadhar number')
    .required('Aadhar number is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

function PatientRegister() {
  const navigate = useNavigate()
  const { createPatients } = usePatientStore()
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
      const result = await createPatients({ ...values, walletAddress })
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
            Patient Registration
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
            dateOfBirth: '',
            aadharNumber: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={patientSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="space-y-4">

                <div>
                  <Field
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <Field
                    name="dateOfBirth"
                    type="date"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <Field
                    name="aadharNumber"
                    type="text"
                    placeholder="Aadhar Number"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="aadharNumber" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
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

export default PatientRegister
