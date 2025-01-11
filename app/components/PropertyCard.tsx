// components/PropertyCard.tsx
import Link from 'next/link'
import Image from 'next/image'

interface PropertyCardProps {
  id: number
  title: string
  price: number
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  imageUrl: string
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  imageUrl
}: PropertyCardProps) {
  // Fungsi untuk mengonversi harga ke Rupiah
  const formatToRupiah = (value: number): string => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value)
  }

  // Konversi harga dari USD ke IDR (contoh kurs: 1 USD = 15,000 IDR)
  const priceInIDR = price * 15000

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-xl font-bold text-blue-600 mt-2">
          {formatToRupiah(priceInIDR)}
        </p>
        <div className="flex justify-between mt-4 text-gray-500">
          <span>{bedrooms} KAMAR TIDUR</span>
          <span>{bathrooms} KAMAR MANDI</span>
          <span>{area} sqft</span>
        </div>
        <Link
          href={`https://wa.me/6281272444410?text=Halo,%20saya%20tertarik%20dengan%20properti%20${title}%20lokasi%20di%20${location}.`}
          target="_blank" // Membuka link di tab baru
          rel="noopener noreferrer" // Keamanan tambahan untuk link eksternal
          className="mt-4 block w-full text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Konsultasi ke WA
        </Link>
      </div>
    </div>
  )
}
