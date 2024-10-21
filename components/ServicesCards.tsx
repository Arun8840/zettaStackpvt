import CardContainer from "@/Utility/card/CardContainer"
import {
  ChartNoAxesColumnDecreasing,
  Cloudy,
  TabletSmartphone,
} from "lucide-react"
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
function ServicesCards() {
  let headerStyle = `text-[20px] ${poppinsBold?.className}`
  let contentStyle = `tracking-wide ${poppinsNormal?.className} text-sm lg:leading-6 pt-3`
  return (
    <div className="bg-black p-10">
      <div className="grid lg:grid-cols-3 gap-3 container mx-auto">
        {/* //todo banner cards */}
        <CardContainer className={"rounded-2xl  text-white p-5"}>
          <div className="flex items-center gap-2">
            <ChartNoAxesColumnDecreasing
              size={25}
              strokeWidth={3}
              color="gray"
            />
            <h1 className={headerStyle}>Big-Data</h1>
          </div>
          <p className={contentStyle}>
            Enterprise infrastructure is in the midst of another tectonic shift
            as cloud and mobile join forces to make business computing
            fundamentally different. Big Data is a buzzword that promises big
            payouts to corporations who want to get ahead of the curve.
          </p>
        </CardContainer>
        <CardContainer className={"rounded-2xl  text-white p-5"}>
          <div className="flex items-center gap-2">
            <Cloudy size={25} strokeWidth={3} color="gray" />
            <h1 className={headerStyle}>Cloud</h1>
          </div>
          <p className={contentStyle}>
            Cloud computing is changing the way the world does business. Combine
            onsite IT with private, managed, hybrid and public cloud elements to
            create an environment that's right for your business.
          </p>
        </CardContainer>
        <CardContainer className={"rounded-2xl  text-white p-5"}>
          <div className="flex items-center gap-2">
            <TabletSmartphone size={25} strokeWidth={3} color="gray" />
            <h1 className={headerStyle}>Mobile</h1>
          </div>
          <p className={contentStyle}>
            You simply cant ignore the marketing potential or the collaborative
            potential of Mobile Apps. We are there to help you with the right
            technology and a scalable model for small businesses and larger
            corporations.
          </p>
        </CardContainer>
      </div>
    </div>
  )
}

export default ServicesCards
