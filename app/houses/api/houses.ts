import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        // Mendapatkan semua rumah
        const houses = await prisma.property.findMany({
          where: { type: 'house' },
        });
        res.status(200).json(houses);
        break;

      case 'POST':
        // Menambahkan rumah baru
        const newHouse = await prisma.property.create({
          data: req.body, // Pastikan body berisi data sesuai
        });
        res.status(201).json(newHouse);
        break;

      case 'PUT':
        // Mengupdate data rumah
        const updatedHouse = await prisma.property.update({
          where: { id: req.body.id }, // Pastikan ada ID untuk dicari
          data: req.body,
        });
        res.status(200).json(updatedHouse);
        break;

      case 'DELETE':
        // Menghapus rumah berdasarkan ID
        await prisma.property.delete({
          where: { id: req.body.id },
        });
        res.status(204).end(); // Tidak perlu mengembalikan data
        break;

      default:
        res.status(405).json({ message: 'Method not allowed' });
        break;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
}
