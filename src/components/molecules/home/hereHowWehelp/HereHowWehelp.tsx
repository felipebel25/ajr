import { Box, Typography } from "@mui/material"
import { styles } from "./stylesHereHowWehelp"

export const HereHowWeHelp = () => {
    return (
        <Box sx={styles.main}>
            <Typography variant="h3" component='h3' sx={styles.title}>Here’s How We Help You <br />
                Get Your Life Back</Typography>
            <Typography sx={styles.text}>The IRS is a financial juggernaut that doesn’t care about the people behind the financial struggles; they simply want their money. At AJR Accounting & Associates LLC, we help shield our clients from this overbearing government agency to help them overcome financial hurdles and stressful times with years of hands-on tax experience! <br />
                Most of this takes place without you ever coming to our offices. We live in a day and age where technology makes it easy for us to represent you no matter where you reside. Of course, you can always come to our offices if you prefer, whatever is more convenient for you.</Typography>
        </Box>
    )
}