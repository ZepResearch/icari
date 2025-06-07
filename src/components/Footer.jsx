"use client"
import Link from "next/link"
import { Component as LiquidChrome } from "@/components/ui/liquid-chrome"
import { BrainCircuit, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X, Youtube } from "lucide-react"



const navLinks = [

  
  {
    href: "/about-organizers",
    title: "About Organizers",
  },
  {
    href: "/about-conference",
    title: "About Conference",
  },
  {
    href: "/theme-and-topics",
    title: "Themes and Topics",
  },
  {
    href: "/papers-format",
    title: "Paper Formats",
  },
  {
    href: "/mode-of-presentation",
    title: "Mode of Presentation",
  },
  {
    href: "/schedule",
    title: "Conference Schedule",
  },
  {
    title: "committee",
    href: "/committee",
  },
  {
    title: "submission",
    href: "/submission",
  },
  // {
  //   title: "GALLERY",
  //   href: "/gallery",
  // },
  {
    title: "venue",
    href: "/venue",
  },
  {
    title: "awards",
    href: "/awards",
  },
  {
    title: "contact",
    href: "/contact",
  },
  {
    title: "exhibit & sponsor",
    href: "/exhibit-and-sponsor",
  },
]

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden drop-shadow-2xl rounded-tr-[170px]">
      {/* Liquid Chrome Background */}
      <div className="absolute inset-0 z-0">
        <LiquidChrome
          baseColor={[0.2, 0.2, 0.2]}
          speed={0.1}
          amplitude={0.4}
          frequencyX={2.0}
          frequencyY={1.5}
          interactive={true}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10  mx-auto px-4 py-24 bg-black/70 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Conference Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">

          <div className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            {/* <Image src={"/assets/logo.png"} alt='logo' height={500} width={500} className="w-6 h-6 text-white" /> */}
            <BrainCircuit className="w-6 h-6 text-black" />
          </div>
          <span className="text-xl font-semibold text-gray-50 ">Robotech<span className='text-orange-500'>Summit</span></span>
        </div>
            <p className="text-gray-300 mb-4">
              International Conference on AI & Robotics Innovation - Shaping the future of technology through
              collaborative research and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=61561809783777" aria-label="Facebook" className="text-orange-400">
               <Facebook/>
              </a>
              <a href="https://www.instagram.com/zepresearch/" aria-label="Instagram" className="text-orange-400">
               <Instagram/>
              </a>
              <a href="https://x.com/Zepresearch" aria-label="Twitter" className="text-orange-400">
                <X/>
              </a>
              <a href="https://www.linkedin.com/company/zep-research/" aria-label="LinkedIn" className="text-orange-400">
               <Linkedin/>
              </a>
              <a href="https://www.youtube.com/@Zepresearch" aria-label="YouTube" className="text-orange-400">
               <Youtube/>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(0, 5).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-orange-100 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">More Links</h3>
            <ul className="space-y-2">
              {navLinks.slice(5).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-orange-100 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2 inline-flex gap-4 "> info@robotechsummit.com</p>
              <p className="mb-2 inline-flex gap-4 uppercase">+91 78488 54815</p>
              <p className="inline-flex gap-4 uppercase"> Bhubaneswar ,ODISHA, INDIA</p>
            </address>
          </div>
        </div>

        {/* Full Navigation */}
   

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-50 text-center text-sm text-gray-100">
          <p>© {new Date().getFullYear()} RobotechSummit. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cancellation-policy" className="hover:text-white transition-colors">
            Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
