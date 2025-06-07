import { Play, Calendar, MapPin, Users, Zap, Brain, Rocket, ArrowRight, RocketIcon, Award, Lightbulb, Globe, Building, GraduationCap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function RobotechSummitPage() {
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
      
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-10 mb-4">
            STEP INTO THE
            <br />
            <span className="text-orange-500/90">FUTURE OF AI</span>
          </h1>
        </div>


        {/* Conference Details */}
        <div className="max-w-sm">
          <h3 className="font-semibold text-gray-900 mb-2">International Conference on
          AI & Robotics Innovation</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>November 14<sup>th</sup> - 15<sup>th</sup>, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Singapore</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Image - Fixed for mobile visibility */}
      <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full order-last lg:order-none">
        <div className="relative w-full max-w-xs lg:max-w-none">
          <img 
            src="/assets/vr-headset.png" 
            alt="VR Technology" 
            className="w-full h-auto min-h-[200px] lg:max-h-[280px] object-contain object-bottom  select-none pointer-events-none " 
          />
          {/* Decorative elements */}
        </div>
      </div>

      {/* Right Side Content */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        {/* Main Title */}
        <div className="text-right">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-none">
            Robotech<span className="text-orange-500/90">Summit</span>
            <br />
            <span className="text-3xl lg:text-4xl font-light text-orange-600">2025</span>
          </h1>
        </div>

        {/* Conference Info Card */}
        <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-sm">
          <div className="flex items-start space-x-3">
            
            <div className="text-right">
              <p className="text-xs text-gray-600 leading-relaxed">
                Join leading experts, researchers, and innovators as they explore the cutting-edge developments in
                artificial intelligence and robotics technology.
              </p>
            </div>
          </div>
        </Card>

        {/* Robot Card */}
        {/* <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-xs">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-teal-400 to-yellow-400 flex items-center justify-center">
              <img src="/assets/cute-robot.png" alt="Conference Mascot" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="font-semibold text-sm text-gray-900 mb-1">Tech Showcase</h3>
            <p className="text-xs text-gray-600">Latest Innovations</p>
          </div>
        </Card> */}
      </div>
    </div>
  </div>
</section>

      {/* About the Conference Section */}
      <section className="relative z-10 py-12 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif max-w-2xl mx-auto">Robotech<span className="text-orange-500">Summit</span> 2025 – The Pinnacle of AI & Robotics</h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center">
            RobotechSummit 2025 is the world’s leading conference uniting the brightest minds in artificial intelligence and robotics. Across two action-packed days, we’ll dive into cutting-edge research, revolutionary applications, and the future of seamless human-machine collaboration. Get ready to witness innovation that’s shaping the world of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Brain className="w-8 h-8 text-orange-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">AI Research</h3>
              <p className="text-gray-600">Latest breakthroughs in machine learning and neural networks</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Zap className="w-8 h-8 text-orange-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Innovation</h3>
              <p className="text-gray-600">Cutting-edge robotics applications across industries</p>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg text-center">
              <Users className="w-8 h-8 text-orange-500 mx-auto " />
              <h3 className="text-xl font-semibold text-gray-900 ">Networking</h3>
              <p className="text-gray-600">Connect with global leaders and emerging talents</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative z-10 py-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
            <div className="">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-serif">Our Mission</h2>
              <p className="text-md text-gray-600 mb-6 leading-relaxed">
                To accelerate the responsible development and deployment of AI and robotics technologies that benefit
                humanity. We believe in fostering collaboration between researchers, industry leaders, and policymakers
                to shape a future where intelligent machines enhance human potential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Promote ethical AI development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Bridge academia and industry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-semibold">Inspire the next generation</span>
                </div>
              </div>
            </div>
            
              <div className="text-center">
                <img src="/assets/robot-brain.png" alt="Mission" className="w-full h-auto min-h-[450px] lg:max-h-[280px] object-contain object-bottom  select-none pointer-events-none " />

              </div>
            
          </div>
        </div>
      </section>

      {/* Conference Highlights Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Conference Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">30+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Speakers</h3>
                <p className="text-sm text-gray-600">Industry leaders and researchers</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Tech Demos</h3>
                <p className="text-sm text-gray-600">Live robotics demonstrations</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <h3 className="font-semibold text-gray-900 mb-2">Attendees</h3>
                <p className="text-sm text-gray-600">Global participants</p>
              </div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-2">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Days</h3>
                <p className="text-sm text-gray-600">Intensive learning experience</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Why Robotech<span className="text-orange-500">Summit</span> 2025</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <RocketIcon className="w-12 h-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">Explore Cutting-Edge Innovations</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Gain insights into groundbreaking research and future-focused technologies that are driving 
                AI and robotics development and shaping tomorrow's intelligent world.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Access to unpublished AI research</li>
                <li>• Early previews of breakthrough robotics technologies</li>
                <li>• Next-generation autonomous systems demonstrations</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <Users className="w-12 h-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">Engage with Global Experts</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Network with 50+ certified AI researchers, 100+ robotics engineers, and 20+ industry leaders 
                from over 15 countries, all dedicated to artificial intelligence and robotics innovation.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Exclusive networking sessions with AI pioneers</li>
                <li>• One-on-one mentorship with robotics experts</li>
                <li>• Cross-industry collaboration opportunities</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <Brain className="w-12 h-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">Foster Innovation and Partnerships</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Connect with like-minded professionals and thought leaders to spark new ideas, collaborations, 
                and opportunities for joint AI and robotics projects.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Strategic partnership formation</li>
                <li>• Technology transfer opportunities</li>
                <li>• Startup pitch and funding sessions</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <Award className="w-12 h-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">Industry Recognition and Awards</h3>
              </div>
              <p className="text-gray-600">
                Stand a chance to receive one of 10+ prestigious awards recognizing outstanding contributions to 
                artificial intelligence, robotics innovation, and automated technologies.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Best AI Innovation Award</li>
                <li>• Outstanding Robotics Research Recognition</li>
                <li>• Future Technology Pioneer Award</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 ">
                <Lightbulb className="w-12 h-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">Practical and Actionable Insights</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Participate in dynamic sessions, discussions, and workshops focused on real-world applications 
                and strategies for implementing AI and robotics solutions.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• Hands-on robotics workshops</li>
                <li>• AI implementation case studies</li>
                <li>• Technical deep-dive sessions</li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-center gap-4 4">
                <Globe className="w-12 h-12 text-orange-500" />
                <h3 className="text-xl font-semibold text-gray-900">Global Exposure</h3>
              </div>
              <p className="text-gray-600 text-sm ">
                Showcase your work, share ideas, and contribute to shaping global solutions for intelligent 
                automation and a more innovative technological future.
              </p>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• International research presentations</li>
                <li>• Global technology showcase</li>
                <li>• Cross-cultural innovation exchange</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Can Attend Section */}
      <section className="relative z-10 py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16 font-serif">Who Can Attend</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Academics & Researchers</h3>
              <p className="text-gray-600">Present your research, exchange knowledge, and collaborate with peers to advance AI and robotics technologies.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Professionals</h3>
              <p className="text-gray-600">Explore innovative solutions and technologies that can drive intelligent automation and growth in your industry.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Policymakers & Government Officials</h3>
              <p className="text-gray-600">Gain insights to develop and implement policies supporting AI ethics, robotics integration, and technological innovation.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
             
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Entrepreneurs & Startups</h3>
              <p className="text-gray-600">Discover new trends, technologies, and collaboration opportunities to fuel AI and robotics business growth.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Students & Emerging Scholars</h3>
              <p className="text-gray-600">Learn from experts, showcase your research, and build networks to kickstart your career in AI and robotics innovation.</p>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tech Advocates & Thought Leaders</h3>
              <p className="text-gray-600">Connect with innovators and explore strategies for driving responsible AI development and positive technological change.</p>
            </Card>
          </div>

          {/* <Card className="p-8 bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">Ready to join AI & Robotics Innovation 2025?</h3>
                <p className="text-purple-100 text-lg">Register now to secure your spot at the premier conference on artificial intelligence, robotics innovation, and future technologies.</p>
              </div>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 whitespace-nowrap">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </Card> */}
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative z-10 bg-white py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-rose-400 to-orange-300 text-white text-center border-0 shadow-2xl rounded-4xl">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join the Future?</h2>
              <p className="text-xl mb-8 opacity-90">
                Don't miss this opportunity to be part of the most influential AI and robotics conference in Asia.
                Register now and secure your spot among the innovators shaping tomorrow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={'/registration'}>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </Link>
                <Link href={'/schedule'}>
                <Button
                  size="lg"
                  
                  className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8">
                  View Schedule
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
