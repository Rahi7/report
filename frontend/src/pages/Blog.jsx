function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Importance of Regular Health Check-ups',
      excerpt: 'Learn why regular health check-ups are crucial for maintaining good health and preventing diseases.',
      date: '2024-03-15',
      author: 'Dr. Sarah Johnson',
    },
    {
      id: 2,
      title: 'Understanding Telemedicine',
      excerpt: 'Discover how telemedicine is revolutionizing healthcare delivery and improving patient access.',
      date: '2024-03-14',
      author: 'Dr. Michael Chen',
    },
    {
      id: 3,
      title: 'Tips for Managing Chronic Conditions',
      excerpt: 'Expert advice on effectively managing chronic health conditions for a better quality of life.',
      date: '2024-03-13',
      author: 'Dr. Emily Williams',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Health & Wellness Blog</h1>
        <p className="mt-4 text-lg text-gray-500">
          Stay informed with the latest health news and medical advancements
        </p>
      </div>

      <div className="mt-8">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
            <p className="mt-3 text-gray-500">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <button className="mt-4 text-primary-600 hover:text-primary-700 font-medium">
              Read more
            </button>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Blog