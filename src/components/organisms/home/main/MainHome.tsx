import { BannerSection, FifthSection, FourthSection, SecondSection, SeventhSection, SixthSection, ThirdSection } from "@/components/molecules"
import { EightSection } from "@/components/molecules/home/eightSection/EightSection"
import { EleventhSection } from "@/components/molecules/home/eleventhSection/EleventhSection"
import { NinthSection } from "@/components/molecules/home/ninthSection/NinthSection"
import { TenthSection } from "@/components/molecules/home/tenthSection/TenthSection"

export const MainHome = () => {

  return (
    <>
      <BannerSection />
      {/* -------------Cards Reccomendations------ */}
      <SecondSection />
      {/* -------------Text------------ -----------*/}
      <ThirdSection />
      {/* -------------Image and Text------------  */}
      <FourthSection />
      {/* -------------Logos partners------------  */}
      <FifthSection />
      {/* -------------Cards Services------------  */}
      <SixthSection />
      {/* -------------Shedule-------------------  */}
      <SeventhSection />
      {/* -------------aboutUs-------------------- */}
      <EightSection />
      {/* -------------Text and Rectangular------- */}
      <NinthSection />
      {/* -------------Contact Us and Map--------- */}
      <TenthSection />
      {/* -------------Email Form----------------- */}
      <EleventhSection />

    </>
  )
}
