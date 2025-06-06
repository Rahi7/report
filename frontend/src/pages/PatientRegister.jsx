
// import { useState } from 'react'
// import { Formik, Form, Field, ErrorMessage } from 'formik'
// import * as Yup from 'yup'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// import { usePatientStore } from '../store/patient.store'

// const patientSchema = Yup.object().shape({
//   fullName: Yup.string().required('Full name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   dateOfBirth: Yup.date().required('Date of birth is required'),
//   aadharNumber: Yup.string()
//     .matches(/^[2-9]{1}[0-9]{11}$/, 'Please enter a valid 12-digit Aadhar number')
//     .required('Aadhar number is required'),
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
//   const [walletAddress, setWalletAddress] = useState('')

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
//         setWalletAddress(accounts[0])
//         toast.success('Wallet connected successfully')
//       } catch (err) {
//         toast.error('Wallet connection failed')
//       }
//     } else {
//       toast.error('MetaMask not detected. Please install it.')
//     }
//   }

//   const handleSubmit = async (values, { setSubmitting }) => {
//     if (!walletAddress) {
//       toast.error('Please connect MetaMask before registering')
//       setSubmitting(false)
//       return
//     }

//     try {
//       const result = await createPatients({ ...values, walletAddress })
//       if (result.success) {
//         toast.success(result.message)
//         navigate('/login')
//       } else {
//         toast.error(result.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.response?.data?.message || 'Something went wrong')
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

//         {/* MetaMask Button */}
//         <div className="text-center mb-4">
//           <button
//             onClick={connectWallet}
//             className="btn btn-outline-primary w-full mb-2"
//           >
//             {walletAddress ? 'Wallet Connected ✅' : 'Connect MetaMask 🔗'}
//           </button>
//           {walletAddress && (
//             <p className="text-xs break-all text-gray-600">
//               Connected Wallet: <br />
//               <span className="text-sm font-medium">{walletAddress}</span>
//             </p>
//           )}
//         </div>

//         {/* Formik Form */}
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
//               <div className="space-y-4">

//                 <div>
//                   <Field
//                     name="fullName"
//                     type="text"
//                     placeholder="Full Name"
//                     className="input input-bordered w-full"
//                   />
//                   <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <Field
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     className="input input-bordered w-full"
//                   />
//                   <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <Field
//                     name="dateOfBirth"
//                     type="date"
//                     className="input input-bordered w-full"
//                   />
//                   <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <Field
//                     name="aadharNumber"
//                     type="text"
//                     placeholder="Aadhar Number"
//                     className="input input-bordered w-full"
//                   />
//                   <ErrorMessage name="aadharNumber" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <Field
//                     name="password"
//                     type="password"
//                     placeholder="Password"
//                     className="input input-bordered w-full"
//                   />
//                   <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
//                 </div>

//                 <div>
//                   <Field
//                     name="confirmPassword"
//                     type="password"
//                     placeholder="Confirm Password"
//                     className="input input-bordered w-full"
//                   />
//                   <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
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
  const [useManualAddress, setUseManualAddress] = useState(false)

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
      toast.error('Please connect MetaMask or enter your wallet address before registering')
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

        {/* Wallet Connect or Manual Input */}
        <div className="text-center mb-4">
          {useManualAddress ? (
            <div>
              <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter your Ethereum wallet address"
                className="input input-bordered w-full mb-2"
              />
            </div>
          ) : (
            <button
              onClick={connectWallet}
              className="btn btn-outline-primary w-full mb-2"
            >
              {walletAddress ? 'Wallet Connected ✅' : 'Connect MetaMask 🔗'}
            </button>
          )}

          {walletAddress && (
            <p className="text-xs break-all text-gray-600">
              Using Wallet Address: <br />
              <span className="text-sm font-medium">{walletAddress}</span>
            </p>
          )}

          <p className="mt-1 text-sm text-gray-500">
            {useManualAddress
              ? 'Have MetaMask available? '
              : 'Can’t use MetaMask on this device? '}
            <button
              type="button"
              onClick={() => {
                setUseManualAddress(!useManualAddress)
                setWalletAddress('')
              }}
              className="text-blue-600 hover:underline"
            >
              {useManualAddress ? 'Connect MetaMask' : 'Enter manually'}
            </button>
          </p>
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
