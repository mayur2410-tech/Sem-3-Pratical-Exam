"use client";
import Link from "next/link";

export default function HotelsPage() {
  const hotels = [
    { id: 1, name: "The Royal Palace", location: "Jaipur" },
    { id: 2, name: "Sea View Resort", location: "Goa" },
    { id: 3, name: "Mountain Bliss", location: "Manali" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">🏨 Hotel Listings</h1>
      <ul className="space-y-4 max-w-xl mx-auto">
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link
              href={`/hotels/${hotel.id}`}
              className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{hotel.name}</h2>
              <p className="text-gray-500">{hotel.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
