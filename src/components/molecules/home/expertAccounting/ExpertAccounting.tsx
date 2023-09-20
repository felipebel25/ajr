import { Box, Button, Theme, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesExpertAccounting"


export const ExpertAccounting = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={styles.main}>
            <Box sx={styles.textSection}>
                <Typography sx={styles.title} component='h5'>Expert Accounting Services In Different Industries & Businesses</Typography>
                <Typography sx={styles.description}>15 years of experience has taught us that one-size-fits-all approaches don’t help businesses reach their full potential. That’s why we believe in understanding every client—their industry, their culture and their unique challenges—before we lay out any strategy.</Typography>
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
            {isSmallScreen && <Button sx={styles.button} href="https://calendly.com/ajr-accounting/30min">Book An Appointment</Button>}

        </Box>
    )
}
