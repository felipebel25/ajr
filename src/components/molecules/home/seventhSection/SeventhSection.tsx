import { Box,  Typography } from "@mui/material"
import { styles } from "./stylesSeventhSection"

export const SeventhSection = () => {
    return (
        <Box sx={styles.main} component='article'>
            <Box sx={styles.calendaryContainer}>

            </Box>
            <Box sx={styles.textSection}>
                <Typography sx={styles.textTitle}>Schedule an appointment with us</Typography>
                <Typography sx={styles.textDescription}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Typography>

            </Box>
        </Box>
    )
}
