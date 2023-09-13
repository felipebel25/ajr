import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesBannerAboutUs"

interface Props {
    title: string,
    description?: string,
}

export const BannerAboutUs = ({ title = '', description = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.' }: Props) => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.titleSections}>
                <Typography sx={styles.title} component='h4' variant="h4">{title}</Typography>
            </Box>
            <Box sx={styles.descriptionSection}>
                <Typography sx={styles.description}>{description}</Typography>
                <Button sx={styles.button} target='_blank' href="https://calendly.com/ajraccounting/1-hour-consultation-call">Book An Appointment</Button>
            </Box>
        </Box>
    )
}
