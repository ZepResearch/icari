import { FileText, Users, CreditCard, AlertTriangle, Scale, Mail } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function TermsOfServicePage() {
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
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-6">
              <FileText className="w-12 h-12 text-orange-600" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              These terms govern your use of RobotechSummit 2025 services and participation in our conference.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: December 7, 2024</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Acceptance of Terms */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  By registering for, attending, or participating in RobotechSummit 2025 (the "Conference"), you agree
                  to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not
                  participate in the Conference.
                </p>
                <p>
                  These Terms apply to all attendees, speakers, exhibitors, sponsors, and other participants in the
                  Conference, whether attending in person or virtually.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                  posting on our website. Your continued participation constitutes acceptance of the modified Terms.
                </p>
              </div>
            </Card>

            {/* Registration and Payment */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CreditCard className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Registration and Payment</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Registration Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>You must provide accurate and complete registration information</li>
                    <li>Registration is subject to availability and acceptance</li>
                    <li>We reserve the right to refuse registration to any individual</li>
                    <li>One registration per person; transfers are not permitted without approval</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Terms</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Full payment is required at the time of registration</li>
                    <li>All fees are in USD unless otherwise specified</li>
                    <li>Payment must be made by credit card or approved payment method</li>
                    <li>Registration is not confirmed until payment is received and processed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pricing and Fees</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Conference fees are subject to change without notice</li>
                    <li>Early bird and group discounts may be available for limited periods</li>
                    <li>Additional fees may apply for optional services or activities</li>
                    <li>All fees are non-refundable except as specified in our Cancellation Policy</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Conference Participation */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conference Participation</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Code of Conduct</h3>
                  <p className="mb-2">All participants must adhere to our Code of Conduct:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Treat all participants with respect and professionalism</li>
                    <li>Refrain from harassment, discrimination, or inappropriate behavior</li>
                    <li>Respect intellectual property and confidentiality</li>
                    <li>Follow all venue rules and local laws</li>
                    <li>Comply with health and safety guidelines</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Access and Security</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Valid registration and identification required for entry</li>
                    <li>Conference badges must be worn at all times during the event</li>
                    <li>Security screening may be required at venue entrances</li>
                    <li>
                      Prohibited items include weapons, illegal substances, and recording devices (unless authorized)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Photography and Recording</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Photography and recording may occur during the Conference</li>
                    <li>By attending, you consent to being photographed or recorded</li>
                    <li>Unauthorized recording of sessions is prohibited</li>
                    <li>We reserve the right to use images and recordings for promotional purposes</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Conference Content</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>All conference materials, presentations, and content are protected by copyright</li>
                    <li>Speakers retain rights to their presentations and research</li>
                    <li>Unauthorized reproduction or distribution is prohibited</li>
                    <li>Conference proceedings may be published with appropriate attribution</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trademarks and Branding</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>RobotechSummit and related marks are our trademarks</li>
                    <li>Use of our trademarks requires prior written permission</li>
                    <li>Participants may not imply endorsement without authorization</li>
                    <li>Third-party trademarks are property of their respective owners</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Liability and Disclaimers */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability and Disclaimers</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h3>
                  <p className="mb-2">
                    To the maximum extent permitted by law, RobotechSummit and its organizers shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Any indirect, incidental, special, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Personal injury or property damage (except where caused by our negligence)</li>
                    <li>Acts or omissions of third-party speakers, vendors, or service providers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Force Majeure</h3>
                  <p>
                    We are not responsible for failure to perform due to circumstances beyond our reasonable control,
                    including but not limited to natural disasters, government actions, pandemics, terrorism, or venue
                    unavailability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Indemnification</h3>
                  <p>
                    You agree to indemnify and hold harmless RobotechSummit from any claims, damages, or expenses
                    arising from your participation in the Conference or violation of these Terms.
                  </p>
                </div>
              </div>
            </Card>

            {/* Governing Law */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law and Disputes</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  These Terms are governed by the laws of Singapore. Any disputes arising from these Terms or your
                  participation in the Conference shall be subject to the exclusive jurisdiction of the courts of
                  Singapore.
                </p>
                <p>
                  We encourage resolution of disputes through good faith negotiation. If formal proceedings are
                  necessary, both parties agree to attempt mediation before pursuing litigation.
                </p>
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                </div>
              </div>
              <div className="text-gray-700">
                <p className="mb-4">If you have questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> info@robotechsummit.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 78488 54815
                    </p>
                  <p>
                    <strong>Address:</strong> Bhubaneswar ,ODISHA, INDIA
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  These Terms of Service constitute the entire agreement between you and RobotechSummit regarding your
                  participation in the Conference.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Background decorative elements */}
    
    </div>
  )
}
