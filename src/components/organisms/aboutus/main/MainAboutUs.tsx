import { AjrAccountingServices, BannerAboutUs, OurFirm, ScheduleAppointment,  QualifiedConsultants } from "@molecules"

export const MainAboutUs = () => {
    return (
        <>
            <BannerAboutUs
                title="Expertise For Financial Growth"
                description="We'd like to provide you with an opportunity to get to know our staff as well as our firm's values before you come to see us."
            />
            <AjrAccountingServices />
            <QualifiedConsultants />
            <OurFirm />
            <ScheduleAppointment />
        </>
    )
}
