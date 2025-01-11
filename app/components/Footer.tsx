// components/Footer.tsx
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
              <h3 className="text-lg font-semibold mb-4"></h3>
              <ul>
                <li><a href="/houses" className="hover:text-gray-300">Houses</a></li>
                <li><a href="/about" className="hover:text-gray-300">About</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
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