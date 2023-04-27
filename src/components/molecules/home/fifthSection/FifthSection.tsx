import { Box, Theme, useMediaQuery } from "@mui/material"
import Image from "next/image"
import AliceCarousel from "react-alice-carousel";
import { styles } from "./stylesFifthSection"

export const FifthSection = () => {
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
            {isSmallScreen ?
                <AliceCarousel
                    autoPlayInterval={3000}
                    animationDuration={1000}
                    responsive={responsive}
                    disableButtonsControls
                    {...settings}

                >
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                </AliceCarousel>
                :
                <>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                    <Box sx={styles.logoStyle}>
                        <Image
                            alt="NFC technology"
                            quality={100}
                            style={{ width: "100%", height: "100%" }}
                            src='/images/home/logo_gray_example.png'
                            width={848}
                            height={836}
                        />
                    </Box>
                </>
            }

        </Box>
    )
}