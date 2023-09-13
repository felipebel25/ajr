import { MapGoogle } from "@/components/atoms/googleMap/GoogleMap"
import { Call, Email, LocationOn } from "@mui/icons-material"
import { Box, IconButton, List, ListItem, ListItemText, Theme, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesTenthSection"

export const TenthSection = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={styles.main} id='contact_us'>
            <Typography sx={styles.title}>Contact Us</Typography>
            <Box sx={styles.container}>
                <Box sx={styles.textsSection}>
                    {!isSmallScreen && <Typography component='h5' sx={styles.textSectiontitle} >Get in touch</Typography>}
                    <Typography sx={styles.text} >
                        Call us today to set up a time to talk about your accounting needs.
                    </Typography>
                    <List>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <LocationOn sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Head Office</Typography>
                                <Typography>2750 E SPRING ST.     SUITE 140, LONG BEACH, CA 90806</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <Email sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Email</Typography>
                                <Typography>Contact@AJRaccounting.com</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <Call sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Head Office</Typography>
                                <Typography>Phone: 714-873-6355</Typography>
                                {/* <Typography>Fax: +1 555 555 55 55</Typography> */}
                            </Box>
                        </ListItem>
                    </List>
                </Box>
                <Box sx={styles.mapSection}>
                    <MapGoogle />
                </Box>
            </Box>
        </Box>
    )
}
