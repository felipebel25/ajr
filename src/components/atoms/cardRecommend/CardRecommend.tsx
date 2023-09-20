import { Box, Rating, Typography } from "@mui/material"
import { styles } from "./stylesCardRecommend"

interface Props {
    text: string;
    author: string;
}

export const CardRecommend = ({ text = '', author = '' }: Props) => {
    return (
        <Box sx={styles.main}>
            <Typography sx={styles.text} color='primary.dark'>{text}</Typography>
            <Box sx={styles.ratingContainer}>
                <Rating
                    name="simple-controlled"
                    value={5}
                />
            </Box>
            <Box sx={styles.person}>
                {/* <Avatar sx={styles.avatar} src="/images/recomendations/women.png" /> */}
                <Box sx={styles.personText} >
                    <Typography sx={styles.personName}> <strong>{author}</strong><br /></Typography>
                </Box>
            </Box>
        </Box>
    )
}
