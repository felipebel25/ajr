import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesBannerAboutUs"

export const BannerAboutUs = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.titleSections}>
                <Typography sx={styles.title} component='h4' variant="h4">Expertise For
                    Financial Growth</Typography>
            </Box>
            <Box sx={styles.descriptionSection}>
                <Typography sx={styles.description}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </Typography>
                <Button sx={styles.button} target='_blank' href="https://shop.sam-green.com/shop/">Book An Appointment</Button>
            </Box>
        </Box>
    )
}
