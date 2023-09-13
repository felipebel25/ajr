import { Avatar, Box, Typography } from "@mui/material"
import { styles } from "./stylesCardRecommend"

interface Props {
    text: string;
    author: string;
    role: string;
}

export const CardRecommend = ({ text = '', author = '', role = '' }: Props) => {
    return (
        <Box sx={styles.main}>
            <Typography sx={styles.text} color='primary.dark'>{text}</Typography>
            <Box sx={styles.person}>
                {/* <Avatar sx={styles.avatar} src="/images/recomendations/women.png" /> */}
                <Box sx={styles.personText} >
                    <Typography sx={styles.personName}> <strong>{author}</strong><br /> {role}</Typography>
                </Box>
            </Box>
        </Box>
    )
}
