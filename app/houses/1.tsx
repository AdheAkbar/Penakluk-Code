import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const property = await prisma.property.findUnique({
      where: { id: Number(id) },
    });

    if (!property) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        property, // Properti yang dikirimkan ke komponen
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch property data',
      },
    };
  }
};

export default function PropertyDetail({ property }: { property: Property }) {
  if (!property) {
    return <div>Properti tidak ditemukan !</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="rounded-lg w-full"
      />
      <h1 className="text-4xl font-bold text-gray-900 mt-4">{property.title}</h1>
      <p className="text-xl text-gray-700 mt-2">${property.price.toLocaleString()}</p>
      <p className="mt-4 text-gray-600">{property.location}</p>
      <div className="mt-4 flex justify-between text-gray-500">
        <span>{property.bedrooms} kamar</span>
        <span>{property.bathrooms} kamar mandi</span>
        <span>{property.area} sqft</span>
      </div>
    </div>
  );
}
