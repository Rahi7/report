import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Importance of Regular Health Check-ups",
      excerpt:
        "Learn why regular health check-ups are crucial for maintaining good health and preventing diseases.",
      date: "2024-03-15",
      author: "Dr. Sarah Johnson",
    },
    {
      id: 2,
      title: "Understanding Telemedicine",
      excerpt:
        "Discover how telemedicine is revolutionizing healthcare delivery and improving patient access.",
      date: "2024-03-14",
      author: "Dr. Michael Chen",
    },
    {
      id: 3,
      title: "Tips for Managing Chronic Conditions",
      excerpt:
        "Expert advice on effectively managing chronic health conditions for a better quality of life.",
      date: "2024-03-13",
      author: "Dr. Emily Williams",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-10 font-sans text-gray-900">
      {/* Header */}
      <header className="mb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-3 tracking-wide">
          Health & Wellness Blog
        </h1>
        <p className="text-lg text-blue-600 max-w-xl mx-auto">
          Stay informed with the latest health news and medical advancements.
        </p>
      </header>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-5 py-3 rounded-xl border border-blue-200 shadow-sm 
            focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 
            transition placeholder:text-blue-400 text-blue-800 font-medium"
        />
      </div>

      {/* Blog Posts Grid */}
      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md border border-transparent hover:border-blue-600 hover:shadow-lg transition p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                {post.title}
              </h2>
              <p className="text-blue-500">{post.excerpt}</p>
            </div>
            <div className="mt-6 flex justify-between text-sm text-blue-400 font-semibold tracking-wide">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <Link
              to={`/blog/${post.id}`}
              className="mt-6 text-blue-700 font-semibold hover:text-blue-900 border-b-2 border-transparent hover:border-blue-900 transition-all duration-300"
            >
              Read more →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Blog;
