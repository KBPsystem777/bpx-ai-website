import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-purple-900 bg-opacity-80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {
            <Image
              src="/bpx-icon.png"
              alt="BPxAI Logo"
              width={40}
              height={40}
            />
          }
          <span className="ml-2 text-2xl font-bold text-white">BPxAI</span>
        </Link>
        {/* <nav>
          <ul className="flex space-x-4">
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
        </nav> */}

        <Link href="#services" className="text-blue-200 hover:text-white">
          <Button
            variant="outline"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  )
}
