import { ArrowForward } from "@mui/icons-material"
import { Avatar, Box, Card, CardContent, CardHeader, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material"
import { styles } from "./stylesCardService"

export const CardService = () => {
    return (
        <Card sx={styles.main}>
            <Box sx={styles.cardHeader}>
                <Avatar
                    sx={styles.avatar}
                    src="/images/home/business_service.png"
                />
                <Typography sx={styles.title}>Business</Typography>
            </Box>
            <CardContent>
                <List sx={styles.list}>
                    <ListItem sx={styles.listItem} >
                        <ListItemText>Bookkeping</ListItemText>
                    </ListItem>
                    <ListItem sx={styles.listItem} >
                        <ListItemText>Financial Report</ListItemText>
                    </ListItem>
                    <ListItem sx={styles.listItem} >
                        <ListItemText>Audits</ListItemText>
                    </ListItem>
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
