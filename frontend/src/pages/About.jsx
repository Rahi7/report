function About() {
  return (
    <div className="bg-white text-gray-800">
      {/* Intro Section */}
      <section
        className="relative max-w-7xl mx-auto px-6 py-16 text-center bg-cover bg-center rounded-lg overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: "url('/team/image-about.webp')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg text-blue-800">
            About Us
          </h1>
          <p className="mt-6 text-xl leading-relaxed drop-shadow-md">
            Medlock is a healthcare management system designed to simplify and secure the medical experience for patients and healthcare providers alike.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
          <p className="mt-4 text-blue-800 text-lg max-w-3xl mx-auto">
            To provide a secure, efficient, and user-friendly platform that connects patients with healthcare providers, simplifies medical record handling, and improves the overall healthcare journey.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900">Features</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 text-blue-800 text-left max-w-3xl mx-auto">
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm">🔒 Secure medical record management</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm">📅 Easy appointment scheduling</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm">💬 Direct communication with providers</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm">📝 Prescription management</li>
            <li className="bg-gray-100 p-4 rounded-lg shadow-sm">📁 Medical history tracking</li>
          </ul>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900">Security</h2>
          <p className="mt-4 text-blue-800 text-lg max-w-3xl mx-auto">
            We prioritize your privacy. Medlock uses end-to-end encryption and complies with all modern healthcare data protection standards to safeguard your medical data.
          </p>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold text-blue-900 mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Ankita Ghosh",
              role: "Backend Developer",
              desc: "Passionate about building robust and scalable server-side applications.",
              photo: "/team/person1.webp",
            },
            {
              name: "Anukrita Biswas",
              role: "Frontend Developer",
              desc: "Crafting intuitive and engaging user experiences.",
              photo: "/team/person2.webp",
            },
            {
              name: "Dipanwita Biswas",
              role: "Backend Developer",
              desc: "Focused on secure blockchain integration and scalable backend systems.",
              photo: "/team/person4.webp",
            },
            {
              name: "Saurabh Kumar",
              role: "Frontend Developer",
              desc: "Committed to creating sleek, responsive interfaces.",
              photo: "/team/saurabh.webp",
            },
            {
              name: "Trisha Mukhopadhyay",
              role: "Frontend Developer",
              desc: "Bringing creativity and clarity to the user interface.",
              photo: "/team/trisha.webp",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
              <p className="text-sm text-blue-800">{member.role}</p>
              <p className="text-xs text-blue-600 mt-2">{member.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Medlock. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
