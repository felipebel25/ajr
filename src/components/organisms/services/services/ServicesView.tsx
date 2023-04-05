import { Box } from "@mui/material"
import { FooterHome } from "../../home/footer/FooterHome"
import { HeaderHome } from "../../home/header/HeaderHome"
import { MainServices } from "../main/MainServices"

export const ServicesView = () => {
    return (
        <Box sx={{ height: "100vh" }} >
            <HeaderHome />
            <MainServices />
            <FooterHome />
        </Box>
    )
}

