// components/PropertyCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

interface PropertyCardProps {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  description: string;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  description
}: PropertyCardProps) {
  // Memastikan imageUrl dimulai dengan "/"
  const imageSrc = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;

  // Convert price to IDR
  const formatToRupiah = (value: number): string => {
    const priceInIDR = value * 1; 
    return new Intl.NumberFormat('id-ID', { 
      style: 'currency', 
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(priceInIDR);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-lg font-bold text-white">
              {formatToRupiah(price)}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 text-blue-600 mr-2" />
          <span>{location}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Bed className="h-5 w-5 text-blue-600 mr-2" />
            <span>{bedrooms} Kamar</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath className="h-5 w-5 text-blue-600 mr-2" />
            <span>{bathrooms} K.Mandi</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square className="h-5 w-5 text-blue-600 mr-2" />
            <span>{area} m²</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`https://wa.me/6281272444410?text=Halo,%20saya%20tertarik%20dengan%20properti%20${title}%20dengan%20harga%20${formatToRupiah(price)}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors duration-300 block"
        >
          Hubungi Agen
        </Link>
      </div>
    </div>
  );
}