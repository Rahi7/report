import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const patientSchema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  dateOfBirth: Yup.date().required('Required'),
  phone: Yup.string().required('Required'),
  medicalId: Yup.string(),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
})

function PatientRegister() {
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: Implement actual registration API call
      toast.success('Registration successful!')
      navigate('/login')
    } catch (error) {
      toast.error(error.message || 'Registration failed')
    }
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Patient Registration
          </h2>
        </div>

        <Formik
          initialValues={{
            fullName: '',
            email: '',
            dateOfBirth: '',
            phone: '',
            medicalId: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={patientSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="fullName" className="label">
                    Full Name
                  </label>
                  <Field
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="input"
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="error">{errors.fullName}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                  />
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="label">
                    Date of Birth
                  </label>
                  <Field
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="input"
                  />
                  {errors.dateOfBirth && touched.dateOfBirth && (
                    <div className="error">{errors.dateOfBirth}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="label">
                    Phone Number
                  </label>
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    className="input"
                  />
                  {errors.phone && touched.phone && (
                    <div className="error">{errors.phone}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="medicalId" className="label">
                    Medical ID (Optional)
                  </label>
                  <Field
                    id="medicalId"
                    name="medicalId"
                    type="text"
                    className="input"
                  />
                  {errors.medicalId && touched.medicalId && (
                    <div className="error">{errors.medicalId}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="label">
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="input"
                  />
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="label">
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="input"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                  )}
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