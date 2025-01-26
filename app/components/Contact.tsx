import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white bg-opacity-10 text-white placeholder-blue-200 border-blue-400"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white bg-opacity-10 text-white placeholder-blue-200 border-blue-400"
              />
              <Textarea
                placeholder="Your Message"
                className="w-full bg-white bg-opacity-10 text-white placeholder-blue-200 border-blue-400"
              />
              <Button
                type="submit"
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-purple-300 mr-2" />
              <p className="text-blue-200">bpxailabs@gmail.com</p>
            </div>
            {/* <div className="flex items-center">
              <Phone className="w-6 h-6 text-purple-300 mr-2" />
              <p className="text-blue-200">+1 (555) 123-4567</p>
            </div> */}
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-purple-300 mr-2" />
              <p className="text-blue-200">San Juan City, Philippines 1500</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
