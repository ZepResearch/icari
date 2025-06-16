import Link from 'next/link'
import { ArrowRight, Calendar, Image, MapPin, Presentation, Sparkles, Trophy, Users } from 'lucide-react'
import React from 'react'

function CtaHighlight() {
  // Card data with href paths
  const cards = [
    {
      id: 'awards',
      title: 'Awards',
      description: 'Recognizing groundbreaking contributions in AI and robotics innovation, technological advancement, and future-shaping research that drives positive global impact.',
      href: '/awards',
      icon: <Trophy/>
    },
    {
      id: 'venue',
      title: 'Venue',
      description: 'Join us in Singapore at the Marina Bay Sands Convention Centre for the in-person experience or participate virtually through our interactive conference platform.',
      href: '/venue',
      icon: <MapPin/>
    },
    {
      id: 'sponsorship',
      title: 'Sponsorship',
      description: 'Partner with RobotechSummit to showcase your organization\'s commitment to AI and robotics innovation and gain visibility among industry leaders.',
      href: '/exhibit-and-sponsor',
      icon: <Presentation/>
    },
    {
      id: 'committee',
      title: 'Committee',
      description: 'Meet our distinguished panel of AI and robotics experts, researchers, and thought leaders guiding the conference\'s vision and quality standards.',
      href: '/committee',
      icon: <Users/>
    },
    {
      id: 'schedule',
      title: 'Schedule',
      description: 'Explore our comprehensive 2-day agenda featuring keynotes, panel discussions, workshops, and networking events on AI and robotics innovation.',
      href: '/schedule',
      icon: <Calendar/>
    },
    {
      id: 'organizer',
      title: 'Organizer',
      description: 'Meet the organizing team behind RobotechSummit, dedicated to delivering a world-class conference experience for all participants.',
      href: '/about-organizers',
      icon: <Users />
    },
  ]

  return (
    <div>
      <section className="px-6 lg:px-12 py-16 lg:py-24 bg-gray-900 relative overflow-hidden">
        {/* Decorative diagonal elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 transform rotate-50 translate-x-56 -translate-y-48 md:block hidden"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white transform -rotate-50 -translate-x-48 translate-y-56 md:block hidden"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">HIGHLIGHTS</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-serif">
                CONFERENCE HIGHLIGHTS &<br />
                <span className="text-white">KEY FEATURES</span>
              </h1>
            </div>
            <div className="mt-6 lg:mt-0 lg:max-w-md">
              <p className="text-gray-300 text-lg leading-relaxed font-sans">
                DISCOVER THE CUTTING-EDGE INNOVATIONS AND EXCEPTIONAL EXPERIENCES THAT MAKE ROBOTECHSUMMIT THE PREMIER
                AI & ROBOTICS CONFERENCE.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <Link key={card.id} href={card.href}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-orange-400">
                      {card.icon}
                    </div>
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-400 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 font-serif">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CtaHighlight

// Summary of all cards with their href paths:
/*
1. Awards - href: "/awards"
2. Venue - href: "/venue" 
3. Sponsorship - href: "/sponsorship"
4. Committee - href: "/committee"
5. Schedule - href: "/schedule"
6. Gallery - href: "/gallery"
*/