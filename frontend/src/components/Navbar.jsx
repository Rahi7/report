import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, BellIcon, ClockIcon } from '@heroicons/react/24/outline';
import { usePatientStore } from '../store/patient.store'; // adjust path if needed
import { useDoctorStore } from '../store/doctor.store'; // adjust path if needed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Get patient user and logout
  const patientUser = usePatientStore((state) => state.user);
  const logoutPatient = usePatientStore((state) => state.logoutPatient);

  // Get doctor user and logout
  const doctorUser = useDoctorStore((state) => state.user);
  const logoutDoctor = useDoctorStore((state) => state.logoutDoctor);

  // Determine authentication and user info
  const isDoctor = Boolean(doctorUser);
  const isPatient = Boolean(patientUser);
  const isAuthenticated = isDoctor || isPatient;

  // Choose displayed user and logout function
  const displayedName = isDoctor ? `Dr. ${doctorUser.name || doctorUser.fullName || ''}` : patientUser?.name || '';
  const handleLogout = async () => {
    if (isDoctor) {
      await logoutDoctor();
    } else if (isPatient) {
      await logoutPatient();
    }
    navigate('/login');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-800 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MED
                </span>
                Lock
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-gray-300">Welcome, {displayedName}</span>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
                 <Link to="/notifications" className="hover:text-white">
                  <BellIcon className="h-6 w-6 text-gray-300" />
                </Link>
                <Link to="/history" className="hover:text-white">
                  <ClockIcon className="h-6 w-6 text-gray-300" />
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
               
              </>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1 bg-gray-700">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-600 bg-gray-700">
          {isAuthenticated ? (
            <div className="space-y-1 px-4">
              <span className="block text-base font-medium text-gray-300">
                Welcome, {displayedName}
              </span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600 py-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-1 px-4">
              <Link
                to="/login"
                className="block text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
              <Link to="/notifications" className="block text-gray-300 hover:text-white hover:bg-gray-600 py-2">
                <BellIcon className="h-6 w-6 inline mr-2" /> Notifications
              </Link>
              <Link to="/history" className="block text-gray-300 hover:text-white hover:bg-gray-600 py-2">
                <ClockIcon className="h-6 w-6 inline mr-2" /> History
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
