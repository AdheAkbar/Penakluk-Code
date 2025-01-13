import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const property = await prisma.property.findUnique({
    where: {
      id: parseInt(params.id)
    }
  })
  return NextResponse.json(property)
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await request.json()
  const property = await prisma.property.update({
    where: {
      id: parseInt(params.id)
    },
    data: data
  })
  return NextResponse.json(property)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const property = await prisma.property.delete({
    where: {
      id: parseInt(params.id)
    }
  })
  return NextResponse.json(property)
}