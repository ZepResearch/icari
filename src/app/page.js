import About from "@/components/About";
import Buttons from "@/components/buttons";
import CtaHighlight from "@/components/Cta-Highlight";
import ConferenceTimeline from "@/components/Dates-Timeline";
import { ConferenceFAQ } from "@/components/FAQ";
import Hero from "@/components/Hero";
import Organizer from "@/components/Organizer";
import SpeakersPage from "@/components/Speaker";
import CTAVenueCard from "@/components/Venue-CTA";

export default function Home() {
  return (
  <main>
    <Hero/>
    <Organizer/>
    <About/>
    <ConferenceTimeline/>
    <CtaHighlight/>
    <SpeakersPage/>
    <Buttons/>
    <CTAVenueCard/>
    <ConferenceFAQ/>
  </main>
  );
}
