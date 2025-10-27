// components/conference-faq.jsx
import { FaqSectionWithCategories } from "./ui/faq-with-categories"

const CONFERENCE_FAQS = [
  {
    question: "When and where is the International Conference on AI & Robotics Innovation taking place?",
    answer:
      "The conference will be held on November 14th - 15th, 2025, in Kuala Lumpur, Malaysia. This premier venue offers state-of-the-art facilities and is easily accessible from major international airports.",
    category: "Event Details",
  },
 
  {
    question: "What topics will be covered at the conference?",
    answer:
      "The conference will cover cutting-edge topics including AI in healthcare, autonomous robotics, machine learning applications, human-robot interaction, industrial automation, ethical AI development, and future trends in robotics innovation.",
    category: "Content",
  },
 
  {
    question: "Will there be networking opportunities?",
    answer:
      "Yes! The conference includes dedicated networking sessions, coffee breaks, welcome reception, gala dinner, and interactive demo sessions. These provide excellent opportunities to connect with global experts and industry leaders.",
    category: "Networking",
  },

  {
    question: "Will presentations be recorded?",
    answer:
      "Selected keynote presentations and panel discussions will be recorded and made available to registered attendees for 30 days after the conference. Workshop sessions are typically not recorded to encourage interactive participation.",
    category: "Content",
  },
  {
    question: "Are there opportunities for startups and exhibitors?",
    answer:
      "We have dedicated startup showcase areas, exhibition booths for companies, and sponsor packages available. This is an excellent opportunity to demonstrate your AI and robotics innovations to a global audience.",
    category: "Exhibition",
  },
 
  {
    question: "How can I submit a paper or proposal for presentation?",
    answer:
      "Paper submissions and presentation proposals are reviewed by our scientific committee. Please check our website for submission deadlines, guidelines, and the peer review process. We welcome original research and innovative case studies.",
    category: "Submissions",
  },
]

export function ConferenceFAQ() {

  return (
    <FaqSectionWithCategories
    title="Frequently Asked Questions"
    description="Find answers to common questions about the International Conference on AI & Robotics Innovation"
    items={CONFERENCE_FAQS}
    contactInfo={{
      title: "Still have questions?",
      description: "Our conference team is here to help you with any additional inquiries.",
      buttonText: "Contact Conference Team",
      onContact: "/contact",
    }}
  />
  )
}