import { Box } from "@mui/material"
import { FooterHome } from "../../home/footer/FooterHome"
import { HeaderHome } from "../../home/header/HeaderHome"
import { MainAboutUs } from "../main/MainAboutUs"

export const AboutUs = () => {
    return (
        <Box sx={{ height: "100vh" }} >
            <HeaderHome />
            <MainAboutUs />
            <FooterHome />
        </Box>
    )
}
