import About from "@/components/About";
import CtaHighlight from "@/components/Cta-Highlight";
import ConferenceTimeline from "@/components/Dates-Timeline";
import { ConferenceFAQ } from "@/components/FAQ";
import Hero from "@/components/Hero";
import SpeakersPage from "@/components/Speaker";
import CTAVenueCard from "@/components/Venue-CTA";

export default function Home() {
  return (
  <main>
    <Hero/>
    <About/>
    <ConferenceTimeline/>
    <CtaHighlight/>
    <SpeakersPage/>
    <CTAVenueCard/>
    <ConferenceFAQ/>
  </main>
  );
}
