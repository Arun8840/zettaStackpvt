import React from "react"
import { Poppins } from "next/font/google"

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
function WelcomePage() {
  let listItems: string[] = [
    "Higher sales and Profitability.",
    "Collaboration and Competitive advantage.",
    "Optimization of assets and Operational Excellence.",
    "Creative Business Process Solutions.",
  ]
  let principleItems: string[] = ["Leadership", "Community", "Creativity"]
  return (
    <section className="min-h-screen bg-black p-3 grid place-items-center">
      <div className="p-2 container lg:max-w-[60%] grid grid-cols-2 gap-5">
        {/* //todo card banner image */}
        <div className="rounded-lg p-2 bg-stone-900 w-4/5 mx-auto min-h-[500px] relative z-[3]">
          <svg
            className="size-44 absolute -top-20 -left-20 rotate-45 z-[-1]"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_116_153)">
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
                <stop stop-color="#FF8B01" />
                <stop offset="1" stop-color="#FFDBB0" />
              </linearGradient>
              <clipPath id="clip0_116_153">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="rounded-lg p-2 text-white">
          <h1 className={`text-[40px] capitalize ${poppinsBold?.className}`}>
            Welcome To ZettaStack
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
                    <g clip-path="url(#clip0_116_153)">
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
                        <stop stop-color="#FF8B01" />
                        <stop offset="1" stop-color="#FFDBB0" />
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
          <h2 className={`text-[20px] capitalize ${poppinsBold?.className}`}>
            our Principles
          </h2>
          <ul>
            {principleItems?.map((items, index) => {
              return (
                <li key={index} className="flex items-center gap-3 py-2">
                  <svg
                    className="size-6"
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_116_153)">
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
                        <stop stop-color="#FF8B01" />
                        <stop offset="1" stop-color="#FFDBB0" />
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
      </div>
    </section>
  )
}

export default WelcomePage
