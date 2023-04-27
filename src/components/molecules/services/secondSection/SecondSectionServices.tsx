import { Box, Typography } from "@mui/material"
import { styles } from "./stylesSecondSectionServices"

export const SecondSectionServices = () => {
    return (
        <Box sx={styles.main}>
            <Typography sx={styles.title}>Empower your business
                with our services</Typography>
            <Typography sx={styles.text}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Typography>
        </Box>
    )
}
