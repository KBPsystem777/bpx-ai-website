import { Mail } from "lucide-react"

import BookAMeetingCTA from "./BookAMeetingCTA"

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
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 text-purple-300 mr-2" />
              <a href="mailto:bpxailabs@gmail.com">
                <p className="text-blue-200 text-xl">bpxailabs@gmail.com</p>
              </a>
            </div>
            <BookAMeetingCTA caption="Book a meeting with us!" />
          </div>
        </div>
      </div>
    </section>
  )
}
