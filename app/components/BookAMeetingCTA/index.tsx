import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BookAMeetingCTAProps {
  caption: string
}

const BookAMeetingCTA: React.FC<BookAMeetingCTAProps> = ({ caption }) => {
  return (
    <div className="flex items-center justify-center pt-3">
      <Link href="https://calendly.com/bpxailabs/30min" target="_blank">
        <Button
          className="text-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-blue-300 focus:outline-none"
          variant={"default"}
          size={"lg"}
        >
          {caption}
        </Button>
      </Link>
    </div>
  )
}

export default BookAMeetingCTA
