import { navigateToPublicUrl } from "@/utils/globalUtils"
import { Box, SvgIcon, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../../../../public/images/svg/components"
import { styles } from "./stylesFooterHome"

export const FooterHome = () => {
    const year = new Date()

    return (
        <Box component='footer' sx={styles.main}>
            <Box sx={styles.contactSection}>
                <Box sx={styles.contactSectionImage}>
                    <Image
                        alt="QR Code, qrcode, qr, custom qr, qrcustom, codeqr"
                        quality={100}
                        style={{width:'25%', height:'100%'}}
                        src='/images/ajr_logo.png'
                        width={172}
                        height={40}
                    />
                </Box>
                <Box sx={styles.containerContacts}>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>Home</Typography>

                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>Services</Typography>
                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>About Us</Typography>
                    </Box>
                    <Box sx={styles.contactSectionContact}>
                        <Typography sx={styles.contactTitle}>Contact Us</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.contactSocialLinks}>
                <Box>
                    <Typography>All rights reserved Accounting & Associates LLC® {year.getFullYear()}</Typography>
                </Box>
                <Box sx={styles.containerIconsSocialLinks}>
                    <InstagramIcon onClick={() => navigateToPublicUrl('https://www.instagram.com/samgreencorp/')} sx={styles.iconSocialLink} />
                    <FacebookIcon onClick={() => navigateToPublicUrl('https://www.facebook.com/samgreencorp')} sx={styles.iconSocialLink} />
                </Box>
            </Box>

        </Box>
    )
}
