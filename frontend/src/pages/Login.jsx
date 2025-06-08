import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { usePatientStore } from "../store/patient.store";
import { useDoctorStore } from "../store/doctor.store";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
  role: Yup.string().oneOf(["patient", "doctor"]).required("Role is required"),
});

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const loginPatient = usePatientStore((state) => state.loginPatient);
  const loginDoctor = useDoctorStore((state) => state.loginDoctor);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let result;

      if (values.role === "patient") {
        result = await loginPatient(values.email, values.password);
      } else if (values.role === "doctor") {
        result = await loginDoctor(values.email, values.password);
      } else {
        toast.error("Invalid role selected");
        setSubmitting(false);
        return;
      }

      if (!result.success) {
        toast.error(result.message || "Login failed");
      } else {
        toast.success(`Login successful as ${values.role}`);
        navigate(
          values.role === "patient" ? "/patientdashboard" : "/doctordashboard"
        );
      }
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white border border-blue-200 rounded-xl shadow-lg p-10 space-y-6">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-2 tracking-wide">
            Welcome Back
          </h2>
          <p className="text-blue-500 text-sm">
            Login to access your dashboard
          </p>
        </div>

        <Formik
          initialValues={{ email: "", password: "", role: "patient" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-600 mb-1"
                >
                  Email Address
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  placeholder="you@example.com"
                />
                {errors.email && touched.email && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-blue-600 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 inset-y-0 text-sm text-blue-500 flex items-center"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && touched.password && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-blue-600 mb-1"
                >
                  Select Role
                </label>
                <Field
                  as="select"
                  name="role"
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </Field>
                {errors.role && touched.role && (
                  <div className="text-sm text-red-500 mt-1">{errors.role}</div>
                )}
              </div>

              <div className="flex justify-between text-sm">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="text-center text-sm text-blue-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-700 hover:underline"
          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
