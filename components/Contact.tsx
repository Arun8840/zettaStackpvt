import { Facebook, Heart, Instagram, Linkedin, Twitter } from "lucide-react"
import { Poppins } from "next/font/google"
import Link from "next/link"
import React from "react"
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
function Contact() {
  let labelStyle = "block py-2 text-[14px]"
  let inputStyle = "p-2 w-full rounded-lg border"
  let mediaIconStyle = "p-2 rounded-lg hover:bg-stone-100 cursor-pointer"
  return (
    <section className="bg-black p-3 lg:p-10">
      <div className="rounded-xl bg-white p-3 min-h-[300px] grid lg:grid-cols-2 gap-3 container mx-auto">
        <div>
          <h1 className={`text-[40px] p-3 ${poppinsBold?.className}`}>
            <span>
              We&apos; d love to help{" "}
              <Heart
                size={30}
                color="#F95454"
                fill="#F95454"
                className="rotate-45 inline"
              />
            </span>
          </h1>
          <p className={`p-3 ${poppinsNormal?.className}`}>
            we&apos; re a full service agency with experts ready to help. <br />
            We&apos; get in touch within 24 hours
          </p>

          <form className={`p-5 ${poppinsNormal?.className}`}>
            <div className="flex gap-2 flex-col lg:flex-row">
              <label htmlFor="firstName" className="flex-1">
                <span className={labelStyle}>First name</span>
                <input type="text" id="firstName" className={inputStyle} />
              </label>
              <label htmlFor="lastName" className="flex-1">
                <span className={labelStyle}>Last name</span>
                <input type="text" id="lastName" className={inputStyle} />
              </label>
            </div>
            <label htmlFor="email" className="flex-1">
              <span className={labelStyle}>Email</span>
              <input
                placeholder="you@company.com"
                type="text"
                id="email"
                className={inputStyle}
              />
            </label>
            <label htmlFor="phoneNumber" className="flex-1">
              <span className={labelStyle}>Phone number</span>
              <input type="text" id="phoneNumber" className={inputStyle} />
            </label>
            <label htmlFor="message" className="flex-1">
              <span className={labelStyle}>message</span>
              <textarea
                id="message"
                className={`${inputStyle} min-h-[150px]`}
              />
            </label>
            <div className="flex justify-end">
              <button
                className={`text-white bg-[#0A0EFF]  rounded-full p-3 ${poppinsNormal?.className} hover:shadow-lg transition-shadow duration-150`}
              >
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col gap-2">
          {/*//todo card cover image */}
          <div className="relative border  flex-1  rounded-3xl overflow-hidden bg-[url('../components/assets/blue_background.jpg')] bg-cover bg-center">
            <div className="p-5 lg:absolute left-0 bottom-0 right-0  w-full bg-white">
              <h1 className={`${poppinsBold?.className} text-lg pb-2 `}>
                Contact
              </h1>
              <p className={`${poppinsNormal?.className}  text-xs block py-1`}>
                Flower Mound, TX USA 75022.
              </p>
              <Link
                className={`${poppinsNormal?.className} text-xs  block py-1`}
                href={"http://www.zettastack.com/contact.html#"}
              >
                info@ZettaStack.com
              </Link>
              <Link
                className={`${poppinsNormal?.className} text-xs  block py-1`}
                href={"http://www.zettastack.com/"}
              >
                http://www.ZettaStack.com
              </Link>
              <ul className="flex justify-center items-center gap-3 py-2">
                <li className={mediaIconStyle}>
                  <Facebook size={18} />
                </li>
                <li className={mediaIconStyle}>
                  <Twitter size={18} />
                </li>
                <li className={mediaIconStyle}>
                  <Linkedin size={18} />
                </li>
                <li className={mediaIconStyle}>
                  <Instagram size={18} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
