import React from "react"
import { Poppins } from "next/font/google"
import { MoveUpRight } from "lucide-react"
import Spline from "@splinetool/react-spline"

const poppinsBold = Poppins({
  weight: ["500"],
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
function Home() {
  return (
    <section className="min-h-screen grid place-items-center  p-5 lg:p-10">
      <Spline
        className="absolute inset-0 "
        scene="https://prod.spline.design/q5hduzNglsuIxDqq/scene.splinecode"
      />
      {/* //todo nav header */}
      {/* <Navbar /> */}
      <div className="container flex flex-col gap-3 justify-between items-center z-[1]">
        <h1
          className={`text-white text-[42px] lg:text-[72px] text-center capitalize ${poppinsBold?.className}`}
        >
          enterprise big-data <br /> cloud and mobile
        </h1>
        <p
          className={`text-white p-5 text-lg text-center ${poppinsNormal?.className}`}
        >
          Agility and Accountability.
        </p>
        <button
          className={`text-white bg-[#0A0EFF] rounded-full p-3 ${poppinsNormal?.className} flex items-center gap-2 hover:shadow-lg hover:shadow-[#0A0EFF]/50 transition-shadow duration-150`}
        >
          <span>Contact us</span>
          <span className="bg-white rounded-full p-2">
            <MoveUpRight color="#0A0EFF" size={18} />
          </span>
        </button>
      </div>
    </section>
  )
}

export default Home
