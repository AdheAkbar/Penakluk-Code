  import { NextResponse } from 'next/server';
  import prisma from '@/lib/prisma';

  export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      const property = await prisma.property.findUnique({
        where: {
          id: parseInt(params.id)
        }
      });
      
      if (!property) {
        return NextResponse.json(
          { error: 'Property not found' }, 
          { status: 404 }
        );
      }
      
      return NextResponse.json(property);
    } catch (error) {
      return NextResponse.json(
        { error: 'Error fetching property' }, 
        { status: 500 }
      );
    }
  }

  export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      const data = await request.json();
      const property = await prisma.property.update({
        where: {
          id: parseInt(params.id)
        },
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
      return NextResponse.json(
        { error: 'Error updating property' }, 
        { status: 500 }
      );
    }
  }

  export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      await prisma.property.delete({
        where: {
          id: parseInt(params.id)
        }
      });
      return NextResponse.json({ message: 'Property deleted successfully' });
    } catch (error) {
      return NextResponse.json(
        { error: 'Error deleting property' }, 
        { status: 500 }
      );
    }
  }