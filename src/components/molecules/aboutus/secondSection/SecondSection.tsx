import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesSecondSection"

export const SecondSectionAbout = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.imgSection}>
                <Box sx={styles.image}>
                    <Image
                        alt="NFC technology"
                        quality={100}
                        style={{ width: "100%", height: "100%" }}
                        src='/images/aboutus/men_handshake.png'
                        width={848}
                        height={836}
                    />
                </Box>
            </Box>
            <Box sx={styles.textSection}>
                <Typography color='info.main' >
                    <b>AJR Accounting & Associates LLC</b> is an accounting and business consulting firm specializing in servicing the financial needs of closely held businesses and high net worth individuals. The Firm takes pride in going beyond providing the customary accounting and tax functions to provide creative solutions to complex business and personal financial and tax issues. We provide:
                </Typography>
                <List sx={styles.list}>
                    {services.map((service: string) => (
                        <ListItem key={service} sx={styles.listItem} >
                            <ListItemText>{service}</ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Typography color='info.main' >
                    <b>
                        Our close involvement with our clients typically elevates us to be considered a key advisor to top management.
                    </b>
                </Typography>
            </Box>
        </Box>
    )
}
const services = [
    "Business consulting",
    "Family succession planning",
    "Back office administration",
    "Litigation support",
    "Merger and acquisition services",
    "Estate and income tax planning",
    "Operational reorganization consulting services for closely held businesses."
];
