import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just simulate submission
    console.log("Form Data:", formData);
    setSubmitted(true);
    // Clear form if you want:
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-600 via-teal-700 to-blue-800 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-xl max-w-5xl w-full p-10 md:flex md:space-x-14">
        {/* Contact Info */}
        <div className="md:w-1/2 text-white mb-10 md:mb-0">
          <h2 className="text-5xl font-extrabold mb-6 drop-shadow-lg">Contact Us</h2>
          <p className="text-teal-200 mb-8 leading-relaxed text-lg">
            Welcome to Medlock customer service. We're here to help you 24/7.
            Reach out anytime by email or phone and we'll assist you promptly.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-5">
              <div className="text-3xl text-teal-300" aria-hidden="true">📍</div>
              <div>
                <p className="font-semibold text-teal-100 text-lg mb-1">Address</p>
                <address className="text-teal-200 text-sm not-italic">
                  G.T.Road, Adisaptagram, Hooghly, Pin-712121, West Bengal, India
                </address>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="text-3xl text-teal-300" aria-hidden="true">📞</div>
              <div>
                <p className="font-semibold text-teal-100 text-lg mb-1">Phone</p>
                <p className="text-teal-200 text-sm leading-tight">
                  7044690028 / 7542808321 / 8100026611 / 8709072613 / 9163894654
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="text-3xl text-teal-300" aria-hidden="true">✉️</div>
              <div>
                <p className="font-semibold text-teal-100 text-lg mb-1">Email</p>
                <p className="text-teal-200 text-sm break-all">projectgroup586@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white bg-opacity-90 rounded-xl p-8 md:w-1/2 shadow-lg">
          <h3 className="text-3xl font-semibold mb-6 text-teal-900">Send Message</h3>
          {submitted && (
            <p className="mb-4 text-green-600 font-medium">
              Thank you for contacting us! We will get back to you soon.
            </p>
          )}
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              aria-label="Full Name"
              className="w-full px-5 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600 text-teal-900 font-medium"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              aria-label="Email"
              className="w-full px-5 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600 text-teal-900 font-medium"
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your Message..."
              required
              aria-label="Message"
              className="w-full px-5 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-600 text-teal-900 font-medium resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-md transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;