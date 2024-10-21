import AboutUs from "@/components/AboutUs"
import Contact from "@/components/Contact"
import Home from "@/components/Home"
import RecentWorks from "@/components/RecentWorks"
import ServicesCards from "@/components/ServicesCards"
import WelcomePage from "@/components/WelcomePage"
import React from "react"

function page() {
  return (
    <>
      <Home />
      <WelcomePage />
      <ServicesCards />
      <RecentWorks />
      <AboutUs />
      <Contact />
    </>
  )
}

export default page
