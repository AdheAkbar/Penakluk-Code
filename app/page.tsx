import PropertyCard from './components/PropertyCard'
import { properties } from '@/lib/properties'
import { ArrowRight, Star, Phone } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div className="hero relative">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 font-serif">
            Tempat Tinggal Ideal untuk Masa Depan Anda
          </h1>
          <p className="text-xl leading-relaxed mb-8 font-light">
            Dikelilingi lingkungan hijau yang asri, Vaganza Village adalah pilihan sempurna untuk Anda dan keluarga. 
            Kami menciptakan kawasan perumahan yang dirancang dengan memperhatikan setiap detail kenyamanan dan kualitas hidup penghuninya.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/houses" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300 inline-block">
              Jelajahi Sekarang
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300 inline-block">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Vaganza Village menawarkan lebih dari sekadar hunian. Kami menciptakan gaya hidup.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                
              </div>
              <h3 className="text-xl font-semibold mb-2">Desain Modern</h3>
              <p className="text-gray-600">Arsitektur kontemporer yang memadukan estetika dan fungsionalitas</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lokasi Strategis</h3>
              <p className="text-gray-600">Akses mudah ke berbagai fasilitas publik dan area komersial</p>
            </div>
            <div className="text-center p-6 hover:transform hover:scale-105 transition duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Layanan 24/7</h3>
              <p className="text-gray-600">Tim support kami siap membantu Anda kapan saja</p>
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
    </div>
  )
}