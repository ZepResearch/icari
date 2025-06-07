"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { addDays } from "date-fns"

const scheduleData = [
  {
    date: "November  14 | Day 1",
    items: [
      { time: "8:00AM - 9:15AM", title: "Registration" },
      { time: "9:15AM - 9:30AM", title: "Inaugural Function" },
      { time: "9:30AM - 10:00AM", title: "Keynote Speech: AI & Robotics Innovation" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "1st Session: AI & Robotics Innovation" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 02:30PM", title: "Keynote Speech: Future of AI & Robotics" },
      { time: "2:30PM - 5:00PM", title: "2nd Session: AI & Robotics Solutions" },
      { time: "5:00PM - 6:30PM", title: "Welcome Reception & Networking" },
    ],
  },
  {
    date: "November  15 | Day 2",
    items: [
      { time: "8:30AM - 9:00AM", title: "Registration" },
      { time: "9:00AM - 9:30AM", title: "Day 2 Opening Remarks" },
      { time: "9:30AM - 10:00AM", title: "Keynote Speech: AI & Robotics Innovation" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "3rd Session: AI & Robotics Innovations" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 03:30PM", title: "Panel Discussion: Future of AI & Robotics" },
      { time: "3:30PM - 4:00PM", title: "Coffee Break" },
      { time: "4:00PM - 5:00PM", title: "Awards Ceremony & Closing Remarks" },
      { time: "5:00PM - 6:30PM", title: "Farewell Reception" },
    ],
  },
]

export default function ConferenceSchedule() {
  const startDate = new Date(2025, 10, 14) // November  26, 2025
  const [selectedDates, setSelectedDates] = useState([startDate, addDays(startDate, 1)])

  return (
    <div className=" py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              International Conference on
              <span className="relative inline-block mx-2">
                <span className="relative z-10">AI & Robotics Innovation</span>
                <span className="absolute inset-0  rounded-full transform -rotate-1 scale-110 z-0"></span>
              </span>
            </h1>
            <p className="text-orange-400 text-xl max-w-2xl mx-auto">
              Join us November  14 - 15, 2025 for two days of cutting-edge insights and networking on AI & Robotics Innovation. Reserve your spot today!
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <Card className="border-orange-400 rounded-3xl shadow-sm overflow-hidden">
              <CardHeader className="bg-orange-400 text-white">
                <CardTitle>November  2025</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  month={startDate}
                  className="w-full"
                  classNames={{
                    day_selected: "bg-orange-400 text-white hover:bg-orange-400 focus:bg-orange-400",
                    day_today: "bg-[#d3e4c5] text-gray-900",
                  }}
                />
              </CardContent>
            </Card>

            <ScrollArea className="h-[600px]">
              <div className="space-y-8">
                {scheduleData.map((day, index) => (
                  <Card key={index} className="border-[#d3e4c5] rounded-3xl shadow-sm overflow-hidden">
                    <CardHeader className="bg-orange-400">
                      <CardTitle className="text-gray-100">{day.date}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        {day.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={cn(
                              "grid grid-cols-[140px_1fr] gap-4 p-3 rounded-lg",
                              "bg-[#faf7f5] hover:bg-[#c75b03]/10 transition-colors",
                            )}
                          >
                            <div className="text-sm font-medium text-orange-400">{item.time}</div>
                            <div className="text-sm text-gray-900">{item.title}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-gray-50 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Venue</h3>
                <p className="text-orange-400 mb-2">Declare soon</p>
                {/* <p className="text-[#">Ratchadaphisek Road, Bangkok 10110, Thailand</p> */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Registration</h3>
                <p className="text-orange-400 mb-2">Registration opens at 8:00 AM on Day 1 and 8:30 AM on Day 2.</p>
                <p className="text-orange-400">
                  Please bring your confirmation email and ID for a smooth check-in process.
                </p>
              </div>
            </div>
          </div>

          {/* Download Schedule Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-orange-400 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center">
              Download Full Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
