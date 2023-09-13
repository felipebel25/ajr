import { CardService } from "@/components/atoms/cardService/CardService"

import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material"
import AliceCarousel from "react-alice-carousel";

import { styles } from "./stylesSixthSection"

export const SixthSection = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const responsive = {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        1024: {
            items: 3,
            itemsFit: 'contain'
        },
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoPlay: true,

    };
    return (
        <Box sx={styles.main}>
            <Box sx={styles.head}>
                <Box sx={styles.headTitleContainer}>
                    <Typography variant="h5" component='h5' sx={styles.headTitle}>Empower your business
                        with our services</Typography>
                </Box>
                <Box sx={styles.headDescription}>
                    <Typography sx={styles.headDescriptionText}>We utilize an integrated approach to tax and business planning while considering the individual needs of the shareholders, their estates and their businesses. Our Firm has built an extraordinary track record of helping clients realize their objectives.</Typography>
                </Box>
            </Box>
            {isSmallScreen ?
                <AliceCarousel
                    disableButtonsControls
                    autoPlayInterval={3000}
                    animationDuration={1000}
                    responsive={responsive}
                    {...settings}
                >
                    <CardService
                        title="Business"
                        listItems={['Bookkeeping', 'Financial Reports', 'Audits']}
                        urlIcon="/images/home/business_service.png"
                    />
                    <CardService
                        title="Payrolls"
                        listItems={['Processing paychecks', 'Filing federal, state, and local tax deposits', 'Quarterly tax returns']}
                        urlIcon="/images/home/business_service.png"

                    />
                    <CardService
                        title="Business Registrations"
                        listItems={['Incorporation in 24 hours', 'Business Consulting', 'Business Plan']}
                        urlIcon="/images/home/business_service.png"

                    />
                    <CardService
                        title="Accounting Services"
                        listItems={['Income tax preparations', 'Business tax returns', 'Individual tax returns']}
                        urlIcon="/images/home/business_service.png"

                    />
                    <CardService
                        title="Tax Issues"
                        listItems={['Planning, Preparation', 'Tax audit representation', 'Assistance with IRA and state notices']}
                        urlIcon="/images/home/business_service.png"

                    />
                    <CardService
                        title="Personal Services"
                        listItems={['Processing paychecks', 'Filing federal, state, and local tax deposits', 'Quarterly pax returns']}
                        urlIcon="/images/home/business_service.png"

                    />
                </AliceCarousel>
                :
                <Box sx={styles.cardsContainer}>
                    <CardService
                        title="Business"
                        listItems={['Bookkeeping', 'Financial Reports', 'Audits']}
                        urlIcon="/images/home/business_service.png"
                    />
                    <CardService
                        title="Payrolls"
                        listItems={['Processing paychecks', 'Filing federal, state, and local tax deposits', 'Quarterly tax returns']}
                        urlIcon="/images/home/payroll.png"

                    />
                    <CardService
                        title="Business Registrations"
                        listItems={['Incorporation in 24 hours', 'Business Consulting', 'Business Plan']}
                        urlIcon="/images/home/business_registration.png"

                    />
                    <CardService
                        title="Accounting Services"
                        listItems={['Income tax preparations', 'Business tax returns', 'Individual tax returns']}
                        urlIcon="/images/home/accounting_services.png"

                    />
                    <CardService
                        title="Tax Issues"
                        listItems={['Planning, Preparation', 'Tax audit representation', 'Assistance with IRA and state notices']}
                        urlIcon="/images/home/tax_issues.png"

                    />
                    <CardService
                        title="Personal Services"
                        listItems={['Processing paychecks', 'Filing federal, state, and local tax deposits', 'Quarterly pax returns']}
                        urlIcon="/images/home/personal_services.png"

                    />
                </Box>
            }
            <Box>
                <Button sx={styles.buttonSeeMore}>
                    See more
                </Button>
            </Box>
        </Box>
    )
}
