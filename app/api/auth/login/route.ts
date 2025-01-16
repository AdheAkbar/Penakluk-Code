// app/api/auth/login/route.ts
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Username dan password wajib diisi' },
        { status: 400 }
      )
    }

    // Verifikasi credentials dengan env variables
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = process.env.ADMIN_SECRET_TOKEN
      if (!token) {
        throw new Error('Admin token tidak dikonfigurasi')
      }

      // Set cookie untuk autentikasi
      cookies().set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        // Cookie berlaku selama 24 jam
        maxAge: 60 * 60 * 24,
      })

      return NextResponse.json({ 
        success: true,
        message: 'Login berhasil'
      })
    }

    return NextResponse.json(
      { error: 'Username atau password salah' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Terjadi kesalahan pada server' },
      { status: 500 }
    )
  }
}