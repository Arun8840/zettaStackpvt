import React from "react"
import { Poppins } from "next/font/google"
import Welcomebanner from "../components/assets/pexels-njeromin-13965386.jpg"
import Image from "next/image"
const poppinsBold = Poppins({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
})
const poppinsNormal = Poppins({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
})
function AboutUs() {
  let welcomeImage: any = Welcomebanner?.src
  let listItems: string[] = [
    "Higher sales and Profitability.",
    "Collaboration and Competitive advantage.",
    "Optimization of assets and Operational Excellence.",
    "Creative Business Process Solutions.",
  ]
  let principleItems: string[] = [
    "Knowledge",
    "Quality",
    "Ethics",
    "Guaranteed Satisfication",
  ]
  return (
    <section className="min-h-screen bg-black p-10 grid place-items-center">
      <div className="p-2 container mx-auto  grid lg:grid-cols-2 gap-5">
        {/* //todo card banner image */}

        <div className="rounded-lg text-white">
          <h1
            className={`text-xl capitalize border-b-4 border-b-indigo-500 w-fit pb-2 ${poppinsBold?.className}`}
          >
            about us
          </h1>
          <h1
            className={`text-[40px] py-2 capitalize ${poppinsBold?.className}`}
          >
            we are at the forefront of technological innovation.
          </h1>
          <p className={`py-3 ${poppinsNormal?.className} text-[16px]`}>
            ZettaStack is a software product development, Application
            development and Technology Consulting services company, serving
            start-ups as well as mid-size to large corporations.
          </p>
          <ul>
            {listItems?.map((items, index) => {
              return (
                <li key={index} className="flex items-center gap-3 py-2">
                  <svg
                    className="size-6"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_116_153)">
                      <path
                        d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                        fill="url(#paint0_linear_116_153)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_116_153"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF8B01" />
                        <stop offset="1" stopColor="#FFDBB0" />
                      </linearGradient>
                      <clipPath id="clip0_116_153">
                        <rect width="200" height="200" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{items}</span>
                </li>
              )
            })}
          </ul>
          <p className={`py-3 ${poppinsNormal?.className} text-[16px]`}>
            Our main focus on Big-Data, Cloud, and mobile solutions, we offer
            full-cycle software development, web-based solutions,
            re-engineering, QA and maintenance services.
          </p>

          <ul className="flex flex-wrap items-center gap-2 p-1">
            {principleItems?.map((items, index) => {
              return (
                <li key={index} className="flex items-center gap-3 p-1 text-sm">
                  <svg
                    className="size-6"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_116_153)">
                      <path
                        d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                        fill="url(#paint0_linear_116_153)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_116_153"
                        x1="100"
                        y1="0"
                        x2="100"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FF8B01" />
                        <stop offset="1" stopColor="#FFDBB0" />
                      </linearGradient>
                      <clipPath id="clip0_116_153">
                        <rect width="200" height="200" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>{items}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="size-fit hidden lg:block mx-auto relative">
          {/* SVG object behind the image */}
          <svg
            className="absolute -bottom-16 -right-10 size-32 z-0 rotate-6"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_234_943)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M200 50V4.37114e-06L100 0V49.9803C99.9893 22.3751 77.6077 4.37114e-06 50 4.37114e-06H2.18557e-06V100H50C22.3858 100 -1.20706e-06 122.386 0 150L2.18557e-06 200H100L100 150C100 177.614 122.386 200 150 200H200L200 100H150.02C177.625 99.9893 200 77.6077 200 50Z"
                fill="url(#paint0_linear_234_943)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_234_943"
                x1="27.5"
                y1="19"
                x2="149"
                y2="174.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0A0EFF" />
                <stop offset="1" stopColor="#FFF5F1" />
              </linearGradient>
              <clipPath id="clip0_234_943">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <Image
            width={350}
            height={400}
            src={welcomeImage}
            alt="welcome_banner"
            className="mx-auto hidden lg:block z-10 relative" // z-10 to stay on top
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutUs
