import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg max-w-4xl w-full p-8 md:flex md:space-x-12">
        {/* Contact Info */}
        <div className="text-white md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-200 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📍</div>
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm">4671 Sugar Camp Road<br />Owatonna, Minnesota, 55060</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">📞</div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">502-475-5046</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-2xl">✉️</div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">wrub7a7810e@temporary-mail.net</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white bg-opacity-90 rounded-lg p-6 md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <textarea rows="4" placeholder="Type your Message..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
            <button type="submit" className="w-full py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;