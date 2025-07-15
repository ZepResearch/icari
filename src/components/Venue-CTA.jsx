import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

export default function CTAVenueCard() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-gray-50 rounded-xl overflow-hidden my-12">
      <div className="flex flex-col md:flex-row border-2">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-50 ">
          <div className="relative w-full h-[300px] md:h-[350px]">
            <Image src="/Cta-venue.png" alt="Marina Bay Sands Convention Centre" fill style={{ objectFit: "contain" }} priority />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience Innovation at Marina Bay Sands
          </h2>
          <p className="text-gray-500 mb-6">
            Join us at Singapore's iconic Marina Bay Sands Convention Centre for an immersive conference experience. 
            State-of-the-art facilities, stunning views, and world-class amenities await you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link href={'/venue'}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
              View Venue Details
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            </Link>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span> Singapore,[Detail venue will declare soon]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
