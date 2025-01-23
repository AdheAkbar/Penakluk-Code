'use client'
import PropertyCard from './components/PropertyCard'
import { properties } from '@/lib/properties'
import { ArrowRight, Star, Phone, MapPin, Search, ChevronRight, Clock, Shield, Users, Building } from 'lucide-react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import CountUp from 'react-countup'

export default function HomePage() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true })
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  const features = [
    {
      icon: Building,
      color: 'blue',
      title: 'Desain Modern & Estetik',
      description: 'Setiap sudut rumah dirancang dengan cermat menggunakan konsep arsitektur modern yang timeless.',
      stats: ['Smart Home Ready', 'Cross Ventilation', '90% Ruang Terbuka']
    },
    {
      icon: MapPin,
      color: 'green',
      title: 'Lokasi Premium',
      description: 'Terletak di kawasan elite dengan akses mudah ke berbagai fasilitas penting dan bebas banjir.',
      stats: ['5 Menit ke Tol', '15 Menit ke Pusat Kota', 'Area Bebas Banjir']
    },
    {
      icon: Phone,
      color: 'purple',
      title: 'Layanan 24/7',
      description: 'Tim customer service profesional kami siap membantu Anda kapanpun dengan solusi cepat.',
      stats: ['Respons < 15 Menit', '24/7 Support', 'Smart Monitoring']
    }
  ]

  const benefits = [
    {
      icon: Shield,
      color: 'blue',
      title: 'Keamanan Premium',
      description: 'Sistem keamanan security dan CCTV'
    },
    {
      icon: Users,
      color: 'green',
      title: 'Komunitas',
      description: 'Berada dalam lingkungan harmonis'
    },
    {
      icon: Clock,
      color: 'purple',
      title: 'Respons Cepat',
      description: 'Tim teknisi siap 24/7 dengan waktu respons < 30 menit'
    },
    {
      icon: Star,
      color: 'yellow',
      title: 'Fasilitas Mewah',
      description: 'Material dan Furniture Mewah'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Existing Hero Section */}
      <div className="hero relative min-h-screen">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black bg-opacity-50"
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-32"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          >
            Tempat Tinggal Ideal untuk Masa Depan Anda
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl leading-relaxed mb-8 font-light text-white/90"
          >
            Dikelilingi lingkungan hijau yang asri, Vaganza Village adalah pilihan sempurna untuk Anda dan keluarga.
          </motion.p>
          
          {/* Animated Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-xl max-w-3xl mx-auto mb-12 border border-white/20"
          >
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Cari lokasi atau tipe rumah..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                  />
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Cari
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/houses"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              Jelajahi Sekarang
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition duration-300 border border-white/40 shadow-lg"
            >
              Hubungi Kami
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Existing Statistics Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 150, suffix: '+', label: 'Unit Terjual', delay: 0 },
              { value: 98, suffix: '%', label: 'Kepuasan Pelanggan', delay: 0.2 },
              { value: 24, suffix: '/7', label: 'Layanan Pelanggan', delay: 0.4 },
              { value: 15, suffix: '+', label: 'Tahun Pengalaman', delay: 0.6 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: stat.delay }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <h3 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {isInView && (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                      separator=","
                    />
                  )}
                </h3>
                <p className="text-lg font-light">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>  

      {/* Enhanced Features Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-5xl font-bold mb-4">
              Mengapa <span className="text-blue-600">Vaganza Village</span> Berbeda?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Lebih dari sekadar hunian, kami menciptakan gaya hidup berkualitas untuk Anda dan keluarga
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
              >
                <div className="h-full p-8 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl">
                  <motion.div
                    className={`bg-${feature.color}-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:rotate-6`}
                  >
                    <feature.icon className={`w-10 h-10 text-${feature.color}-600`} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={activeFeature === index ? { height: 'auto', opacity: 1 } : {}}
                    className="space-y-3 overflow-hidden"
                  >
                    {feature.stats.map((stat, statIndex) => (
                      <motion.div
                        key={statIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={activeFeature === index ? { x: 0, opacity: 1 } : {}}
                        transition={{ delay: statIndex * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${feature.color}-500 mr-3`} />
                        {stat}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Featured Properties */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              <span className="text-blue-600">Properti</span> Unggulan
            </h2>
            <motion.a
              whileHover={{ x: 10 }}
              href="/houses"
              className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Lihat Semua <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties
              .filter((property) => [8, 9, 3].includes(property.id))
              .map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <PropertyCard {...property} />
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Enhanced Benefits Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Keuntungan <span className="text-blue-600">Eksklusif</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Nikmati berbagai fasilitas premium untuk kenyamanan maksimal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className={`w-16 h-16 rounded-xl bg-${benefit.color}-100 flex items-center justify-center mb-6`}
                >
                  <benefit.icon className={`w-8 h-8 text-${benefit.color}-600`} />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Virtual Tour Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Jelajahi Rumah Impian Anda
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Temukan hunian yang dirancang khusus untuk memenuhi setiap kebutuhan dan gaya hidup Anda. 
                Dari desain modern hingga fasilitas eksklusif, setiap detail mencerminkan kenyamanan dan kemewahan
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/houses"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg"
              >
                Mulai Eksplore <ChevronRight className="ml-2" />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.2 }}
                className="w-full h-full"
              >
                <Image
                  src="/images/about-image.png"
                  alt="Virtual Tour Preview"
                  width={800}
                  height={400}
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-80 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}