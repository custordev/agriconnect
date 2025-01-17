import { Star } from "lucide-react";

export function ProductReviews() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="flex items-center gap-4">
        <div className="text-4xl font-bold">{5}</div>
        <div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(5)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600">Based on 15 reviews</div>
        </div>
      </div>
      {/* Add more detailed review content here */}
    </div>
  );
}
