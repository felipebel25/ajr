import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"

import { styles } from "./stylesBannerSection"

export const BannerSection = () => {
    return (
        <Box sx={styles.main} component='main' >
            <Box sx={styles.containerFirstSection}>
                <Box sx={styles.containerTitles}>
                    <Typography sx={styles.title} component='h1' variant="h1">Back Taxes Never <br />
                        Go Away On Their Own!</Typography>
                    <Typography sx={styles.subtitle} component='h6' variant="h6">If the IRS is knocking on your door, Our Tax
                        Resolution Team can help you find relief—fast!</Typography>
                    <Button sx={styles.button} target='_blank' href="https://calendly.com/ajraccounting/1-hour-consultation-call">Book An Appointment</Button>
                </Box>
                <Box sx={styles.containerImage}>
                    <Image
                        alt="QR Code, qrcode, qr, custom qr, qrcustom, codeqr"
                        quality={100}
                        style={{ width: "100%", height: "100%" }}
                        // style={styles.imgCard}
                        src='/images/home/man_banner.png'
                        width={1640 }
                        height={1784}
                    />
                </Box>
            </Box>
        </Box>
    )
}
