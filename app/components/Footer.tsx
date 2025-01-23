import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">BPxAI</h3>
            <p className="text-blue-200">Empowering businesses with cutting-edge AI solutions</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-blue-200 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#tools" className="text-blue-200 hover:text-white">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-blue-200 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <LinkedIn className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-200">
          <p>&copy; 2023 BPxAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

