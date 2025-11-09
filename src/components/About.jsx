import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

function About() {
  return (
    <section className="py-12 bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image (Stick to left) */}
        <div className="lg:w-1/2 relative px-6 lg:px-0">
          <div className="relative z-10 ml-0">
            <Image
              src="/assets/arm.png"
              alt="Robotic Hand Innovation"
              width={700}
              height={400}
              className="w-full max-w-2xl mx-auto lg:mx-0"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-8 -left-8 lg:left-4 w-48 h-48 bg-white rounded-full opacity-80 z-0"></div>
          <div className="absolute top-1/3 -right-8 lg:right-8 w-24 h-24 bg-orange-100 rounded-full opacity-80 z-0"></div>
        </div>

        {/* Right Side - Content (Centered) */}
        <div className="lg:w-1/2 px-6 lg:px-12 mt-12 lg:mt-0 flex items-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 font-serif  ">
              Let's Get   Closer<br />
              About <br />
              <span className="text-orange-500">AI & Robotics </span>Innovation
            </h2>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                At the International Conference on AI and Robotics Innovation, we bring together the world's leading
                experts, researchers, and innovators in artificial intelligence and robotics.
              </p>

              <p className="text-lg leading-relaxed">
                Our mission is to showcase cutting-edge advancements that integrate the latest developments in
                artificial intelligence, machine learning, and robotic engineering. The conference aims to explore how
                these technologies can help redefine the future of industries such as healthcare, education,
                manufacturing, and entertainment.
              </p>

              <p className="text-lg leading-relaxed">
                Join us in Kuala Lumpur, Malaysia for an immersive two-day experience featuring keynote speeches, panel
                discussions, workshops, and networking opportunities with global leaders in the field.
              </p>

              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg mt-6">
                Learn More Here
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mt-20 lg:mt-24">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 text-gray-900 font-serif">
          Our Vision & <span className="text-orange-500">Objectives</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">01</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Knowledge Exchange</h4>
            <p className="text-gray-700 leading-relaxed">
              Facilitate the exchange of cutting-edge research and innovative ideas between leading AI and robotics experts from academia and industry.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">02</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Industry Impact</h4>
            <p className="text-gray-700 leading-relaxed">
              Showcase practical applications and real-world implementations of AI and robotics technologies across various industries.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">03</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Future Vision</h4>
            <p className="text-gray-700 leading-relaxed">
              Explore emerging trends and future directions in AI and robotics, shaping the next generation of technological innovation.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">04</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Ethical Framework</h4>
            <p className="text-gray-700 leading-relaxed">
              Address critical ethical considerations and establish guidelines for responsible AI and robotics development.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">05</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Collaboration</h4>
            <p className="text-gray-700 leading-relaxed">
              Foster international partnerships and collaborative research initiatives between institutions and organizations.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">06</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Skill Development</h4>
            <p className="text-gray-700 leading-relaxed">
              Provide hands-on workshops and training sessions to enhance practical skills in AI and robotics implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About