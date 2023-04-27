import { Typography } from "@mui/material"

import Link from "next/link";
import { useRouter } from "next/router";

import { styles } from "./stylesLinkHeader";

interface Props {
    href: string;
    text: string;
}

export const LinkHeader = ({ href = '', text = '' }: Props) => {
    const { asPath } = useRouter()
    
    return (
        <Link href={href} >
            <Typography  sx={asPath === href ? styles.linkActive : styles.links}>
                {text}
            </Typography >
        </Link>
    )
}
