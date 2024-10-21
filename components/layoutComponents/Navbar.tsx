import React from "react"
import Logo from "../assets/logo.webp"
import Image from "next/image"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "block",
})
function Navbar() {
  let logoImage = Logo?.src

  let listItems: string[] = [
    "HOME",
    "ABOUT",
    "PRODUCTS",
    "SERVICES",
    "TECHNOLOGY",
    "CONTACT US",
  ]
  return (
    <nav
      className={`bg-white/10 w-5/6 fixed top-3 backdrop-blur-sm rounded-full ${poppins?.className} flex justify-between items-center`}
    >
      {/* //todo logo */}
      <div className="w-[200px] h-[50px]  grid place-items-center">
        <Image
          width={150}
          height={50}
          src={logoImage}
          alt="logo"
          objectFit="contain"
        />
      </div>

      {/* //todo list items */}
      <ul className="flex items-center gap-2 text-sm pr-2 text-stone-300">
        {listItems?.map((items, index) => {
          return (
            <li
              className="rounded-full px-2 py-1 cursor-pointer"
              key={`${items}${index}`}
            >
              {items}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
