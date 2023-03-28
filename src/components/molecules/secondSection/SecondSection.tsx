import { Box, Button, Typography } from "@mui/material"
import { styles } from "./stylesSecondSection"
import Image from "next/image"
import { CardRecommend } from "@/components/atoms/cardRecommend/CardRecommend"

export const SecondSection = () => {


    return (
        <Box component='main' sx={styles.main}>
            <CardRecommend />
            <CardRecommend />
            <CardRecommend />
        </Box>
    )
}
