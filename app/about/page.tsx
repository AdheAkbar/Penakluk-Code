// app/about/page.tsx
'use client'
import Image from 'next/image'
import { Heart, Shield, Home, Star, Users, Clock, MapPin, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="/images/BN.JPG"
            alt="About Hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Tentang Vaganza Village</h1>
            <p className="text-xl text-white opacity-90">Membangun Masa Depan,Ciptakan Suasana yang Aman dan Nyaman </p>
          </div>
        </div>
      </div>
{/* Vision & Mission Section */}
<div className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative h-[500px] w-full">
        {/* Background decorative box */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-100 rounded-lg transform -translate-x-4 -translate-y-4"></div>
        {/* Image container */}
        <div className="relative h-full w-full">
          <Image
            src="/images/BN.JPG"
            alt="Our Vision"
            fill
            className="object-cover rounded-lg shadow-xl"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-6">Visi & Misi Kami</h2>
        <p className="text-lg text-gray-600 mb-8">
          Perumahan yang mengusung sistem cluster di kawasan strategis Bandar Lampung 
          menjadi pilihan tepat untuk hunian keluarga dengan kemudahan aksesibilitas. 
          Kami berkomitmen menciptakan lingkungan yang nyaman, aman, dan berkelanjutan.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Heart, title: 'Kualitas', desc: 'Standar tertinggi dalam konstruksi' },
            { icon: Shield, title: 'Keamanan', desc: '24/7 sistem keamanan terpadu' },
            { icon: Users, title: 'Komunitas', desc: 'Lingkungan ramah keluarga' },
            { icon: MapPin, title: 'Lokasi', desc: 'Akses strategis ke pusat kota' }
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Keunggulan Kami</h2>
            <p className="text-xl text-gray-600">"Kami menawarkan properti di lokasi strategis dengan desain modern yang nyaman dan estetis. Dilengkapi fasilitas premium, seperti ruang hijau, area olahraga, dan keamanan 24/7, memastikan kenyamanan dan kemewahan Anda.

Sebagai investasi menguntungkan, properti kami dirancang dengan material berkualitas dan didukung oleh layanan profesional, menciptakan lingkungan ramah keluarga untuk masa depan yang bahagia dan aman.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: 'Desain Modern',
                description: 'Etetika dan fungsionalitas di setiap sudut. Properti kami dirancang dengan sentuhan modern yang memadukan keindahan arsitektur masa kini dengan kenyamanan maksimal untuk mendukung gaya hidup Anda yang dinamis'
              },
              {
                icon: Star,
                title: 'Fasilitas Premium',
                description: 'Kami menghadirkan fasilitas terbaik untuk memenuhi setiap kebutuhan Anda. Mulai dari ruang hijau yang asri hingga teknologi pintar yang canggih, semua dirancang untuk memberikan pengalaman hidup yang eksklusif dan tak tertandingi'
              },
              {
                icon: Award,
                title: 'Investasi Terbaik',
                description: 'Langkah cerdas Anda menuju masa depan yang gemilang. Dengan lokasi strategis, nilai properti yang terus meningkat, dan prospek pertumbuhan yang menjanjikan, ini adalah investasi yang tidak hanya memberikan keuntungan, tetapi juga keamanan untuk generasi mendatang'
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600">Profesional berpengalaman yang siap membantu Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <div key={index} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <a
                  href={`https://wa.me/6281272444410?text=Halo,%20saya%20ingin%20berkonsultasi%20dengan%20${member.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  Hubungi {member.name}
                </a>
              </div>
            ))}
          </div>

          {/* Centered Contact Button */}
          
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Siap untuk memiliki hunian impian Anda?
          </h2>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  )
}