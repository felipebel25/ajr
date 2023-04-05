import { Avatar, Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Image from "next/image";
import { styles } from "./stylesFourthSectionServices";

interface Props {
    img: string;
    imgIcon: string;
    title: string;
    texts: string[];
    altImg?: string;
}

export const FourthSectionServices = ({ altImg = 'Ajr', img, imgIcon, title, texts }: Props) => {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.containerImg}>
                <Image
                    alt={altImg}
                    quality={100}
                    style={{ width: "100%", height: "100%" }}
                    src={img}
                    width={848}
                    height={836}
                />
                <Box sx={styles.descriptionImg}>
                    <Avatar
                        sx={styles.avatar}
                        src={imgIcon}
                    />
                    <Typography sx={styles.descriptionImgTitle} >{title}</Typography>
                </Box>
            </Box>
            <Box sx={styles.textSection}>
                <List sx={styles.list}>
                    {texts.map((service: string) => (
                        <ListItem key={service} sx={styles.listItem} >
                            <ListItemText>{service}</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}
