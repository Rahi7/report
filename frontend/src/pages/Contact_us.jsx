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
    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start bg-white p-10 rounded-3xl shadow-xl border border-blue-100">
        {/* Contact Info */}
        <div>
          <h2 className="text-5xl font-extrabold text-blue-700 mb-6 tracking-tight">
            Contact Us
          </h2>
          <p className="text-blue-500 text-lg leading-relaxed mb-8">
            Welcome to Medlock customer service. We're here to help you 24/7.
            Reach out anytime by email or phone and we'll assist you promptly.
          </p>

          <div className="space-y-6 text-blue-600">
            <div className="flex space-x-4">
              <span className="text-xl">📍</span>
              <div>
                <p className="font-bold">Address</p>
                <p className="text-sm">
                  G.T.Road, Adisaptagram, Hooghly, Pin-712121, West Bengal,
                  India
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-sm leading-tight">
                  7044690028 / 7542808321 / 8100026611 / 8709072613 / 9163894654
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <span className="text-xl">✉️</span>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-sm break-all">projectgroup586@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-blue-50 rounded-xl p-8 shadow-lg border border-blue-200">
          <h3 className="text-3xl font-semibold text-blue-700 mb-6">
            Send Message
          </h3>
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
              className="w-full px-5 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-800"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-5 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-800"
            />
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your Message..."
              required
              className="w-full px-5 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-800 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition duration-300"
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
