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
                    <Typography sx={styles.headDescriptionText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </Typography>
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
                       <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                </AliceCarousel>
                :
                <Box sx={styles.cardsContainer}>
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
                    <CardService />
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
