import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesThirdSectionAboutUs"

export const ThirdSectionAboutUs = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.textSection}>
                <Typography color='info.main' >
                    We offer the quality of accounting and consulting services that is often only seen in large organizations. However, what differentiates us from the large accounting firms is our creativity, our breadth of experience and close personal service rather than levels of bureaucracy.
                </Typography>
                <Typography sx={{ mt: "5%" }} color='info.main'>
                    In our efforts to provide outstanding service, we often utilize consultants who are of counsel to our Firm to assist us in complex consulting areas. This includes organizational studies, system designs, capital formation alternatives and complex multi-state tax issues.
                </Typography>
            </Box>
            <Box sx={styles.imgSection}>
                <Box sx={styles.image}>
                    <Image
                        alt="NFC technology"
                        quality={100}
                        style={{ width: "100%", height: "100%" }}
                        src='/images/aboutus/offer_quality.png'
                        width={848}
                        height={836}
                    />
                </Box>
                <Box sx={styles.circleContainer}>
                    <Typography sx={styles.textQualified}>Qualified consultants</Typography>
                </Box>
            </Box>
        </Box>
    )
}
