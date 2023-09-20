import { BannerSection, AboutUsHome, Testimonials, ScheduleAppointment, ExpertAccounting, ContactUs, EmailForm, OurEasyProcess, EmpowerBusiness, HereHowWeHelp } from "@molecules"

export const MainHome = () => {

  return (
    <>
      <BannerSection />
      {/* -------------Testimonials -- Cards Reccomendations------ */}
      <Testimonials />
      {/* -------------Text-----------------------*/}
      <HereHowWeHelp />
      {/* -------------Image and Text------------  */}
      <OurEasyProcess />
      {/* -------------Logos partners------------  */}
      {/* <FifthSection /> */}
      {/* -------------Cards Services------------  */}
      <EmpowerBusiness />
      {/* -------------Shedule-------------------  */}
      <ScheduleAppointment />
      {/* -------------aboutUs-------------------- */}
      <AboutUsHome />
      {/* -------------Text and Rectangular------- */}
      <ExpertAccounting />
      {/* -------------Contact Us and Map--------- */}
      <ContactUs />
      {/* -------------Email Form----------------- */}
      <EmailForm />
    </>
  )
}
