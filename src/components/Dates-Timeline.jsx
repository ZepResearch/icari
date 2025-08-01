'use client'
import pb from "@/lib/pocketbase"
import { Calendar, Clock, FileText, UserCheck } from "lucide-react"
import { useEffect, useState } from "react"

// Define the type for our timeline data


// Icon mapping based on title keywords
const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("registration")) return UserCheck
  if (lowerTitle.includes("abstract")) return FileText
  if (lowerTitle.includes("paper")) return Calendar
  return Clock
}

// Server Component to fetch data

export default  function ConferenceTimeline() {
  const [timelineItems, setTimelineItems] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const records = await pb.collection('ICAIR_dates').getFullList({
        sort: 'created',
      })
      setTimelineItems(records)
    }

    loadData()

    const unsubscribe = pb.collection('ICAIR_dates').subscribe('*', (e) => {
      loadData()
    })

    return () => {
      pb.collection('ICAIR_dates').unsubscribe('*')
    }
  }, [])



  return (
    <div className="min-h-full bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500 p-2 rounded">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-600 font-medium tracking-wide">CONFERENCE TIMELINE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-2xl font-serif">
              IMPORTANT DATES FOR <span className="block">ROBOTECHSUMMIT?</span>
            </h1>

            <div className="text-right max-w-md">
              <p className="text-gray-600 leading-relaxed font-sans">
                MARK YOUR CALENDAR FOR KEY DEADLINES OF THE INTERNATIONAL CONFERENCE ON AI & ROBOTICS INNOVATION TO
                ENSURE YOUR PARTICIPATION.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineItems.map((item, index) => {
            const IconComponent = getIconForTitle(item.title)
            return (
              <div key={item.id} className="group">
                {/* Card with angled corners */}
                <div className="relative bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 h-72">
                  {/* Angled top corners */}
                  <div className="absolute top-0 left-0 w-6 h-6 bg-gray-50 transform rotate-45 -translate-x-3 -translate-y-3 border-l-2 border-t-2 border-gray-200 group-hover:border-orange-300 transition-all duration-300"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-gray-50 transform rotate-45 translate-x-3 -translate-y-3 border-r-2 border-t-2 border-gray-200 group-hover:border-orange-300 transition-all duration-300"></div>

                  {/* Card Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-orange-500" />
                      </div>
                    </div>

                    {/* Decorative stripes */}
                    <div className="mb-6">
                      <div className="flex gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-1 h-8 bg-gray-200 transform skew-x-12"></div>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{item.title.toUpperCase()}</h3>

                    {/* Date */}
                    <div className="mb-4">
                      <p className="text-orange-500 font-bold text-lg">{item.date}</p>
                    </div>

                    {/* Description */}
                    {/* <div className="flex-grow">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div> */}
                  </div>

                  {/* Angled bottom corners */}
                  <div className="absolute bottom-0 left-0 w-6 h-6 bg-gray-50 transform rotate-45 -translate-x-3 translate-y-3 border-l-2 border-b-2 border-gray-200 group-hover:border-orange-300 transition-all duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-50 transform rotate-45 translate-x-3 translate-y-3 border-r-2 border-b-2 border-gray-200 group-hover:border-orange-300 transition-all duration-300"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Loading state fallback - this won't show in production but good for development */}
        {timelineItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading timeline data...</p>
          </div>
        )}
      </div>
    </div>
  )
}
