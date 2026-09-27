import { Star } from "lucide-react";

export default function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div
      className={`flex gap-0.5 ${className ?? ""}`}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-sand-500 text-sand-500" : "text-white-300"
          }`}
        />
      ))}
    </div>
  );
}
