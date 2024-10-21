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
function RecentWorks() {
  let headerStyle = `text-[32px] p-5 w-full ${poppinsBold?.className} text-white text-start`
  let contentStyle = `${poppinsNormal?.className} text-white px-5`
  return (
    <section className="min-h-screen bg-black p-10 grid place-items-center">
      <div className="container mx-auto">
        <h1
          className={`text-[40px] pb-5 text-white capitalize ${poppinsBold?.className}`}
        >
          Our recent works
        </h1>
        <div className="grid lg:grid-cols-2 gap-5  mx-auto h-full">
          <div className="bg-[#0A0EFF] min-h-[300px] rounded-3xl flex flex-col justify-center items-center p-5 w-full h-full">
            <h1 className={headerStyle}>Retail collabration</h1>
            <p className={contentStyle}>
              Our Product Customization for a fortune 500 retail chain, helped
              our client with new franchises and unparalleled collaboration
              between its various departments.
            </p>
          </div>
          <div className="bg-[#FF7C7C] min-h-[300px] rounded-3xl flex flex-col justify-center items-center p-5 w-full h-full">
            <h1 className={headerStyle}>sales force automation</h1>
            <p className={contentStyle}>
              Sales force automation for a clean energy company, immensely
              increased communication, partnership between field sales personnel
              and sales management team. Resulting in increased client
              acquisition.
            </p>
          </div>
          <div className="bg-[#FF8B01] min-h-[300px] rounded-3xl flex flex-col justify-center items-center p-5 w-full h-full">
            <h1 className={headerStyle}>inspection and survey</h1>
            <p className={contentStyle}>
              Consulting and Customization solutions provided for calibration
              and inspection company, transformed their painful manual
              collaboration into a mobile based seamless, cost effective and
              highly productive collaboration.
            </p>
          </div>
          <div className="bg-[#8F8BF7] min-h-[300px] rounded-3xl flex flex-col justify-center items-center p-5 w-full h-full">
            <h1 className={headerStyle}>security solutions</h1>
            <p className={contentStyle}>
              Our State of the art solutions provided to a security personnel
              management firm to increase staffing, accountability aided by
              location based services and better management, while lowering
              liability risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentWorks
