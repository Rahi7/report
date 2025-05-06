import React from 'react'

const historyItems = [
  {
    id: 1,
    action: 'Viewed prescription summary',
    date: '2024-10-12',
  },
  {
    id: 2,
    action: 'Updated account info',
    date: '2024-10-10',
  },
  {
    id: 3,
    action: 'Downloaded prescription PDF',
    date: '2024-10-08',
  },
]

function History() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-4">Activity History</h2>
      <ul className="space-y-3">
        {historyItems.map((item) => (
          <li
            key={item.id}
            className="bg-white shadow p-4 rounded-lg flex justify-between items-center"
          >
            <span>{item.action}</span>
            <span className="text-sm text-gray-500">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default History
