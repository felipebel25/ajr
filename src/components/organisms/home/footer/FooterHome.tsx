import { navigateToPublicUrl } from "@/utils/globalUtils"
import { Box, Theme, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../../../../public/images/svg/components"
import { styles } from "./stylesFooterHome"

export const FooterHome = () => {
    const year = new Date()
    const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <Box component='footer' sx={styles.main}>
            <Box sx={styles.contactSection}>
                <Box sx={styles.contactSectionImage}>
                    <Image
                        alt="QR Code, qrcode, qr, custom qr, qrcustom, codeqr"
                        quality={100}
                        style={!isSmallScreen ? { width: '25%', height: '100%' } : { width: '100%', height: '100%' }}
                        src='/images/ajr_logo.png'
                        width={172}
                        height={40}
                    />
                </Box>
                <Box sx={styles.containerContacts}>
                    <Box sx={styles.contactSectionContact}>
                        <Link href='/'>
                            <Typography sx={styles.contactTitle}>Home</Typography>
                        </Link>
                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Link href='/services'>
                            <Typography sx={styles.contactTitle}>Services</Typography>
                        </Link>
                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Link href='/aboutus'>
                            <Typography sx={styles.contactTitle}>About Us</Typography>
                        </Link>
                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>Contact Us</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.contactSocialLinks}>
                <Box>
                    <Typography>Accounting & Associates LLC® {year.getFullYear()}</Typography>
                </Box>
                <Box sx={styles.containerIconsSocialLinks}>
                    <InstagramIcon onClick={() => navigateToPublicUrl('https://www.instagram.com/samgreencorp/')} sx={styles.iconSocialLink} />
                    <FacebookIcon onClick={() => navigateToPublicUrl('https://www.facebook.com/samgreencorp')} sx={styles.iconSocialLink} />
                </Box>
            </Box>

        </Box>
    )
}
