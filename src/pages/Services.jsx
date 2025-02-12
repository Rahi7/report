import { CheckCircleIcon } from '@heroicons/react/24/outline'

function Services() {
  const services = [
    {
      title: 'Medical Records Management',
      description: 'Securely store and access your medical records anytime, anywhere.',
    },
    {
      title: 'Appointment Scheduling',
      description: 'Book and manage appointments with healthcare providers easily.',
    },
    {
      title: 'Prescription Management',
      description: 'Track and manage your prescriptions in one place.',
    },
    {
      title: 'Doctor-Patient Communication',
      description: 'Direct messaging system between patients and healthcare providers.',
    },
    {
      title: 'Medical History Tracking',
      description: 'Comprehensive tracking of your medical history and treatments.',
    },
    {
      title: 'Report Sharing',
      description: 'Securely share medical reports with authorized healthcare providers.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Our Services</h1>
        <p className="mt-4 text-lg text-gray-500">
          Comprehensive healthcare management solutions for patients and providers
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-primary-600" />
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                {service.title}
              </h3>
            </div>
            <p className="mt-4 text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services