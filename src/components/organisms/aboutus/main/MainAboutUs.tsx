import { BannerAboutUs, FourthSectionAboutUs, SecondSectionAbout, SeventhSection, ThirdSectionAboutUs } from "@molecules"

export const MainAboutUs = () => {
    return (
        <>
            <BannerAboutUs
                title="Expertise For Financial Growth"
                description="We'd like to provide you with an opportunity to get to know our staff as well as our firm's values before you come to see us."
            />
            <SecondSectionAbout />
            <ThirdSectionAboutUs />
            <FourthSectionAboutUs />
            <SeventhSection />
        </>
    )
}
