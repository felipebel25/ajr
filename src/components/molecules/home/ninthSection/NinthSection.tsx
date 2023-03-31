import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesNinthSection"


export const NinthSection = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={styles.main}>
            <Box sx={styles.textSection}>
                <Typography sx={styles.title} component='h5'>Expert Accounting Services In Different Industries & Businesses</Typography>
                <Typography sx={styles.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Typography>
                {!isSmallScreen && <Button sx={styles.button}>Book An Appointment</Button>}
            </Box>
            <Box sx={styles.rowsSection}>
                <Box sx={styles.row}>
                    <Typography component='h5' sx={styles.textRow}>Construction Accounting​​</Typography>
                </Box>
                <Box sx={styles.row}>
                    <Typography component='h5' sx={styles.textRow}>Retail Accounting​​</Typography>
                </Box>
                <Box sx={styles.row}>
                    <Typography component='h5' sx={styles.textRow}>Restaurant</Typography>
                </Box>
                <Box sx={styles.row}>
                    <Typography component='h5' sx={styles.textRow}>Import/Export and Distribution Accounting​​</Typography>
                </Box>
                <Box sx={styles.row}>
                    <Typography component='h5' sx={styles.textRow}>Transportation​</Typography>
                </Box>
                <Box sx={styles.row}>
                    <Typography component='h5' sx={styles.textRow}>Non-Profit Organizations​​</Typography>
                </Box>

            </Box>
            {isSmallScreen && <Button sx={styles.button}>Book An Appointment</Button>}

        </Box>
    )
}
