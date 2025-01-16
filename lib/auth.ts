import { cookies } from 'next/headers'

export const checkAuth = () => {
  const token = cookies().get('admin_token')
  return token?.value === process.env.ADMIN_SECRET_TOKEN
}

export const requireAuth = async () => {
  if (!checkAuth()) {
    throw new Error('Unauthorized')
  }
}