import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"
import Image from "next/image"
import { styles } from "./stylesFourthSection";

export const FourthSectionAboutUs = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.imgSection}>
                <Box sx={styles.image}>
                    <Image
                        alt="NFC technology"
                        quality={100}
                        style={{ width: "100%", height: "100%" }}
                        src='/images/aboutus/key_to_success.png'
                        width={848}
                        height={836}
                    />
                </Box>
            </Box>
            <Box sx={styles.textSection}>
                <Typography color='info.main' sx={{mb:"3%"}} >
                The key to our success is our personal commitment to helping our clients achieve their goals and objectives. As an integral part of this process, we gain an understanding of our clients&apos; plans for success and the dynamics affecting their businesses and personal lives. We utilize an integrated approach to tax and business planning while considering the individual needs of the shareholders, their estates and their businesses.
                </Typography>
              
                <Typography color='info.main' >
                    <b>
                    Our Firm has built an extraordinary track record of helping clients realize their objectives.
                    </b>
                </Typography>
            </Box>
        </Box>
    )
}

