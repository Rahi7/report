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
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-teal-700 drop-shadow-md">
          Health & Wellness Blog
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-lg text-teal-600/90 font-medium">
          Stay informed with the latest health news and medical advancements
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-14">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-5 py-3 rounded-lg border border-teal-300 shadow-sm
            focus:outline-none focus:ring-4 focus:ring-teal-300 focus:border-teal-600
            transition duration-300 placeholder:text-teal-400 font-medium text-teal-900"
        />
      </div>

      {/* Posts grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl 
              transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold text-teal-800 mb-3">{post.title}</h2>
            <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 flex justify-between text-sm text-teal-500 font-semibold tracking-wide">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <button
              className="mt-6 text-teal-700 font-semibold hover:text-teal-900 border-b-2 border-transparent hover:border-teal-900 transition-all duration-300"
              aria-label={`Read more about ${post.title}`}
            >
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
