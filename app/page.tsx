import PropertyCard from './components/PropertyCard'
import { properties } from '@/lib/properties'

export default function Home() {
  return (
    <div>
      <div className="relative h-[70vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-75" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Temukan Properti Impian Anda</h1>
            <p className="text-xl">Vaganza Village Solusinya</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Properti Unggulan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties
            .filter((property) => [8, 9, 3].includes(property.id)) // Filter hanya untuk ID 8, 9, dan 3
            .map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}

        </div>
      </div>
    </div>
  )
}
