import React from "react";
import Image from "next/image";
import heroImage from "@/images/herobg.png";
import Header from "../header/Header";
import Link from "next/link";
import elips from "@/images/elips.png";
import { BiPhone } from "react-icons/bi";
import { RiFileEditFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={heroImage}
          alt="Hero background image"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-16 md:py-0">
        <div className="max-w-[1250px] w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
          
          {/* Left Content */}
          <div className="text-white mt-6 md:mt-0 p-4 sm:p-6 w-full md:w-1/2 z-30 text-center md:text-left">
            <div className="max-w-lg mx-auto md:mx-0">
              <p className="text-lg sm:text-xl lg:text-2xl  font-medium mb-3 sm:mb-4">
                Lorem ipsum dolor sit
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8">
                Consult a Lawyer now.
              </p>

              {/* Lawyers Online */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-0 sm:mb-8 mb-6">
                <div className="flex -space-x-4 sm:mr-4 justify-center sm:justify-start">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden relative"
                      style={{ zIndex: 30 - i * 10 }}
                    >
                      <Image
                        src={elips}
                        alt={`Lawyer avatar ${i}`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-white text-lg sm:text-xl">
                  <span className="font-medium">+121 Lawyers are online</span>
                  <span className="ml-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full inline-block"></span>
                </div>
              </div>

              <Link href="/chat" passHref>
                <button className="bg-red-600 hover:bg-red-700 text-white text-lg sm:text-xl font-medium py-3 px-6 sm:py-4 rounded w-full sm:w-auto transition duration-300">
                  Talk to lawyer
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Consultation Cards */}
          <div className="relative p-4 sm:p-6 w-full md:w-1/2 max-w-[606px] z-20">
            <div className="flex flex-col items-center gap-6">
              {[
                {
                  icon: "🎥",
                  title: "Video Consult",
                  desc: "Speak face-to-face online.",
                  bgClass: "text-blue-400 bg-gray-200",
                },
                {
                  icon: <BiPhone className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400" />,
                  title: "Phone Call",
                  desc: "Call a legal expert directly.",
                },
                {
                  icon: <RiFileEditFill className="w-10 h-10 sm:w-12 sm:h-12 text-red-400" />,
                  title: "Document Review",
                  desc: "Get contracts reviewed.",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white w-full sm:w-[264px] h-auto rounded-lg shadow-lg p-4 flex items-start hover:translate-x-1 transition-transform"
                >
                  <div className="mr-4 mt-1">
                    {typeof card.icon === "string" ? (
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${card.bgClass} flex items-center justify-center rounded-full text-xl`}
                      >
                        {card.icon}
                      </div>
                    ) : (
                      card.icon
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
