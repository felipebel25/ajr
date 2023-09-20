import { Box } from "@mui/material";

import { HeaderHome } from "../header/HeaderHome"
import { MainHome } from "../main/MainHome"
import { FooterHome } from "../footer/FooterHome"

export const HomeView = () => {

    return (
        <Box sx={{ height: "100vh", width:"100%" }} >
            <HeaderHome />
            <MainHome />
            <FooterHome />
        </Box>
    )
}
