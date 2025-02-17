
export function GrowthCard({ imageSrc, description }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img
        src={imageSrc}
        alt={description}
        className="w-full h-64 object-cover"
      />
      <p className="p-4 text-gray-700 text-sm">{description}</p>
    </div>
  );
}
