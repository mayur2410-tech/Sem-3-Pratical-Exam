"use client";
import { useParams, useRouter } from "next/navigation";

export default function HotelDetailsPage() {
  const { hotelId } = useParams();
  const router = useRouter();

  const hotels = [
    { id: 1, name: "The Royal Palace", location: "Jaipur", price: "₹8,000", rating: "4.5/5", image: "/images/royal-palace.jpg" },
    { id: 2, name: "Sea View Resort", location: "Goa", price: "₹10,500", rating: "4.7/5", image: "/images/sea-view.jpg" },
    { id: 3, name: "Mountain Bliss", location: "Manali", price: "₹7,200", rating: "4.6/5", image: "/images/mountain-bliss.jpg" },
  ];

  const hotel = hotels.find((h) => h.id === Number(hotelId));

  if (!hotel) {
    return <h2 className="p-8 text-xl text-center text-gray-600">Hotel not found 😕</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden">
        {hotel.image && (
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-60 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-3 text-gray-800">{hotel.name}</h1>
          <p className="mb-2 text-gray-600"><strong>Location:</strong> {hotel.location}</p>
          <p className="mb-2 text-gray-600"><strong>Price:</strong> {hotel.price}</p>
          <p className="mb-4 text-gray-600"><strong>Rating:</strong> {hotel.rating}</p>

          <button
            onClick={() => router.push("/hotels")}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            ← Back to Hotels
          </button>
        </div>
      </div>
    </div>
  );
}
