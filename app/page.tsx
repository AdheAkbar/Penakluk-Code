import PropertyCard from './components/PropertyCard'
import { properties } from '@/lib/properties'
import { ArrowRight, Star, Phone, MapPin, Search, ChevronRight, Clock, Shield, Users, Building } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Parallax & Search */}
      <div className="hero relative">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 font-serif animate-fade-in">
            Tempat Tinggal Ideal untuk Masa Depan Anda
          </h1>
          <p className="text-xl leading-relaxed mb-8 font-light">
            Dikelilingi lingkungan hijau yang asri, Vaganza Village adalah pilihan sempurna untuk Anda dan keluarga.
          </p>
          
          {/* Quick Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto mb-8">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Cari lokasi atau tipe rumah..."
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Cari
              </button>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <a href="/houses" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-block">
              Jelajahi Sekarang
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300 inline-block">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">150+</h3>
              <p>Unit Terjual</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">98%</h3>
              <p>Kepuasan Pelanggan</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7</h3>
              <p>Layanan Pelanggan</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15+</h3>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Vaganza Village menawarkan lebih dari sekadar hunian. Kami menciptakan gaya hidup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300 bg-white rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desain Modern</h3>
              <p className="text-gray-600">Arsitektur kontemporer yang memadukan estetika dan fungsionalitas</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300 bg-white rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokasi Strategis</h3>
              <p className="text-gray-600">Akses mudah dan Anti banjir </p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300 bg-white rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Layanan 24/7</h3>
              <p className="text-gray-600">Customer Service Kami Siap Membantu Kapapun </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Properti Unggulan</h2>
            <a href="/houses" className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              Lihat Semua <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties
              .filter((property) => [8, 9, 3].includes(property.id))
              .map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keuntungan Memilih Vaganza Village</h2>
            <p className="text-gray-600">Nikmati berbagai fasilitas dan kemudahan yang kami tawarkan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Keamanan 24 Jam</h3>
              <p className="text-gray-600">Sistem keamanan terintegrasi dengan penjagaan 24 jam</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Komunitas Eksklusif</h3>
              <p className="text-gray-600">Bergabung dengan komunitas yang berkualitas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Respon Cepat</h3>
              <p className="text-gray-600">Layanan maintenance yang responsif</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Star className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fasilitas Premium</h3>
              <p className="text-gray-600">Akses ke berbagai fasilitas premium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tour Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Jelajahi Rumah Impian Anda</h2>
              <p className="text-gray-300 mb-8">Temukan hunian yang dirancang khusus untuk memenuhi setiap kebutuhan dan gaya hidup Anda. Dari desain modern hingga fasilitas eksklusif, setiap detail mencerminkan kenyamanan dan kemewahan</p>
              <a href="/houses"  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Mulai Eksplore      <ChevronRight className="ml-2" />
              </a>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-image.png"
                alt="Virtual Tour Preview"
                width={800}
                height={400}
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}