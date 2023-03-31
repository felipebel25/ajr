import { Box, useMediaQuery } from "@mui/material"
import { styles } from "./stylesSecondSection"
import { CardRecommend } from "@/components/atoms/cardRecommend/CardRecommend"
import AliceCarousel from "react-alice-carousel"

import 'react-alice-carousel/lib/alice-carousel.css';
import { Theme } from "@mui/system";

export const SecondSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        autoPlay: true,

    };
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
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    return (
        <Box component='main' sx={styles.main}>
            {isSmallScreen ?
                <AliceCarousel
                    disableButtonsControls
                    autoPlayInterval={3000}
                    animationDuration={1000}
                    {...settings}
                    responsive={responsive}
                >
                    <CardRecommend />
                    <CardRecommend />
                    <CardRecommend />
                </AliceCarousel>
                :
                <>
                    <CardRecommend />
                    <CardRecommend />
                    <CardRecommend />
                </>
            }

        </Box>
    )
}
