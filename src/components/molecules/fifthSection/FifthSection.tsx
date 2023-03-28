import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesFifthSection"

export const FifthSection = () => {
    return (
        <Box sx={styles.main}>
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
        </Box>
    )
}