import { Award, Trophy, Star, Medal, Users, ArrowRight, GraduationCap } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AwardsPage() {
  const awards = [
    {
      title: "BEST PAPER PRESENTATION AWARD",
      description: "Recognizing outstanding research presentation and communication skills",
      icon: <Trophy className="h-8 w-8 text-orange-500/90" />,
    },
    {
      title: "BEST PAPER AWARD",
      description: "Honoring the most impactful presentation in each conference session",
      icon: <Star className="h-8 w-8 text-orange-500/90" />,
    },
    {
      title: "Best International student presentation Award",
      description: "Celebrating exceptional presentations by student researchers",
      icon: <Users className="h-8 w-8 text-orange-500/90" />,
    },
  ]

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
              {/* Main Heading */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-11 mb-4">
                  CELEBRATING
                  <br />
                  <span className="text-orange-500/90">EXCELLENCE & INNOVATION</span>
                </h1>
              </div>

              {/* Award Details */}
              <div className="max-w-sm mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">PRESTIGIOUS RECOGNITION</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4" />
                    <span>Career-Enhancing Accolades</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>International Recognition</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Medal className="w-4 h-4" />
                    <span>Publication Opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image - Positioned to stick to bottom */}
            <div className="col-span-12 lg:col-span-4 flex justify-center items-end h-full">
              <div className="relative">
                <img
                  src="assets/award.png"
                  alt="Innovation Technology"
                  className=" w-full h-auto min-h-[200px] lg:max-h-[580px] object-contain object-bottom  select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Main Title */}
              <div className="text-right">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-none">
                  Awards
                  <br />
                  <span className="text-3xl lg:text-4xl font-light text-orange-600">2025</span>
                </h1>
              </div>

              {/* Awards Info Card */}
              <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg ml-auto max-w-sm">
                <div className="flex items-start space-x-3">
                  <div className="text-right">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      RobotechSummit 2025 celebrates outstanding contributions to AI and robotics research through our
                      prestigious awards program, recognizing innovation, excellence, and impactful communication...
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="relative z-10 py-20 bg-gradient-to-r from-rose-400 to-orange-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Zep Research's Grants and Scholarships</h2>
            <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
              Zep Research is dedicated to helping young scholars achieve their research and academic goals, while also
              encouraging them to apply the principles of interdisciplinary study to their work.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main Content Card */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Scholarship Coverage</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Zep Research offers full or partial scholarships covering conference registration fees to select
                    postgraduate students and early career academics who might not otherwise have the financial
                    resources to be able to attend our academic conferences.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                    <p className="text-green-800 font-medium">
                      <strong>Special Benefit:</strong> A 50% fee would be refunded to the best paper and best paper
                      presenters.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Who can receive Zep Research's grant or scholarship?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Awards are based on the appropriateness of the educational opportunity in relation to the
                    applicant's field of study, financial need, and contributions to their community and to Zep
                    Research's mission of interdisciplinarity. Scholarships will be awarded based on the availability of
                    funds from Zep Research and will vary with each conference.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How are recipients selected?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Conference Program Committee of The ICARI will award scholarships to eligible applicants who
                    have submitted exceptional abstracts that have passed the blind peer review process and been
                    accepted for presentation at the conference. Another chance to get the scholarship is for those who
                    presented their research work exceptionally in the conference.
                  </p>
                </div>
              </div>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 border text-white">
                <h3 className="text-2xl font-bold mb-4">Apply for Scholarship Today</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Don't let financial constraints hold you back from presenting your groundbreaking research.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/submission">
                    <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8">
                      Submit Your Paper
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Awards Section */}
      <div className="min-h-full py-16 px-4 sm:px-6 lg:px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-4 font-serif">Conference Awards</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Recognizing excellence in International conference on AI & Robotics Innovation research and presentation
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {awards.map((award, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="flex flex-col items-center pb-2">
                  <div className="rounded-full p-3 mb-4">{award.icon}</div>
                  <CardTitle className="text-xl font-bold text-center drop-shadow-sm uppercase">
                    {award.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{award.description}</CardDescription>
                </CardContent>
                <div className="px-6 pb-4 flex justify-center">
                  <Badge className="bg-orange-100 text-black hover:bg-orange-200">Prestigious Award</Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Awards Call to Action Section */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="p-12 bg-gradient-to-r from-rose-400 to-orange-300 text-white text-center border-0 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Don't Miss Your Chance to Win!</h2>
              <p className="text-md mb-8 opacity-90">
                Submit your groundbreaking research and join the ranks of distinguished RobotechSummit award winners.
                Recognition at our conference can be a career-defining moment and open doors to new opportunities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Trophy className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Prestigious Recognition</h3>
                    <p className="text-sm opacity-90">Join an elite group of researchers recognized for excellence</p>
                  </div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Career Advancement</h3>
                    <p className="text-sm opacity-90">Enhance your CV with internationally recognized awards</p>
                  </div>
                </Card>
                <Card className="p-6 bg-white/10 backdrop-blur-sm border-0">
                  <div className="text-center text-white">
                    <Star className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Publication Opportunities</h3>
                    <p className="text-sm opacity-90">Publication support your research journey</p>
                  </div>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/submission"}>
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8">
                    Submit Your Paper
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href={"/papers-format"}>
                  <Button size="lg" className="border-white text-white font-semibold px-8">
                    View Submission Guidelines
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
