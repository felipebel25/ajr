import { CardService } from "@/components/atoms/cardService/CardService"
import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesSixthSection"

export const SixthSection = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.head}>
                <Box sx={styles.headTitleContainer}>
                    <Typography variant="h5" component='h5' style={styles.headTitle}>Empower your business
                        with our services</Typography>
                </Box>
                <Box sx={styles.headDescription}>
                    <Typography>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </Typography>
                </Box>
            </Box>
            <Box sx={styles.cardsContainer}>
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
                <CardService />
            </Box>
            <Box>
                <Button sx={styles.buttonSeeMore}>
                    See more
                </Button>
            </Box>
        </Box>
    )
}
