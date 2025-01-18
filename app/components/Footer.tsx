import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: projectakbar88@gmail.com</p>
              <p>Phone: (+62) 812-7244-4410</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="/houses" className="hover:text-gray-300">Houses</a></li>
                <li><a href="/about" className="hover:text-gray-300">About</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                <li><a href="/login" className="hover:text-gray-300">Login</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://instagram.com/projectakbar99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  <Instagram size={20} />
                  <span>@vaganza.village</span>
                </a>
              </div>
              <div className="flex space-x-6 mt-3">
                <a 
                  href="https://tiktok.com/@adheakbar" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  {/* Untuk TikTok, kita akan menggunakan SVG langsung karena lucide-react tidak memiliki icon TikTok */}
                  <svg 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    stroke="currentColor" 
                    fill="none" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                  <span>@vaganza.village</span>
                </a>
              </div>
              <div className="flex space-x-6 mt-3">
                <a 
                  href="https://wa.me/6281272444410" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-gray-300"
                >
                  <MessageCircle size={20} />
                  <span>+62 812-7244-4410</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-8">
            <p>© Vaganza Village.</p>
          </div>
        </div>
      </footer>
    )
}