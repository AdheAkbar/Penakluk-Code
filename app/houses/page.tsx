import PropertyCard from '../components/PropertyCard';
import { properties } from '@/lib/properties';

export default function Houses() {
  const houses = properties.filter(property => property.type === 'house');
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Vaganza List :</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {houses.map(house => (
          <PropertyCard key={house.id} {...house} />
        ))}
      </div>
    </div>
  );
}
