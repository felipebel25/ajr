import { SeventhSection } from "@/components/molecules"
import { BannerAboutUs } from "@/components/molecules/aboutus/banner/BannerAboutUs"
import { FourthSectionAboutUs } from "@/components/molecules/aboutus/fourthSection/FourthSection"
import { SecondSectionAbout } from "@/components/molecules/aboutus/secondSection/SecondSection"
import { ThirdSectionAboutUs } from "@/components/molecules/aboutus/thirdSection/ThirdSectionAboutUs"

export const MainAboutUs = () => {
    return (
        <>
            <BannerAboutUs />
            <SecondSectionAbout />
            <ThirdSectionAboutUs />
            <FourthSectionAboutUs />
            <SeventhSection />

        </>
    )
}
