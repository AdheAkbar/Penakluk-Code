'use client'
import Image from 'next/image'
import { Heart, Shield, Home, Star, Users, Clock, MapPin, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section with Parallax */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black opacity-60"
          >
            <Image
              src="/images/BN.JPG"
              alt="About Hero"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-full flex items-center justify-center text-center"
        >
          <div className="max-w-4xl px-4">
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              Tentang Vaganza Village
            </h1>
            <p className="text-2xl text-white opacity-90 font-light">
              Membangun Masa Depan, Ciptakan Suasana yang Aman dan Nyaman
            </p>
          </div>
        </motion.div>
      </div>

      {/* Vision & Mission Section with Floating Elements */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-20 items-center"
          >
            <div className="relative h-[600px] w-full">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-2xl transform -translate-x-6 -translate-y-6"
              />
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/112.jpeg"
                  alt="Our Vision"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>
            <div>
              <motion.h2 
                {...fadeIn}
                className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
              >
                Visi & Misi Kami
              </motion.h2>
              <motion.p 
                {...fadeIn}
                className="text-xl text-gray-600 mb-12 leading-relaxed"
              >
                Perumahan yang mengusung sistem cluster di kawasan strategis Bandar Lampung 
                menjadi pilihan tepat untuk hunian keluarga dengan kemudahan aksesibilitas. 
                Kami berkomitmen menciptakan lingkungan yang nyaman, aman, dan berkelanjutan.
              </motion.p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Heart, title: 'Kualitas', desc: 'Standar tertinggi dalam konstruksi' },
                  { icon: Shield, title: 'Keamanan', desc: '24/7 sistem keamanan terpadu' },
                  { icon: Users, title: 'Komunitas', desc: 'Lingkungan ramah keluarga' },
                  { icon: MapPin, title: 'Lokasi', desc: 'Akses strategis ke pusat kota' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group hover:bg-white hover:shadow-lg p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section with Hover Effects */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
              Keunggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Kami menawarkan properti di lokasi strategis dengan desain modern yang nyaman dan estetis. Dilengkapi fasilitas premium, seperti ruang hijau, area olahraga, dan keamanan 24/7, memastikan kenyamanan dan kemewahan Anda.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Desain Modern',
                description: 'Estetika dan fungsionalitas di setiap sudut. Properti kami dirancang dengan sentuhan modern yang memadukan keindahan arsitektur masa kini dengan kenyamanan maksimal untuk mendukung gaya hidup Anda yang dinamis'
              },
              {
                icon: Star,
                title: 'Fasilitas Premium',
                description: 'Kami menghadirkan fasilitas terbaik untuk memenuhi setiap kebutuhan Anda. Mulai dari ruang hijau yang asri hingga teknologi pintar yang canggih, semua dirancang untuk memberikan pengalaman hidup yang eksklusif'
              },
              {
                icon: Award,
                title: 'Investasi Terbaik',
                description: 'Langkah cerdas Anda menuju masa depan yang gemilang. Dengan lokasi strategis, nilai properti yang terus meningkat, dan prospek pertumbuhan yang menjanjikan, ini adalah investasi yang tidak hanya memberikan keuntungan, tetapi juga keamanan untuk generasi mendatang'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section with Card Hover Effects */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600">Profesional berpengalaman yang siap membantu Anda</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Adhe',
                role: 'Agent',
                image: '/images/deh.jpg'
              },
              {
                name: 'Rhivo',
                role: 'Agent',
                image: '/images/po.jpg'
              },
              {
                name: 'Wahyu',
                role: 'Agent',
                image: '/images/yu.jpeg'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative w-56 h-56 mx-auto mb-8 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-6">{member.role}</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/6281272444410?text=Halo,%20saya%20ingin%20berkonsultasi%20dengan%20${member.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Hubungi {member.name}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Siap untuk memiliki hunian impian Anda?
          </motion.h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Hubungi Kami
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}