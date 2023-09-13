import { BannerSection, EightSection, EleventhSection, FifthSection, FourthSection, NinthSection, Testimonials, SeventhSection, SixthSection, TenthSection, ThirdSection } from "@molecules"

export const MainHome = () => {

  return (
    <>
      <BannerSection />
      {/* -------------Testimonials -- Cards Reccomendations------ */}
      <Testimonials />
      {/* -------------Text-----------------------*/}
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
