import { Box,  Typography } from "@mui/material"
import { styles } from "./stylesSeventhSection"

export const SeventhSection = () => {
    return (
        <Box sx={styles.main} component='article'>
            <Box sx={styles.calendaryContainer}>

            </Box>
            <Box sx={styles.textSection}>
                <Typography sx={styles.textTitle}>Schedule an appointment with us</Typography>
                <Typography sx={styles.textDescription}>We currently service all of California, and work with businesses of all sizes in all industries.
                    <br />
                    Call us today to set up a time to talk about your accounting needs.</Typography>

            </Box>
        </Box>
    )
}
