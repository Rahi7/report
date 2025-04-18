import { Link } from 'react-router-dom'

function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Blog', href: '/blog' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                to={item.href}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {new Date().getFullYear()} Healthcare Management System. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

 export default Footer

// import React from 'react';
// import { Link } from 'react-router-dom';
// import {Footer} from 'flowbite-react';
// import { BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'

// const Footer = () => {
//   return (
//     <Footer container className='border border-t-8 border-teal-500'>
//     <div className='w-full max-w-7xl mx-auto'>
//       <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
//         <div className='mt-5'>
//         <Link to="/" className=' font-bold dark:text-white'>
//             <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>MED</span>
//             Lock
//         </Link>
//         </div>
      
//         <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm-gap-6'>
//           <div>
//             <Footer.Title title='ABOUT' />
//             <Footer.LinkGroup col>
//               <Footer.Link href='#'
//               target='_blank'
//               rel='noopener noreferrer'>
//                 100 js projects
//               </Footer.Link>
//               <Footer.Link href='#'
//               target='_blank'
//               rel='noopener noreferrer'>
//                 100 js projects
//               </Footer.Link>
//             </Footer.LinkGroup>
//           </div>
//           <div>
//             <Footer.Title title='FOLLOW US' />
//             <Footer.LinkGroup col>
//               <Footer.Link href='#'
//               target='_blank'
//               rel='noopener noreferrer'>
//                 Github
//               </Footer.Link>
//               <Footer.Link href='#'
//               target='_blank'
//               rel='noopener noreferrer'>
//                 Discord
//               </Footer.Link>
//             </Footer.LinkGroup>
//           </div>
//           <div>
//             <Footer.Title title='LEGAL' />
//             <Footer.LinkGroup col>
//               <Footer.Link href='#'
//               target='_blank'
//               rel='noopener noreferrer'>
//                 Privacy Policy
//               </Footer.Link>
//               <Footer.Link href='#'
//               target='_blank'
//               rel='noopener noreferrer'>
//                 Terms & Conditions
//               </Footer.Link>
//             </Footer.LinkGroup>
//           </div>
//         </div>
//       </div>
//       <Footer.Divider />
//       <div className='w-full sm:flex sm:item-center sm:justify-between'>
//         <Footer.Copyright href='#' by='MEDLock' year={new Date().getFullYear()} />
      
//       <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
//         <Footer.Icon href='#' icon={BsFacebook} />
//         <Footer.Icon href='#' icon={BsTwitter} />
//         <Footer.Icon href='#' icon={BsInstagram} />
//         <Footer.Icon href='#' icon={BsGithub} />
//       </div>
//       </div>
//     </div>  
//     </Footer>
//   )
// }

// export default Footer;