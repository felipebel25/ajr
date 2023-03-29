import { AppBar, Box, Button, IconButton, Menu, MenuItem, useScrollTrigger } from "@mui/material"
import Image from "next/image"

import { LinkHeader } from "@/components/atoms/linkHeader/LinkHeader"

import { MenuOutlined } from "@mui/icons-material"
import { styles } from "./stylesHeaderHome"
import { useRouter } from "next/router"
import { MouseEvent, useCallback, useEffect, useState } from "react"
import { navigateToPublicUrl } from "@/utils/globalUtils"



export const HeaderHome = () => {

    const { push } = useRouter()
    // listener para saber si el navbar o header hizo scroll y cambiar su estilo
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (url: string) => {
        setAnchorEl(null);
        navigateToPublicUrl(url)
    };
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });



    return (
        <Box component={'header'} sx={trigger ? styles.headerScroll : styles.header} >
            {/* ----------------Logo Icon----------------- */}
            <Box sx={styles.logoAjr}>
                <Image
                    onClick={() => push('/')}
                    width={170}
                    height={40}
                    style={{ width: "100%", height: "100%", cursor: "pointer" }}
                    alt='logo samgreencorp, bussines smart cards'
                    src='/images/ajr_logo.png'
                />
            </Box>
            {/* -------------------Links------------------ */}
            <Box sx={styles.linksContainer} >
                <LinkHeader text="Home" href='' />
                <LinkHeader text="Services" href='https://shop.sam-green.com/shop/' />
                <LinkHeader text="About Us" href='' />
                <LinkHeader text="Contact Us" href='' />


                <Button sx={styles.button} target='_blank' href="https://shop.sam-green.com/shop/">Book An Appointment</Button>
            </Box>
            {/* --------------------BurguerIcon---------------- */}
            <IconButton sx={styles.containerBurgerIcon} onClick={handleClick}>
                <MenuOutlined sx={styles.burguerIcon} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={styles.menuItem} onClick={() => {
                    setAnchorEl(null)
                    push('/')
                }}>Home</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://shop.sam-green.com/shop/')}>Shop</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('')}>Products</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('')}>Referral Link</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://shop.sam-green.com/faq/')}>FAQ</MenuItem>
                <MenuItem sx={styles.menuItem} onClick={() => handleClose('https://shop.sam-green.com/contact/')}>Contact</MenuItem>

            </Menu>

        </Box>
    )
}
