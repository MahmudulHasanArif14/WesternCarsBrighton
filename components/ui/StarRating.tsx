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
          className={`w-4 h-4 ${i < rating ? "fill-accent-400 text-accent-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}
