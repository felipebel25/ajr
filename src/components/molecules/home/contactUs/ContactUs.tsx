import { MapGoogle } from "@/components/atoms/googleMap/GoogleMap"
import { Call, Email, LocationOn } from "@mui/icons-material"
import { Box, IconButton, List, ListItem, Theme, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesContactUs"

export const ContactUs = () => {
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
                                <Typography> 234 Mt Prospect Ave, Newark, NJ 07104, United States</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <Email sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Email</Typography>
                                <Typography>info@ajr-accounting.com</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <Call sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Head Office</Typography>
                                <Typography>Phone: +1 973-559-4260</Typography>
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
