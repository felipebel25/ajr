import { fonts } from "@/themes/fonts";

export const styles = {
    main: {
        height: { xs: "75%", md: "28vh" },
        backgroundColor: 'secondary.dark',
        padding: "1% 5%",
        paddingTop: "2%",
    },
    contactSection: {
        borderBottom: "0.5px solid #FFFFFF",
        height: "70%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "" },
        alignItems: { xs: "center", md: "" },

    },
    contactSectionImage: {
        width: "60%",
        height: "50%",

    },
    contactSectionContact: {
        width: "fit-content",
        textAlign: "right",
        color: "primary.main",
    },
    contactTitle: {
        fontSize: "1.6rem",
        fontWeight: 500,
        marginBottom: '5%',
        cursor: "pointer",
        '&:hover':{
            opacity:"0.7"
        }
    },
    optionContactLink: {
        width: 'auto',
    },
    containerContacts: {
        width: { xs: "90%", md: "40%" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" }

    },
    contactSocialLinks: {
        display: "flex",
        width: "100%",
        color: "primary.main",
        height: "30%",
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },

    },
    containerIconsSocialLinks: {
        width: { xs: "100%", md: "10%" },
        height: { xs: "50%", md: "auto" },
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "center",
    },
    iconSocialLink: {
        width: { xs: "30%", md: "25%" },
        height: { xs: "70%", md: "25%" },
        cursor: "pointer",
        margin: "0 2%",
        padding: "2%",
        mb: { xs: "2%" },
        '&:hover': {
            opacity: "0.5"
        }
    }
}