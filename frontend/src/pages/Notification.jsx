import React from 'react'

const notifications = [
  {
    id: 1,
    title: 'Prescription Uploaded',
    message: 'Your new prescription was successfully uploaded and verified.',
    time: '2 hours ago',
  },
  {
    id: 2,
    title: 'System Update',
    message: 'New features added to MedLock. Check them out!',
    time: '1 day ago',
  },
]

function Notifications() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No new notifications.</p>
        ) : (
          notifications.map((note) => (
            <div
              key={note.id}
              className="bg-white shadow p-4 rounded-lg border-l-4 border-blue-400"
            >
              <h3 className="font-semibold text-lg">{note.title}</h3>
              <p className="text-sm text-gray-600">{note.message}</p>
              <p className="text-xs text-gray-400 mt-1">{note.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Notifications
