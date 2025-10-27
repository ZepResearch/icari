import { MapPin, Clock, Wifi, Car, Utensils, Camera, Building, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 w-full items-center">
            {/* Left Side Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Logo/Brand */}
            

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-11 mb-4">
                  EXPERIENCE THE
                  <br />
                  <span className="text-orange-500/90 uppercase">FUTURE IN ¸</span>
                </h1>
              </div>

              {/* Venue Card */}
            

              {/* Venue Details */}
              <div className="max-w-sm">
                <h3 className="font-semibold text-gray-900 mb-2">STATE-OF-THE-ART FACILITIES</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4" />
                    <span>Premium Convention Center</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wifi className="w-4 h-4" />
                    <span>High-Speed Internet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Car className="w-4 h-4" />
                    <span>Easy Transportation Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image - Positioned to stick to bottom */}
            <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full">
              <div className="relative">
                <img
                  src="/assets/singapore.png"
                  alt="Conference Technology"
                  className="w-full h-auto min-h-[200px] lg:max-h-[300px] object-contain object-bottom  select-none pointer-events-none " 
                  />
                {/* Decorative elements */}
                </div>
            </div>

            {/* Right Side Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Main Title */}
              <div className="text-right">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                  Malaysia
                  <br />
                  <span className="text-3xl lg:text-4xl font-light text-orange-500/90">Venue</span>
                </h1>
              </div>

              {/* Location Card */}
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-sm">
                <div className="flex items-start space-x-3">
                
                  <div className="text-right">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Located in the heart of Singapore's business district, our venue offers unparalleled access to the
                      city's innovation ecosystem and world-class amenities...
                    </p>
                  </div>
                </div>
              </Card>

              {/* Amenities Card */}
          
            </div>
          </div>
        </div>
      </section>

      {/* Conference Venue Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">Conference Venue</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The venue for RobotechSummit 2025 will be announced soon. We are carefully selecting a world-class location that will provide the perfect setting for this groundbreaking event. Stay tuned for updates on our venue announcement.
            </p>
          </div>

          <div className="relative w-full h-[350px] mb-12 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1579565585608-8394fedcabef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3572" 
              alt="Marina Bay Sands Convention Centre"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  to-transparent flex items-center">
              
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Venue Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Main Auditorium Capacity</span>
                  <span className="font-semibold text-gray-900">1,200 seats</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Exhibition Space</span>
                  <span className="font-semibold text-gray-900">5,000 sqm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Breakout Rooms</span>
                  <span className="font-semibold text-gray-900">12 rooms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Networking Areas</span>
                  <span className="font-semibold text-gray-900">3 levels</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Wheelchair accessible entrances and facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Assistive listening systems available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Braille signage and tactile guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Dedicated accessibility support staff</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location with Google Map Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Location</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Venue</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">Kuala Lumpur, Malaysia </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Operating Hours</p>
                      <p className="text-gray-600">24/7 during conference days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-orange-500 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Transportation</p>
                      <p className="text-gray-600">5 minutes from Bayfront MRT Station</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting There</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">From Changi Airport</p>
                    <p className="text-gray-600">30 minutes by taxi or MRT (East West Line to Bayfront)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">By MRT</p>
                    <p className="text-gray-600">Bayfront Station (Circle & Downtown Lines) - 5 min walk</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">By Car</p>
                    <p className="text-gray-600">Valet parking available, self-parking at Venue</p>
                  </div>
                </div>
              </Card>
            </div>


            <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interactive Map</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59313.55594260631!2d101.64993908795587!3d3.137023714149642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1761281310912!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marina Bay Sands Location"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
     {/* Nearby Attractions Section */}
