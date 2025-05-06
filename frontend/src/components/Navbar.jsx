// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../store/slices/authSlice'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { isAuthenticated, user } = useSelector((state) => state.auth)

//   const handleLogout = () => {
//     dispatch(logout())
//     navigate('/login')
//   }

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Blog', href: '/blog' },
//   ]

//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/" className="text-2xl font-bold text-primary-600">
//                             <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                 MED
//               </span>
//                 Lock
//               </Link>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {isAuthenticated ? (
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm text-gray-700">Welcome, {user?.name}</span>
//                 <button
//                   onClick={handleLogout}
//                   className="btn btn-secondary"
//                 >
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <div className="space-x-4">
//                 <Link to="/login" className="btn btn-secondary">
//                   Login
//                 </Link>
//                 <Link to="/register" className="btn btn-primary">
//                   Register
//                 </Link>
//               </div>
//             )}
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
//             >
//               {isOpen ? (
//                 <XMarkIcon className="block h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
//         <div className="pt-2 pb-3 space-y-1">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               to={item.href}
//               className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//         <div className="pt-4 pb-3 border-t border-gray-200">
//           {isAuthenticated ? (
//             <div className="space-y-1">
//               <span className="block px-4 py-2 text-base font-medium text-gray-500">
//                 Welcome, {user?.name}
//               </span>
//               <button
//                 onClick={() => {
//                   handleLogout()
//                   setIsOpen(false)
//                 }}
//                 className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-1">
//               <Link
//                 to="/login"
//                 className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { logout } from '../store/slices/authSlice'
// import { Bars3Icon, XMarkIcon, BellIcon, ClockIcon } from '@heroicons/react/24/outline'

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { isAuthenticated, user } = useSelector((state) => state.auth)

//   const handleLogout = () => {
//     dispatch(logout())
//     navigate('/login')
//   }

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Contact Us', href: '/contact' },
//   ]

//   return (
//     <nav className="bg-gray-800 shadow-lg text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link to="/" className="text-2xl font-bold">
//                 <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   MED
//                 </span>
//                 Lock
//               </Link>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-6">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-300 hover:text-white"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
//             {isAuthenticated ? (
//               <>
//                 <span className="text-sm text-gray-300">Welcome, {user?.name}</span>
//                 <button onClick={handleLogout} className="btn btn-secondary">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="btn btn-secondary">
//                   Login
//                 </Link>
//                 <Link to="/register" className="btn btn-primary">
//                   Register
//                 </Link>
//                 <button className="hover:text-white">
//                   <BellIcon className="h-6 w-6 text-gray-300" />
//                 </button>
//                 <button className="hover:text-white">
//                   <ClockIcon className="h-6 w-6 text-gray-300" />
//                 </button>
//               </>
//             )}
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//             >
//               {isOpen ? (
//                 <XMarkIcon className="block h-6 w-6" />
//               ) : (
//                 <Bars3Icon className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
//         <div className="pt-2 pb-3 space-y-1 bg-gray-700">
//           {navigation.map((item) => (
//             <Link
//               key={item.name}
//               to={item.href}
//               className="block pl-3 pr-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//         <div className="pt-4 pb-3 border-t border-gray-600 bg-gray-700">
//           {isAuthenticated ? (
//             <div className="space-y-1 px-4">
//               <span className="block text-base font-medium text-gray-300">
//                 Welcome, {user?.name}
//               </span>
//               <button
//                 onClick={() => {
//                   handleLogout()
//                   setIsOpen(false)
//                 }}
//                 className="block w-full text-left text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600 py-2"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-1 px-4">
//               <Link
//                 to="/login"
//                 className="block text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600 py-2"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="block text-base font-medium text-gray-300 hover:text-white hover:bg-gray-600 py-2"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Register
//               </Link>
//               <Link to="/notifications" className="hover:text-white">
//               <BellIcon className="h-6 w-6 text-gray-300" />
//               </Link>
//               <button className="block text-left w-full text-gray-300 hover:text-white hover:bg-gray-600 py-2">
//                 <ClockIcon className="h-6 w-6 inline mr-2" /> History
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice'
import { Bars3Icon, XMarkIcon, BellIcon, ClockIcon } from '@heroicons/react/24/outline'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ]

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
                <span className="text-sm text-gray-300">Welcome, {user?.name}</span>
                <button onClick={handleLogout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Register
                </Link>
                <Link to="/notifications" className="hover:text-white">
                  <BellIcon className="h-6 w-6 text-gray-300" />
                </Link>
                <Link to="/history" className="hover:text-white">
                  <ClockIcon className="h-6 w-6 text-gray-300" />
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
                Welcome, {user?.name}
              </span>
              <button
                onClick={() => {
                  handleLogout()
                  setIsOpen(false)
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
  )
}

export default Navbar
