'use client'
import PropertyCard from '../components/PropertyCard';
import { useProperties } from '../hooks/userProperties';
import { Search, Home, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

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
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 text-lg font-medium"
        >
          {error}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="absolute inset-0 bg-blue-600 opacity-90">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-20"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 relative"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Temukan Rumah Impian Anda
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-12 font-light">
              Koleksi hunian eksklusif dengan desain modern dan lokasi strategis
            </p>
          </div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 flex items-center space-x-4 border border-white/20">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Cari properti..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/70 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-400 outline-none text-gray-800 placeholder-gray-500 text-lg"
                />
                <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-wrap gap-6 items-center bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="flex items-center">
            <SlidersHorizontal className="h-6 w-6 text-blue-600 mr-3" />
            <span className="text-gray-700 font-semibold text-lg">Filter:</span>
          </div>
          
          <div className="relative">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="appearance-none px-6 py-3 pr-12 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 font-medium bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <option value="all">Semua Harga</option>
              <option value="low">Kurang dari 450.000.000</option>
              <option value="mid">450.000.000 - 1.000.000.000</option>
              <option value="high">Lebih dari 1.000.000.000</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="appearance-none px-6 py-3 pr-12 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700 font-medium bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <option value="all">Semua Tipe</option>
              <option value="tulip">Tulip</option>
              <option value="mawar">Mawar</option>
              <option value="anggrek">Anggrek</option>
              <option value="rafflesia">Rafflesia</option>
              <option value="lily">Lily</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </motion.div>

        {/* Results Counter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex items-center justify-between"
        >
          <div className="flex items-center bg-white px-6 py-3 rounded-xl shadow">
            <Home className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">
              {filteredHouses.length} Properti Tersedia
            </h2>
          </div>
        </motion.div>

        {/* Property Grid */}
        {filteredHouses.length > 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredHouses.map((house, index) => (
              <motion.div
                key={house.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="transform transition-all duration-300 hover:shadow-2xl rounded-2xl"
              >
                <PropertyCard {...house} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-2xl shadow"
          >
            <p className="text-gray-500 text-xl font-medium">
              Tidak ada properti yang sesuai dengan filter yang dipilih.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}