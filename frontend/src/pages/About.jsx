function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-500">
          Our healthcare management system is designed to streamline the healthcare experience
          for both patients and healthcare providers.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
        <p className="mt-4 text-gray-500">
          To provide a secure and efficient platform that connects patients with healthcare
          providers, simplifies medical record management, and improves the overall
          healthcare experience.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Features</h2>
        <ul className="mt-4 space-y-4 text-gray-500">
          <li>Secure medical record management</li>
          <li>Easy appointment scheduling</li>
          <li>Direct communication with healthcare providers</li>
          <li>Prescription management</li>
          <li>Medical history tracking</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Security</h2>
        <p className="mt-4 text-gray-500">
          We prioritize the security and privacy of your medical information. Our system
          uses state-of-the-art encryption and follows all healthcare data protection
          regulations.
        </p>
      </div>
    </div>
  )
}

export default About