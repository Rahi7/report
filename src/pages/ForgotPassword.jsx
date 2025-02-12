import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})

function ForgotPassword() {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: Implement actual password reset API call
      toast.success('Password reset instructions sent to your email')
    } catch (error) {
      toast.error(error.message || 'Failed to send reset instructions')
    }
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={forgotPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email address"
                />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send reset instructions'}
                </button>
              </div>

              <div className="text-center">
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:text-primary-500"
                >
                  Back to login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ForgotPassword