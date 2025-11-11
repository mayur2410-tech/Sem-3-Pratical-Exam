"use client";

export default function HotelsWelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-sans">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
        🏨 Welcome to Hotel Explorer
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-center">
        Discover and book the best hotels for your next vacation
      </p>
      <div className="flex space-x-4">
        <a
          href="/hotels"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          View Hotels
        </a>
        <a
          href="/about"
          className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
        >
          About Us
        </a>
      </div>
    </div>
  );
}
