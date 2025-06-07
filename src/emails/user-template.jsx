import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Img,
  Button,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

const UserEmailTemplate = ({ name }) => {
  return (
    <Html>
      <Head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
            body {
              font-family: 'Inter', sans-serif;
              background-color: #fef7f0;
              margin: 0;
              padding: 0;
            }
            
            .orange-text {
              background: linear-gradient(to right, #ea580c, #fb923c);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              text-fill-color: transparent;
            }
            
            .orange-border {
              box-shadow: 0 0 15px rgba(234, 88, 12, 0.3), 0 0 30px rgba(251, 146, 60, 0.2);
            }
            
            .orange-glow {
              position: relative;
            }
            
            .orange-glow::before {
              content: "";
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: linear-gradient(45deg, #ea580c, #fb923c, #fed7aa);
              border-radius: 16px;
              z-index: -1;
              filter: blur(10px);
              opacity: 0.4;
            }
            
            .orange-button {
              background: linear-gradient(to right, #ea580c, #c2410c);
              color: white;
              font-weight: bold;
              padding: 12px 24px;
              border-radius: 30px;
              text-decoration: none;
              display: inline-block;
              text-align: center;
              box-shadow: 0 0 15px rgba(234, 88, 12, 0.5);
              transition: all 0.3s ease;
            }
            
            .orange-button:hover {
              box-shadow: 0 0 20px rgba(234, 88, 12, 0.7);
            }
            
            .grid-pattern {
              background-image: radial-gradient(rgba(234, 88, 12, 0.1) 1px, transparent 1px);
              background-size: 20px 20px;
            }
          `}
        </style>
      </Head>
      <Preview>Thank you for contacting RobotechSummit</Preview>
      <Tailwind>
        <Body className="bg-[#fef7f0] text-[#1a1a1a] font-sans grid-pattern">
          {/* Outer container */}
          <Container className="max-w-xl mx-auto my-10">
            {/* Header with logo */}
            <Section className="text-center mb-4">
              <div className="w-48 h-16 mx-auto bg-gradient-to-r from-[#ea580c] to-[#fb923c] rounded-lg flex items-center justify-center">
                <Text className="text-white font-bold text-lg">RobotechSummit</Text>
              </div>
            </Section>

            {/* Main content container */}
            <Container className="p-8 bg-white rounded-2xl shadow-lg border border-[#fed7aa] orange-border orange-glow">
              {/* Header */}
              <Section className="text-center">
                <Heading className="text-2xl font-bold orange-text">THANK YOU FOR CONTACTING US</Heading>
                <Hr className="border-t border-[#fed7aa] my-6" />
              </Section>

              {/* Greeting */}
              <Section>
                <Text className="text-xl font-medium text-[#ea580c] text-center">Hello, {name}!</Text>
                <Text className="text-base text-[#1a1a1a] mt-4">
                  We've received your message and appreciate your interest in RobotechSummit 2025: International Conference on
                  AI & Robotics Innovation. Our team will review your inquiry and get back to
                  you as soon as possible.
                </Text>
                <Text className="text-base text-[#1a1a1a] mt-4">
                  In the meantime, you might find answers to common questions on our FAQ page or explore our conference program.
                </Text>
              </Section>

              {/* Event details */}
              <Section className="mt-6">
                <div className="p-6 bg-[#fef7f0] rounded-xl border border-[#fed7aa]">
                  <Text className="text-lg font-medium text-[#ea580c] mb-4">EVENT DETAILS:</Text>

                  <div className="mb-3 p-3 bg-white rounded-lg border-l-4 border-[#ea580c]">
                    <Text className="text-sm text-[#ea580c] uppercase tracking-wider mb-1">Date:</Text>
                    <Text className="text-[#1a1a1a]">November 14th - 15th, 2025</Text>
                  </div>

                  <div className="mb-3 p-3 bg-white rounded-lg border-l-4 border-[#fb923c]">
                    <Text className="text-sm text-[#ea580c] uppercase tracking-wider mb-1">Location:</Text>
                    <Text className="text-[#1a1a1a]">Singapore</Text>
                  </div>

                  <div className="mb-3 p-3 bg-white rounded-lg border-l-4 border-[#fed7aa]">
                    <Text className="text-sm text-[#ea580c] uppercase tracking-wider mb-1">Focus Areas:</Text>
                    <Text className="text-[#1a1a1a]">AI Innovation, Robotics Technology, Automation</Text>
                  </div>

                  <div className="p-3 bg-white rounded-lg border-l-4 border-[#ea580c]">
                    <Text className="text-sm text-[#ea580c] uppercase tracking-wider mb-1">Website:</Text>
                    <Link href="https://www.robotechsummit.com" className="text-[#ea580c] underline">
                      www.robotechsummit.com
                    </Link>
                  </div>
                </div>
              </Section>

              {/* CTA Button */}
              {/* <Section className="mt-8 text-center">
                <Button href="https://www.robotechsummit.com" className="orange-button">
                  EXPLORE OUR PROGRAM
                </Button>
              </Section> */}

              {/* Footer */}
              <Section className="mt-8 text-center">
                <Hr className="border-t border-[#fed7aa] my-6" />
                <Text className="text-sm text-[#ea580c] text-center">
                  © 2025 RobotechSummit: International Conference on AI & Robotics Innovation
                </Text>
                <Text className="text-xs text-[#ea580c]/70 text-center mt-2">
                  This is an automated response. Please do not reply to this email.
                </Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default UserEmailTemplate