<section className="relative z-10 py-20 bg-white/50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">
      Nearby Attractions
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Petronas Twin Towers */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1472017053394-b29fded587cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3570"
          alt="Petronas Twin Towers"
          className="h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Petronas Twin Towers</h3>
        <p className="text-gray-600 mb-3">
          Kuala Lumpur’s most iconic landmark featuring a sky bridge and stunning city views.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          
        </div>
      </Card>

      {/* KL Tower */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1496031304571-f63558898308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3570"
          alt="KL Tower"
          className="h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">KL Tower (Menara Kuala Lumpur)</h3>
        <p className="text-gray-600 mb-3">
          Observation tower offering panoramic views of the city skyline and a revolving restaurant.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          
        </div>
      </Card>

      {/* Batu Caves */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1589304122321-2344bad22557?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3174"
          alt="Batu Caves"
          className="h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Batu Caves</h3>
        <p className="text-gray-600 mb-3">
          Famous limestone hill with colorful temples and a giant golden Lord Murugan statue.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          
        </div>
      </Card>

      {/* Bukit Bintang */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1712601979098-15dccb4d0996?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3570"
          alt="Bukit Bintang"
          className="h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Bukit Bintang</h3>
        <p className="text-gray-600 mb-3">
          Kuala Lumpur’s shopping and entertainment district, filled with malls, cafes, and nightlife.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          
        </div>
      </Card>

      {/* Central Market */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1695782332230-27790b9490b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3570"
          alt="Central Market Kuala Lumpur"
          className="h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Central Market</h3>
        <p className="text-gray-600 mb-3">
          Vibrant heritage market showcasing Malaysian crafts, souvenirs, and local delicacies.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          
        </div>
      </Card>

      {/* Merdeka Square */}
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1663237155810-a292cca8fe47?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3570"
          alt="Merdeka Square"
          className="h-[300px] object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Merdeka Square</h3>
        <p className="text-gray-600 mb-3">
          Historical square surrounded by colonial buildings where Malaysia declared independence.
        </p>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          
        </div>
      </Card>
    </div>
  </div>
</section>

      {/* Dining Options Section */}
      {/* <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Dining Options</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <Utensils className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fine Dining</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">CÉ LA VIE</h4>
                  <p className="text-sm text-gray-600">Contemporary cuisine with stunning city views</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Waku Ghin</h4>
                  <p className="text-sm text-gray-600">Japanese-European fusion by celebrity chef Tetsuya Wakuda</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <Utensils className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Casual Dining</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Food Court at The Shoppes</h4>
                  <p className="text-sm text-gray-600">Diverse international cuisine options</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-3 h-3 text-gray-300" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lavo Italian Restaurant</h4>
                  <p className="text-sm text-gray-600">Modern Italian cuisine in a vibrant atmosphere</p>
                  <div className="flex items-center space-x-1 mt-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-3 h-3 text-gray-300" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Cuisine</h3>
              <p className="text-gray-600 text-sm">
                Experience authentic Singaporean dishes at nearby hawker centers and local restaurants.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Options</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock dining available at the hotel and nearby establishments for your convenience.
              </p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-teal-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Special Dietary</h3>
              <p className="text-gray-600 text-sm">
                Vegetarian, vegan, halal, and other dietary requirements accommodated at most venues.
              </p>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Ready to Join Us CTA Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Us?</h2>
              <p className="text-xl mb-8 opacity-90">
                Experience the future of AI and robotics in one of the world's most innovative cities. We
                offers the perfect backdrop for groundbreaking discoveries and meaningful connections.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Prime Location</h3>
                  <p className="text-sm opacity-90">Heart of Singapore's business and innovation district</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <Building className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">World-Class Venue</h3>
                  <p className="text-sm opacity-90">State-of-the-art facilities and premium amenities</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-lg p-4">
                  <Star className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Unforgettable Experience</h3>
                  <p className="text-sm opacity-90">Combine learning with Singapore's attractions and culture</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/registration" >
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                <Link href="/schedule">
                <Button
                  size="lg"
                    className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8"                >
                  View schedule
                </Button>
                </Link>


              </div>

             
            </div>
          </Card>
        </div>
      </section>

      {/* Background decorative elements */}
    
    </div>
  )
}
