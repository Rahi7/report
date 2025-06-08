import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg border border-blue-200 p-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-700">
            Choose Registration Type
          </h2>
          <p className="mt-2 text-center text-sm text-blue-600">
            Please select the type of account you want to create
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Link
            to="/doctor-register"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
          >
            Register as Doctor
          </Link>
          <Link
            to="/patient-register"
            className="w-full flex items-center justify-center px-8 py-3 border border-blue-700 text-blue-700 bg-white hover:bg-blue-50 rounded-md md:py-4 md:text-lg md:px-10"
          >
            Register as Patient
          </Link>
        </div>

        <div className="text-center">
          <p className="text-sm text-blue-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-700 hover:text-blue-600"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
