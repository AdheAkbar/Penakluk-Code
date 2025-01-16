// components/PropertyForm.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface PropertyFormData {
  id?: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type?: string;
}

interface PropertyFormProps {
  property?: PropertyFormData;
  isEdit?: boolean;
}

export default function PropertyForm({ property, isEdit = false }: PropertyFormProps) {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PropertyFormData>({
    defaultValues: property || {
      title: '',
      description: '',
      price: 0,
      location: '',
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      imageUrl: '',
      type: 'house'
    }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (data: PropertyFormData) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/properties', {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          id: property?.id, // Include ID for updates
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save property');
      }

      // Reset form on successful submission if it's a new property
      if (!isEdit) {
        reset();
      }

      // Redirect to admin page
      router.push('/admin');
      router.refresh();
    } catch (error) {
      console.error('Error saving property:', error);
      setError(error instanceof Error ? error.message : 'Failed to save property');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Properti
            </label>
            <input
              type="text"
              {...register('title', { 
                required: 'Judul properti wajib diisi',
                minLength: {
                  value: 3,
                  message: 'Judul minimal 3 karakter'
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Contoh: Rumah Type A Tulip"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              {...register('description', { 
                required: 'Deskripsi wajib diisi',
                minLength: {
                  value: 10,
                  message: 'Deskripsi minimal 10 karakter'
                }
              })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Deskripsikan properti secara detail..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Harga
              </label>
              <input
                type="number"
                {...register('price', { 
                  required: 'Harga wajib diisi',
                  min: {
                    value: 0,
                    message: 'Harga tidak boleh negatif'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Masukkan harga"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lokasi
              </label>
              <input
                type="text"
                {...register('location', { 
                  required: 'Lokasi wajib diisi'
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Contoh: Bandar Lampung"
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah Kamar Tidur
              </label>
              <input
                type="number"
                {...register('bedrooms', { 
                  required: 'Jumlah kamar tidur wajib diisi',
                  min: {
                    value: 1,
                    message: 'Minimal 1 kamar tidur'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.bedrooms && (
                <p className="mt-1 text-sm text-red-600">{errors.bedrooms.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Jumlah Kamar Mandi
              </label>
              <input
                type="number"
                {...register('bathrooms', { 
                  required: 'Jumlah kamar mandi wajib diisi',
                  min: {
                    value: 1,
                    message: 'Minimal 1 kamar mandi'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.bathrooms && (
                <p className="mt-1 text-sm text-red-600">{errors.bathrooms.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Luas Area (m²)
              </label>
              <input
                type="number"
                {...register('area', { 
                  required: 'Luas area wajib diisi',
                  min: {
                    value: 1,
                    message: 'Luas area harus lebih dari 0'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.area && (
                <p className="mt-1 text-sm text-red-600">{errors.area.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL Gambar
              </label>
              <input
                type="text"
                {...register('imageUrl', { 
                  required: 'URL gambar wajib diisi',
                  pattern: {
                    value: /^\/images\/.+/i,
                    message: 'URL gambar harus dimulai dengan /images/'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="/images/nama-file.jpg"
              />
              {errors.imageUrl && (
                <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Menyimpan...' : isEdit ? 'Update Properti' : 'Tambah Properti'}
          </button>
          <Link
            href="/admin"
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 text-center transition-colors"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
}