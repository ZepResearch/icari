"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Presentation, ImageIcon, Monitor, Check, Cpu } from "lucide-react"

export default function ModeOfPresentationPage() {
  const presentationGuidelines = [
    "Be concise and focused. Clearly communicate your research question, methodology, findings, and implications within the allotted time.",
    "Use technical visuals effectively. Incorporate clear diagrams, algorithms, experimental results, and demonstrations that enhance understanding of your AI/Robotics research.",
    "Practice your presentation thoroughly. Rehearse to ensure smooth delivery, especially for technical demonstrations and live system showcases.",
    "Prepare for technical questions. Anticipate questions about implementation details, performance metrics, and future work directions.",
    "Engage with the technical community. Encourage discussions about applications, limitations, and potential collaborations in AI & Robotics.",
  ]

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      

      {/* Oral Presentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1705267935935-53ee91453a52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Oral Presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Share your breakthrough research</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-200 rounded-full p-3 mr-4">
                  <Presentation className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Oral Presentation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Present your AI or Robotics research in a 20-minute oral presentation followed by a 10-minute Q&A
                session. This format is ideal for sharing detailed technical findings and engaging directly with the
                research community.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format, max 25 slides)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Technical methodology, algorithms, and experimental results</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">
                      Live demonstration or video of your AI/Robotics system (optional)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Brief bio and research background for introduction</span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                  Submit for Oral Presentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Presentation Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-orange-200 rounded-full p-3 mr-4">
                  <ImageIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Poster Presentation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Present your research in a visual format during our dedicated poster sessions. This interactive format
                allows for in-depth technical discussions and networking with researchers in your field.
              </p>

              <div className="bg-white rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">A0 size poster (841 × 1189 mm) in portrait orientation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">
                      Clear visual representation with algorithms, architectures, and results
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">QR code linking to code repository, dataset, or demo video</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">
                      Handouts with technical details or business cards for networking
                    </span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                  Submit for Poster Presentation
                </Button>
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] order-1 lg:order-2">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661587798846-2b2bdbe5abc0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Poster Presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Engage in technical discussions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Presentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661483130874-527d2f9e5746?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Virtual Presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Present from anywhere globally</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-orange-200 rounded-full p-3 mr-4">
                  <Monitor className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Virtual Presentation</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Can't attend in person? Present your AI or Robotics research virtually through our dedicated online
                platform. This option provides global accessibility while maintaining technical rigor and engagement.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Stable internet connection (minimum 10 Mbps upload)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">HD webcam and professional microphone/headset</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Pre-recorded backup and demo videos</span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                  Submit for Virtual Presentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo/Exhibition Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-orange-200 rounded-full p-3 mr-4">
                  <Cpu className="h-6 w-6 text-orange-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Live Demonstration</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Showcase your working AI system or robotic prototype in our dedicated demonstration area. This hands-on
                format allows attendees to interact directly with your technology and see it in action.
              </p>

              <div className="bg-white rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Working prototype or software system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Setup requirements and technical specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Interactive scenarios for attendee engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-orange-600" />
                    </div>
                    <span className="text-gray-600">Safety protocols and operation guidelines</span>
                  </li>
                </ul>
              </div>
              <Link href={"/submission"}>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                  Submit for Live Demo
                </Button>
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1599584933236-b93d637a8630?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                alt="Live Demonstration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Show your technology in action</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Presentation Guidelines</h2>
            <p className="text-gray-600 text-center mb-8">
              Regardless of your presentation mode, please adhere to the following guidelines to ensure a smooth and
              engaging experience for all participants at RobotechSummit 2025:
            </p>

            <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-6">
                {presentationGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-200 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-orange-600 font-bold text-xl">{index + 1}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-600">{guideline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-2">Ready to present your research?</h3>
                <p className="max-w-xl opacity-90">
                  Choose your preferred presentation mode and submit your proposal for RobotechSummit 2025. Join the
                  global AI & Robotics research community.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={"/submission"}>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100 rounded-full whitespace-nowrap">
                    Submit Your Presentation
                  </Button>
                </Link>
                <Link href="/papers-format">
                  <Button
                    variant="outline"
                    className="bg-white text-orange-600 hover:bg-gray-100 rounded-full whitespace-nowrap"                  >
                    View Format Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
