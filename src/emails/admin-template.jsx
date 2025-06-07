import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Img,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

const AdminEmailTemplate = ({ name, email, subject, message, phoneNumber }) => {
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
          `}
        </style>
      </Head>
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-[#fef7f0] text-[#1a1a1a] font-sans">
          {/* Outer container with background pattern */}
          <Container className="max-w-xl mx-auto my-10">
            {/* Header with logo */}
            <Section className="text-center mb-4">
            
            </Section>

            {/* Main content container */}
            <Container className="p-8 bg-white rounded-2xl shadow-lg border border-[#fed7aa] orange-border orange-glow">
              {/* Header */}
              <Section className="text-center">
                <Heading className="text-2xl font-bold orange-text">NEW CONTACT FORM SUBMISSION</Heading>
                <Hr className="border-t border-[#fed7aa] my-6" />
              </Section>

              {/* Intro text */}
              <Section>
                <Text className="text-lg font-medium text-[#ea580c]">
                  You have received a new contact form submission:
                </Text>
              </Section>

              {/* Submission details */}
              <Section className="mt-6 p-6 bg-[#fef7f0] rounded-xl border border-[#fed7aa]">
                <Row>
                  <Column>
                    {/* Name */}
                    <div className="mb-5 p-4 bg-white rounded-lg border-l-4 border-[#ea580c]">
                      <Text className="text-sm text-[#ea580c] mb-1 uppercase tracking-wider">Name:</Text>
                      <Text className="text-base text-[#1a1a1a] font-medium">{name}</Text>
                    </div>

                    {/* Email */}
                    <div className="mb-5 p-4 bg-white rounded-lg border-l-4 border-[#fb923c]">
                      <Text className="text-sm text-[#ea580c] mb-1 uppercase tracking-wider">Email:</Text>
                      <Text className="text-base text-[#1a1a1a] font-medium">{email}</Text>
                    </div>

                    {/* Phone Number (if provided) */}
                    {phoneNumber && (
                      <div className="mb-5 p-4 bg-white rounded-lg border-l-4 border-[#fed7aa]">
                        <Text className="text-sm text-[#ea580c] mb-1 uppercase tracking-wider">Phone Number:</Text>
                        <Text className="text-base text-[#1a1a1a] font-medium">{phoneNumber}</Text>
                      </div>
                    )}

                    {/* Subject */}
                    <div className="mb-5 p-4 bg-white rounded-lg border-l-4 border-[#ea580c]">
                      <Text className="text-sm text-[#ea580c] mb-1 uppercase tracking-wider">Subject:</Text>
                      <Text className="text-base text-[#1a1a1a] font-medium">{subject}</Text>
                    </div>

                    {/* Message */}
                    <div className="p-4 bg-white rounded-lg border-l-4 border-[#fb923c]">
                      <Text className="text-sm text-[#ea580c] mb-1 uppercase tracking-wider">Message:</Text>
                      <Text className="text-base text-[#1a1a1a] font-medium p-4 bg-[#fef7f0] rounded-lg border border-[#fed7aa]">
                        {message}
                      </Text>
                    </div>
                  </Column>
                </Row>
              </Section>

              {/* Footer */}
              <Section className="mt-8 text-center">
                <div className="p-4 bg-[#fef7f0] rounded-lg border border-[#fed7aa]">
                  <Text className="text-sm text-[#ea580c]">RESPOND PROMPTLY TO MAINTAIN ENGAGEMENT</Text>
                </div>
                <Hr className="border-t border-[#fed7aa] my-6" />
                <Text className="text-sm text-[#ea580c] text-center">
                  © 2025 RobotechSummit: International Conference on AI & Robotics Innovation
                </Text>
              </Section>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default AdminEmailTemplate