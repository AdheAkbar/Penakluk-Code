// app/houses/page.tsx
'use client'
import PropertyCard from '../components/PropertyCard';
import { useProperties } from '../hooks/userProperties';
import { Search, Home, SlidersHorizontal } from 'lucide-react';

export default function Houses() {
  const {
    properties: filteredHouses,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    priceRange,
    setPriceRange,
    propertyType,
    setPropertyType,
  } = useProperties();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Temukan Rumah Impian Anda</h1>
            <p className="text-xl opacity-90 mb-8">Koleksi hunian eksklusif dengan desain modern dan lokasi strategis</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Cari properti..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-800"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 items-center">
          <div className="flex items-center">
            <SlidersHorizontal className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filter:</span>
          </div>
          
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          >
            <option value="all">Semua Harga</option>
            <option value="low">Kurang dari 450.000.000</option>
            <option value="mid">450.000.000 - 1.000.000.000</option>
            <option value="high">Lebih dari 1.000.000.000</option>
          </select>

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
          >
            <option value="all">Semua Tipe</option>
            <option value="tulip">Tulip</option>
            <option value="mawar">Mawar</option>
            <option value="anggrek">Anggrek</option>
            <option value="rafflesia">Rafflesia</option>
            <option value="lily">Lily</option>
          </select>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <Home className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredHouses.length} Properti Tersedia
            </h2>
          </div>
        </div>

        {/* Property Grid */}
        {filteredHouses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHouses.map(house => (
              <PropertyCard key={house.id} {...house} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Tidak ada properti yang sesuai dengan filter yang dipilih.</p>
          </div>
        )}
      </div>
    </div>
  );
}