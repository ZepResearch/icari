"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Bot, Cpu, Zap, Globe, Shield } from "lucide-react"

export default function ThemeAndTopicsPage() {
  const researchAreas = [
    {
      icon: <Brain className="h-8 w-8 text-orange-600" />,
      title: "Artificial Intelligence & Machine Learning",
      topics: [
        "Deep Learning and Neural Networks",
        "Natural Language Processing",
        "Computer Vision and Image Recognition",
        "Reinforcement Learning",
        "AI Ethics and Explainable AI",
      ],
    },
    {
      icon: <Bot className="h-8 w-8 text-orange-600" />,
      title: "Robotics & Automation",
      topics: [
        "Autonomous Mobile Robots",
        "Human-Robot Interaction",
        "Industrial Automation Systems",
        "Swarm Robotics",
        "Bio-inspired Robotics",
      ],
    },
    {
      icon: <Cpu className="h-8 w-8 text-orange-600" />,
      title: "Intelligent Systems & IoT",
      topics: [
        "Smart City Technologies",
        "Edge Computing and AI",
        "Sensor Networks and Data Fusion",
        "Cyber-Physical Systems",
        "Intelligent Transportation Systems",
      ],
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Emerging Technologies",
      topics: [
        "Quantum Computing Applications",
        "Neuromorphic Computing",
        "Augmented and Virtual Reality",
        "Blockchain in AI Systems",
        "5G/6G and AI Integration",
      ],
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "AI for Social Good",
      topics: [
        "Healthcare AI and Medical Robotics",
        "Environmental Monitoring Systems",
        "Educational Technology and AI",
        "Disaster Response Robotics",
        "Accessibility and Assistive Technologies",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Security & Trust in AI",
      topics: [
        "Adversarial AI and Defense",
        "Privacy-Preserving Machine Learning",
        "Secure Multi-Agent Systems",
        "AI Safety and Reliability",
        "Robotic System Security",
      ],
    },
  ]

  const submissionSteps = [
    {
      number: "1",
      title: "Prepare Your Abstract",
      description:
        "Submit a 300-word abstract outlining your research question, methodology, findings, and relevance to AI & Robotics Innovation.",
    },
    {
      number: "2",
      title: "Abstract Review",
      description:
        "Abstracts will be reviewed by our expert committee of AI and robotics researchers. If accepted, you'll be invited to submit a full paper.",
    },
    {
      number: "3",
      title: "Full Paper Submission",
      description:
        "Submit your full paper (6-10 pages) following IEEE formatting guidelines. All papers undergo double-blind peer review by domain experts.",
    },
    {
      number: "4",
      title: "Presentation",
      description:
        "Accepted papers will be presented as oral presentations, poster sessions, or demonstrations, based on your preference and committee recommendations.",
    },
  ]

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
    

      {/* Conference Theme Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border border-gray-900 rounded-full px-4 py-1 text-sm mb-6">
                Conference Theme
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                "Intelligent Futures: Advancing AI & Robotics for Human-Centric Innovation"
              </h2>
              <p className="text-gray-600 mb-4">
                RobotechSummit 2025 explores the cutting-edge developments in artificial intelligence and robotics that
                are reshaping our world. As AI and robotics technologies continue to evolve at an unprecedented pace,
                new opportunities emerge for creating intelligent systems that enhance human capabilities and address
                global challenges.
              </p>
              <p className="text-gray-600">
                This conference brings together researchers, engineers, and innovators from academia and industry to
                examine the current state and future possibilities of AI and robotics. We invite contributions that
                showcase breakthrough research, novel applications, and critical perspectives on the ethical and
                societal implications of these transformative technologies.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
                alt="AI and Robotics Innovation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Shaping intelligent futures through innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What We'll Cover</h2>
            <p className="text-gray-600">Research topics and areas that can be selected for paper submissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm h-full hover:shadow-lg transition-shadow">
                <div className="bg-orange-50 rounded-2xl p-4 inline-block mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-orange-200 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-orange-600 text-xs">•</span>
                      </div>
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Submit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How to Submit Your Work</h2>
            <p className="text-gray-600">
              We welcome submissions from researchers, practitioners, and students across all AI and robotics
              disciplines. The submission process involves the following steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {submissionSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-200/30 rounded-full"></div>
                <div className="relative z-10">
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href={"/registration"}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">Register Now</Button>
            </Link>
            <Link href={"/submission"}>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full px-8"
              >
                Submit Paper <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      {/* <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Important Dates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-orange-500 font-bold text-lg mb-2">March 15, 2025</div>
                <div className="text-gray-900 font-semibold mb-1">Abstract Submission</div>
                <div className="text-gray-600 text-sm">Deadline</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-orange-500 font-bold text-lg mb-2">April 30, 2025</div>
                <div className="text-gray-900 font-semibold mb-1">Full Paper</div>
                <div className="text-gray-600 text-sm">Submission</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-orange-500 font-bold text-lg mb-2">June 15, 2025</div>
                <div className="text-gray-900 font-semibold mb-1">Early Bird</div>
                <div className="text-gray-600 text-sm">Registration</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-orange-500 font-bold text-lg mb-2">August 20-22, 2025</div>
                <div className="text-gray-900 font-semibold mb-1">Conference</div>
                <div className="text-gray-600 text-sm">Dates</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold mb-2">Become Our Sponsor</h3>
                <p className="max-w-xl opacity-90">
                  Partner with us to showcase your brand to global leaders in AI & Robotics. Gain exclusive access to 
                  industry experts, enhance your visibility, and demonstrate your commitment to technological innovation 
                  at RobotechSummit 2025.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={"/exhibit-and-sponsor"}>
                  <Button
                    className="bg-white text-orange-600 hover:bg-gray-100 rounded-full whitespace-nowrap px-8"
                  >
                    View Sponsor Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
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
