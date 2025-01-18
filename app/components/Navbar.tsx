// components/Navbar.tsx
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { LogIn, LogOut } from 'lucide-react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  // Cek status login berdasarkan cookie
  useEffect(() => {
    const checkAuth = () => {
      const cookies = document.cookie.split(';');
      const hasAdminToken = cookies.some(cookie => 
        cookie.trim().startsWith('admin_token=')
      );
      setIsLoggedIn(hasAdminToken);
    };

    checkAuth();
  }, [pathname]);

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        setIsLoggedIn(false);
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-blue-600">
            Vaganza Village
          </Link>
          <div className="flex space-x-8 items-center">
            <Link href="/" 
              className={`text-gray-700 hover:text-blue-600 ${
                pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
            </Link>
            <Link href="/houses" 
              className={`text-gray-700 hover:text-blue-600 ${
                pathname === '/houses' ? 'text-blue-600' : ''
              }`}
            >
              Houses
            </Link>
            <Link href="/about" 
              className={`text-gray-700 hover:text-blue-600 ${
                pathname === '/about' ? 'text-blue-600' : ''
              }`}
            >
              About Us
            </Link>
            <Link href="/contact" 
              className={`text-gray-700 hover:text-blue-600 ${
                pathname === '/contact' ? 'text-blue-600' : ''
              }`}
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link href="/admin" 
                  className={`text-gray-700 hover:text-blue-600 ${
                    pathname === '/admin' ? 'text-blue-600' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <LogIn className="h-5 w-5 mr-1" />
                 Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}