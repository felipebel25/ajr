import { MapGoogle } from "@/components/atoms/googleMap/GoogleMap"
import { Call, Email, LocationOn } from "@mui/icons-material"
import { Box, IconButton, List, ListItem, ListItemText, Theme, Typography, useMediaQuery } from "@mui/material"
import { styles } from "./stylesTenthSection"

export const TenthSection = () => {
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={styles.main}>
            <Typography sx={styles.title}>Contact Us</Typography>
            <Box sx={styles.container}>
                <Box sx={styles.textsSection}>
                    {!isSmallScreen && <Typography component='h5' sx={styles.textSectiontitle} >Get in touch</Typography>}
                    <Typography sx={styles.text} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Typography>
                    <List>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <LocationOn sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Head Office</Typography>
                                <Typography>Lorem ipsum dolor sit amet, 1234</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <Email sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Email</Typography>
                                <Typography>ejemplo@ajrwebsite.com</Typography>
                            </Box>
                        </ListItem>
                        <ListItem sx={styles.listItem} >
                            <IconButton sx={styles.iconButtonContainer}>
                                <Call sx={styles.icon} />
                            </IconButton>
                            <Box>
                                <Typography sx={styles.listTextTitle}>Head Office</Typography>
                                <Typography>Phone: +1 555 555 55 55</Typography>
                                <Typography>Fax: +1 555 555 55 55</Typography>
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
