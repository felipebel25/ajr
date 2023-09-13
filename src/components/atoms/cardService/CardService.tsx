import { ArrowForward } from "@mui/icons-material"
import { Avatar, Box, Card, CardContent, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material"
import { styles } from "./stylesCardService"
import { useRouter } from "next/router";

interface Props {
    title: string;
    listItems: string[];
    urlIcon: string;

}

export const CardService = ({ title, listItems, urlIcon }: Props) => {
    const { push } = useRouter()
    return (
        <Card sx={styles.main} onClick={() => push(`/services/#services_${title.toLowerCase().trim()}`)}>
            <Box sx={styles.cardHeader}>
                <Avatar
                    sx={styles.avatar}
                    src={urlIcon}
                />
                <Typography sx={styles.title}>{title}</Typography>
            </Box>
            <CardContent>
                <List sx={styles.list}>
                    {listItems.map((item) => (
                        <ListItem key={item} sx={styles.listItem} >
                            <ListItemText>{item}</ListItemText>
                        </ListItem>

                    ))}
                </List>
            </CardContent>
            <Box sx={styles.iconContainer}>
                <IconButton color="info" sx={styles.icon}>
                    <ArrowForward sx={styles.arrowIcon} />
                </IconButton>
            </Box>
        </Card>
    )
}
