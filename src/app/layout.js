import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import TawkToChat from "@/components/TawkToChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Robotech Summit | ICARI",
  description: "Join the premier international conference on AI & Robotics Innovation. Connect with experts, share research, and explore cutting-edge developments in robotics and artificial intelligence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <head>
          <script
          async
          src="https://analytics.zepresearch.com/script.js"
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav/>
        {children}
        <Footer/>
        <FloatingWhatsApp/>
        <TawkToChat/>
      </body>
    </html>
  );
}
