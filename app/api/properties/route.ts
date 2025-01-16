// app/api/properties/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { checkAuth } from '@/lib/auth';

// Handle GET request
export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    return NextResponse.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    return NextResponse.json(
      { error: 'Error fetching properties' }, 
      { status: 500 }
    );
  }
}

// Handle POST request
export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'description', 'price', 'location', 'bedrooms', 'bathrooms', 'area', 'imageUrl'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create property in database
    const property = await prisma.property.create({
      data: {
        title: data.title,
        description: data.description,
        price: parseFloat(data.price),
        location: data.location,
        bedrooms: parseInt(data.bedrooms),
        bathrooms: parseInt(data.bathrooms),
        area: parseInt(data.area),
        imageUrl: data.imageUrl,
        type: data.type || 'house'
      }
    });

    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    console.error('Error creating property:', error);
    return NextResponse.json(
      { error: 'Error creating property' }, 
      { status: 500 }
    );
  }
}

// Handle PUT request
export async function PUT(request: Request) {
  try {
    const data = await request.json();
    
    if (!data.id) {
      return NextResponse.json(
        { error: 'Property ID is required' },
        { status: 400 }
      );
    }

    const property = await prisma.property.update({
      where: { id: data.id },
      data: {
        title: data.title,
        description: data.description,
        price: parseFloat(data.price),
        location: data.location,
        bedrooms: parseInt(data.bedrooms),
        bathrooms: parseInt(data.bathrooms),
        area: parseInt(data.area),
        imageUrl: data.imageUrl,
        type: data.type || 'house'
      }
    });

    return NextResponse.json(property);
  } catch (error) {
    console.error('Error updating property:', error);
    return NextResponse.json(
      { error: 'Error updating property' }, 
      { status: 500 }
    );
  }
}

// Handle DELETE request
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Property ID is required' },
        { status: 400 }
      );
    }

    await prisma.property.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting property:', error);
    return NextResponse.json(
      { error: 'Error deleting property' }, 
      { status: 500 }
    );
  }
}