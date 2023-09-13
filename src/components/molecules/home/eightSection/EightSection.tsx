import { CheckCircle } from "@mui/icons-material"
import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesEightSection"

export const EightSection = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerImage}>
                <Box sx={styles.yearsExperience}>
                    <Typography sx={styles.yearsExperienceTitle}>15+</Typography>
                    <Typography sx={styles.yearsExperienceText}>Year of Experience</Typography>
                </Box>
                <Box sx={styles.image}>
                    <Image
                        alt="About us AJR accounting, taxes"
                        quality={100}
                        style={{ width: "100%", height: "100%" }}
                        src='/images/home/about_us.png'
                        width={848}
                        height={836}
                    />
                </Box>
            </Box>
            <Box sx={styles.containerText}>
                <Typography component='h5' sx={styles.titleText}>About Us</Typography>
                <Typography sx={styles.descriptionText}>AJR Accounting & Associates LLC is an accounting and business consulting firm specializing in servicing the financial needs of closely held businesses and high net worth individuals...</Typography>
                <Box>
                    <List>
                        <ListItem sx={styles.listItem}>
                            <CheckCircle sx={styles.checkIcon} color="secondary" />
                            <ListItemText>We know choosing an accounting firm is a difficult task.</ListItemText>
                        </ListItem>
                        <ListItem sx={styles.listItem}>
                            <CheckCircle sx={styles.checkIcon} color="secondary" />
                            <ListItemText>We take pride in our work and our clients.</ListItemText>
                        </ListItem>
                        <ListItem sx={styles.listItem}>
                            <CheckCircle sx={styles.checkIcon} color="secondary" />
                            <ListItemText>We go the extra mile to ensure your business succeeds and we are always available to answer any questions you may have.</ListItemText>
                        </ListItem>
                    </List>
                </Box>
                <Button sx={styles.buttonKnowMore}>Know more</Button>

            </Box>

        </Box>
    )
}
