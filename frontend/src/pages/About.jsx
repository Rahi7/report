import React from "react";

function About() {
  const team = [
    {
      name: "Ankita Ghosh",
      role: "Backend Developer",
      description:
        "Passionate about building robust and scalable server-side applications.",
    },
    {
      name: "Anukrita Biswas",
      role: "Frontend Developer",
      description: "Crafting intuitive and engaging user experiences.",
    },
    {
      name: "Dipanwita Biswas",
      role: "Backend Developer",
      description:
        "Passionate about building robust and scalable server-side applications.",
    },
    {
      name: "Saurabh Kumar",
      role: "Frontend Developer",
      description: "Crafting intuitive and engaging user experiences.",
    },
    {
      name: "Trisha Mukhopadhyay",
      role: "Frontend Developer",
      description: "Crafting intuitive and engaging user experiences.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 text-gray-800 font-sans">
      {/* Header */}
      <header className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Our healthcare management system simplifies healthcare for patients and providers
          with security and efficiency at its core.
        </p>
      </header>

      {/* Mission */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-400 inline-block pb-1">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          To offer a secure, user-friendly platform that seamlessly connects patients with
          healthcare professionals and streamlines medical workflows.
        </p>
      </section>

      {/* Features */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6 border-b-2 border-blue-400 inline-block pb-1">
          Features
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base list-disc list-inside">
          <li>Secure medical record storage</li>
          <li>Easy appointment scheduling</li>
          <li>Integrated communication tools</li>
          <li>Smart prescription management</li>
          <li>Comprehensive medical history view</li>
        </ul>
      </section>

      {/* Security */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-400 inline-block pb-1">
          Security
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Your data privacy is paramount. We use enterprise-grade encryption and comply
          with global health data protection standards to ensure peace of mind.
        </p>
      </section>

      {/* Our Team */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-8 rounded-3xl shadow-lg">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-16">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map(({ name, role, description }) => (
            <div
              key={name}
              className="relative bg-white w-full max-w-sm mx-auto rounded-3xl shadow-md p-8 text-center transform transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-blue-400 to-blue-600" />

              <div className="w-24 h-24 mb-6 mx-auto rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
              <p className="text-blue-500 italic text-sm mb-3">{role}</p>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 bg-blue-900 text-white text-center py-6 rounded-lg shadow-inner">
        <p>&copy; {new Date().getFullYear()} Medlock. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
