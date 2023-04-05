import { BannerAboutUs, FourthSectionServices, SecondSectionServices, SeventhSection, ThirdSectionServices } from "@molecules";

export const MainServices = () => {
    return (
        <>
            <BannerAboutUs title="Services For Your Business Growth" />
            {/* ----------title & description empower your business----------- */}
            <SecondSectionServices />
            {/* ----------Business----------- */}
            <ThirdSectionServices
                img="/images/services/business_services.png"
                imgIcon="/images/home/business_service.png"
                texts={firstServices}
                title='Business'

            />
            {/* -------------Payroll------------------------ */}
            <FourthSectionServices
                img="/images/services/payroll_section_services.png"
                imgIcon="/images/iconpng/computer.png"
                texts={payrollServices}
                title='Payroll'
            />
            {/* ----------------Accounting Services------------------------ */}
            <ThirdSectionServices
                img="/images/services/tax_services.png"
                imgIcon="/images/iconpng/accounting_services_icon.png"
                texts={taxServices}
                title='Accounting
                    Services'

            />
            {/* ------------------Business Registrations------------------------ */}
            <FourthSectionServices
                img="/images/services/business_registrations_services.png"
                imgIcon="/images/iconpng/business_registrations_icon.png"
                texts={businessServices}
                title='Business
                    Registrations'
            />
            {/* ----------------------Tax Issues--------------------- */}
            <ThirdSectionServices
                img="/images/services/tax_issues.png"
                imgIcon="/images/iconpng/tax_issues_icon.png"
                texts={taxIssues}
                title='Tax Issues'
            />
            {/* ----------------personal Services------------------- */}
            <FourthSectionServices
                img="/images/services/personal_services.png"
                imgIcon="/images/iconpng/personal_services_icon.png"
                texts={personalServices}
                title='Personal Services'
            />
            {/* -------------------Schedule ---------------- */}
            <SeventhSection />
        </>
    )
}
const firstServices = ['Bookkeeping', 'Financial report', 'Audits', 'Business Insurances', 'Compliance Audits']
const payrollServices = ['Processing paychecks', 'Filing federal, state, and local tax deposits', 'Quarterly tax returns', '1099 preparation', 'Business retirement plan establishment', 'Workers\' compensation audit support', 'Year-end reporting and preparation'];
const taxServices = ['Income tax preparations', 'Business tax returns', 'Individual tax returns', 'Partnership tax services', 'Corporation tax services', 'LLC tax services', 'Estate tax services', 'Trust tax services', 'Sole proprietor tax services'];
const businessServices = ["Incorporation in 24 hours", "Business Consulting", "Business Plan", "Marketing", "Financial Planning"];
const taxIssues = ["Tax audit representation", "Assistance with IRA and state notices", "Electronic filing services", "IRS electronic service provider", "ITIN Numbers"];
const personalServices = ["Processing paychecks", "Filing federal, state, and local tax deposits", "Quarterly tax returns", "1099 preparation", "Business retirement plan establishment", "Workers' compensation audit support", "Year-end reporting and preparation"];