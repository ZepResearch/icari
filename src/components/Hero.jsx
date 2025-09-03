import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lectern, QuoteIcon, Shield, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { ReserveButton } from "./reserve-button"
import Link from "next/link"

export default function Hero() {
  return (
    
    <div className="min-h-hull max-w-screen-2xl mx-auto bg-white">
      {/* Header */}
  

      {/* Main Content */}
      <main className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 pt-12 lg:pt-12 ">
        {/* Grid Background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
          )} />
        
        {/* Radial gradient for faded look */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-lg">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-black text-gray-900 leading-none md:leading-16 uppercase text-pretty font-serif ">
              International conference on 
              <br />
              <span className="text-orange-500">AI & Robotics</span> Innovation
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/registration">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold w-full ">
                  REGISTER NOW
                  <ArrowRight className=" w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about-organizers">
                <Button
                  variant="outline"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold w-full"
                >
                  LEARN MORE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <ReserveButton className="w-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 max-w-3xl backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl md:ml-12">
              <img
                src="/assets/scopus.png"
                alt=""
                className="h-16 drop-shadow-lg mx-auto"
              />
              <img
                src="/assets/clarivate.png"
                alt=""
                className="h-16 drop-shadow-lg mx-auto"
              />
              <img
                src="assets/cpd.png"
                alt=""
                className="h-26  drop-shadow-lg mx-auto"
              />
              <img
                src="assets/zepresearch.png"
                alt=""
                className="h-12 drop-shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="relative   flex-1  justify-start items-end mt-12 lg:mt-0 mr-2 sm:mr-12">
          {/* Robot Image */}
          <div className="relative z-10">
            <Image
              src="/assets/robote.png"
              alt="AI Robot"
              width={800}
              height={800}
              className="w-full max-w-md lg:max-w-lg  object-contain object-bottom select-none pointer-events-none drop-shadow-2xl mx-0"
              priority
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 lg:right-20 z-20">
            <div className="w-16 h-16 relative">
              <Sparkles className="w-16 h-16 text-gray-300" />
            </div>
          </div>

          {/* Info Box */}
          <div className="absolute top-32 right-0 lg:right-10 max-w-xs bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border z-30">
            <p className="text-sm text-gray-700 leading-relaxed">
           <span className="font-semibold"> "RobotechSummit</span>  is where tomorrow's technology becomes today's reality. We're not just discussing the future - we're building it together.
           " </p>
          </div>
          {/* <div className="absolute top-96 right-0 lg:right-10 max-w-xs bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border z-30">
            <div className="text-sm text-gray-700 leading-relaxed">
          <Image src="/assets/zepresearch.png" alt="logo"  width={200} height={200}/>
          Organized by : <br />
         <span className="font-bold text-md">ZEP RESEARCH OPC PRIVATE LIMITED</span> 
            
             </div>
          </div> */}

          {/* Large "WITH AI" Text */}
          <div className="absolute bottom-4 right-4  rounded-full shadow-lg backdrop-blur-sm ">
                <div className="flex items-center gap-4 bg-white/80 border border-gray-200 rounded-xl shadow-sm px-5 py-4 max-w-xs">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 via-gray-100 to-neutral-50/60">
                <Lectern/>
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-base">Conference Mode</div>
                <div className="text-sm text-gray-600 text-center">Virtual <span className="mx-1">+</span> Physical <br />(Hybrid)</div>
              </div>
            </div>
              </div>
        </div>
      </main>

      {/* Conference Details */}
      <div className="px-6 lg:px-12 pb-12 ">
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border relative z-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center ">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">November  14<sup>th</sup> - 15<sup>th</sup>| 2025</h3>
              <p className="text-gray-600">2 Days of Innovation</p>
            </div>
            <div className="text-center border-l-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Singapore</h3>
              <p className="text-gray-600">Modern, Clean, and Vibrant</p>
            </div>
            <div className="text-center border-l-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">500+ Experts</h3>
              <p className="text-gray-600">Global AI & Robotics Leaders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
    </div>
  )
}