import { Avatar, Box, Typography } from "@mui/material"
import { styles } from "./stylesCardRecommend"

export const CardRecommend = () => {
    return (
        <Box sx={styles.main}>
            <Typography sx={styles.text} color='primary.dark'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Typography>
            <Box sx={styles.person}>
                <Avatar sx={styles.avatar} src="/images/recomendations/women.png" />
                <Box sx={styles.personText} >
                    <Typography sx={styles.personName}>Valery Steven</Typography>
                    <Typography sx={styles.personPosition}>Business Manage</Typography>
                </Box>
            </Box>
        </Box>
    )
}
