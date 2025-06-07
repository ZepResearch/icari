"use client"

import { useState, useEffect } from "react"
import { Users, MapPin, Building, Mail, Globe } from "lucide-react"
import PocketBase from "pocketbase"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import pb from "@/lib/pocketbase"

// Define the type for speaker data


// Speaker categories
const speakerCategories = [
  { id: "Guest Speaker", title: "Guest Speaker" },
  { id: "Keynote Speaker", title: "Keynote Speaker" },
  { id: "Conference Chair", title: "Conference Chair" },
  { id: "Conference Co-Chair", title: "Conference Co-Chair" },
  { id: "Session Chair", title: "Session Chair" },
]

// Speaker Card Component
function SpeakerCard({ speaker, onViewDetails }) {
  const imageUrl = speaker.image
    ? `https://icasem-robotechsummit.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`
    : "/placeholder.svg?height=300&width=300"

  return (
    <div className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 shadow">
      {/* Speaker Image */}
      <div className="relative h-80 w-full overflow-hidden bg-gray-100">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={speaker.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Speaker Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
          <p className="text-orange-500 font-semibold mb-3">{speaker.role}</p>

          {/* Institution and Location */}
          <div className="space-y-2">
            {speaker.college && (
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Building className="w-4 h-4" />
                <span className="truncate">{speaker.college}</span>
              </div>
            )}
            {speaker.country && (
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{speaker.country}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bio Preview */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{speaker.bio}</p>

        {/* Category Badge and Arrow */}
        <div className="flex items-center justify-between">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full">
            {speaker.category}
          </span>

          {/* Clickable Arrow Icon */}
          <button
            onClick={() => onViewDetails(speaker)}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-300 hover:scale-110"
            aria-label={`View details for ${speaker.name}`}
          >
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// Speaker Detail Dialog Component
function SpeakerDetailDialog({
  speaker,
  isOpen,
  onClose,
}) {
  if (!speaker) return null

  const imageUrl = speaker.image
    ? `https://icasem-robotechsummit.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`
    : "/placeholder.svg?height=400&width=400"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{speaker.name}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Speaker Image */}
          <div className="relative h-96 w-full rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={speaker.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Speaker Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-2">{speaker.role}</h3>
              <div className="space-y-3">
                {speaker.college && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <Building className="w-5 h-5 text-gray-500" />
                    <span>{speaker.college}</span>
                  </div>
                )}
                {speaker.country && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span>{speaker.country}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
                    {speaker.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Biography */}
           
            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => {
                  // Add contact functionality here
                  console.log("Contact speaker:", speaker.name)
                }}
              >
                <Mail className="w-4 h-4" />
                Contact
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => {
                  // Add view profile functionality here
                  console.log("View profile:", speaker.name)
                }}
              >
                <Globe className="w-4 h-4" />
                Profile
              </Button>
            </div>
          </div>

        </div>
          <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Biography</h4>
              <p className="text-gray-700 leading-relaxed">{speaker.bio}</p>
            </div>
      </DialogContent>
    </Dialog>
  )
}

export default function SpeakersPage() {
  const [speakers, setSpeakers] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("Guest Speaker")
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Fetch speakers data
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const records = await pb.collection("ICAIR_speakers").getFullList({
          sort: "order,name",
        })
        setSpeakers(records)
      } catch (error) {
        console.error("Failed to fetch speakers:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  // Filter speakers by active category
  const filteredSpeakers = speakers.filter((speaker) => speaker.category === activeCategory)

  // Handle speaker detail view
  const handleViewDetails = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedSpeaker(null)
  }

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-500 p-2 rounded">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-600 font-medium tracking-wide">OUR SPEAKERS</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl font-serif">
              DISCOVER OUR <span className="block">DISTINGUISHED SPEAKERS</span>
            </h1>

            <div className="text-right max-w-md">
              <p className="text-gray-600 leading-relaxed font-sans  ">
                MEET THE BRILLIANT MINDS SHAPING THE FUTURE OF AI & ROBOTICS INNOVATION, BRINGING CUTTING-EDGE RESEARCH
                AND INDUSTRY INSIGHTS TO ROBOTECHSUMMIT.
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="relative">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-8 border-b border-gray-200">
              {speakerCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative pb-4 text-lg font-bold transition-colors duration-300 ${
                    activeCategory === category.id ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {category.title}
                  {/* Active Tab Underline */}
                  {activeCategory === category.id && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full transition-all duration-300"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-orange-500 animate-spin"></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-transparent border-l-gray-400 animate-spin"
                style={{ animationDuration: "1.5s" }}
              ></div>
            </div>
          </div>
        )}

        {/* Speakers Grid */}
        {!loading && (
          <div>
            {filteredSpeakers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredSpeakers.map((speaker) => (
                  <SpeakerCard key={speaker.id} speaker={speaker} onViewDetails={handleViewDetails} />
                ))}
              </div>
            ) : (
              /* No Speakers in Category */
              <div className="text-center py-16">
                <div className="bg-white rounded-2xl p-12 max-w-md mx-auto">
                  <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Speakers in {activeCategory}</h3>
                  <p className="text-gray-600">Speakers for this category will be announced soon.</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Stats Section */}
        {!loading && speakers.length > 0 && (
          <div className="mt-20 bg-gray-50 rounded-2xl p-8 hover:shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">{speakers.length}</div>
                <div className="text-gray-600">Total Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {speakerCategories.filter((cat) => speakers.some((s) => s.category === cat.id)).length}
                </div>
                <div className="text-gray-600">Active Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  {new Set(speakers.map((s) => s.country)).size}
                </div>
                <div className="text-gray-600">Countries Represented</div>
              </div>
            </div>
          </div>
        )}

        {/* Speaker Detail Dialog */}
        <SpeakerDetailDialog speaker={selectedSpeaker} isOpen={isDialogOpen} onClose={handleCloseDialog} />
      </div>
    </div>
  )
}
