import { Box, Button, TextField, Typography } from "@mui/material"
import { styles } from "./stylesEmailForm"

export const EmailForm = () => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.textSection}>
                <Typography variant="h4" component='h4' sx={styles.title} >Send us a message</Typography>
                <Typography sx={styles.description} >We currently service all of California, and work with businesses of all sizes in all industries.
                    <br />
                    Call us today to set up a time to talk about your accounting needs.</Typography>
            </Box>
            <Box sx={styles.formSection}>
                <Box sx={styles.containerFormInfo}>
                    <TextField
                        placeholder="Full Name"
                        sx={styles.formFiftyPercent}
                        InputProps={{
                            sx: styles.labelStyle
                        }}
                    />
                    <TextField
                        placeholder="Company"
                        sx={styles.formFiftyPercent}
                        InputProps={{
                            sx: styles.labelStyle
                        }}
                    />
                    <TextField
                        placeholder="Email"
                        sx={styles.formFiftyPercent}
                        InputProps={{
                            sx: styles.labelStyle
                        }}
                    />
                    <TextField
                        placeholder="Phone"
                        sx={styles.formFiftyPercent}
                        InputProps={{
                            sx: styles.labelStyle,
                        }}
                    />
                </Box>
                <TextField
                    placeholder="Subject"
                    fullWidth
                    sx={styles.formSubject}
                    InputProps={{
                        sx: styles.labelStyle,
                    }}
                />
                <TextField
                    fullWidth
                    sx={styles.formMessage}
                    multiline
                    rows={2}
                    maxRows={2}
                    placeholder="Message"
                    InputLabelProps={{
                        sx: styles.labelFormMessage,
                    }}
                    InputProps={{
                        sx: styles.labelStyle,
                    }}
                />
                <Button sx={styles.button}>Send</Button>

            </Box>
        </Box>
    )
}
