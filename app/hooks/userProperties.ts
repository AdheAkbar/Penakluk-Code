// hooks/useProperties.ts
import { useState, useEffect } from 'react';

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  type: string;
}

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [propertyType, setPropertyType] = useState('all');

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties');
      if (!response.ok) throw new Error('Failed to fetch properties');
      const data = await response.json();
      setProperties(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch properties');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && property.price < 45000) ||
                        (priceRange === 'mid' && property.price >= 45000 && property.price < 100000) ||
                        (priceRange === 'high' && property.price >= 100000);
    const matchesType = propertyType === 'all' || 
                       property.title.toLowerCase().includes(propertyType.toLowerCase());

    return matchesSearch && matchesPrice && matchesType;
  });

  return {
    properties: filteredProperties,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    priceRange,
    setPriceRange,
    propertyType,
    setPropertyType,
    refreshProperties: fetchProperties,
  };
}