export const styles = {
    main: {
        height: { xs: "auto", md: "70vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: { xs: "8% 7%", md: "2% 7%" },
    },
    containerImage: {
        height: "100%",
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "center",

    },
    containerText: {
        height: "100%",
        width: { xs: "100%", md: "50%" },
        padding: { xs: "0", md: "3%" },
        display:{xs:"flex" ,md:"block"},
        flexDirection: "column",
    },
    yearsExperience: {
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        width: { xs: "10rem", md: "25%", xl: "20%" },
        height: { xs: '10rem', md: "28%", xl: "26%" },
        maxHeight: '140px',
        maxWidth: '140px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: 'center',
        borderRadius: { xs: "95%", md: "50%" },
        position: "relative",
        backgroundColor: 'primary.main',
        top: { md: "18rem", xl: "40%" },
        bottom: { xs: "5rem", md: "0" },
        left: { md: "8%" },
        right: { xs: "40%", md: "0" }
    },
    yearsExperienceTitle: {
        color: "secondary.main",
        fontWeight: 700,
        fontSize: { xs: "3.6rem", md: "4.5rem" }
    },
    yearsExperienceText: {
        fontSize: { xs: "0.8rem", md: "1rem" },
        color: "info.main"
    },
    image: {
        width: { xs: "95%", md: "60%" },
        padding: "2%",
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        borderRadius: "2rem"
    },
    titleText: {
        color: "secondary.dark",
        fontSize: "2.8rem",
        fontWeight: 600,
        textAlign: { xs: "center", md: "left" },

    },
    descriptionText: {
        m: "2% 0",
        pr: { xs: "0", md: "12%" },
        textAlign: { xs: "center", md: "left" },
    },
    buttonKnowMore: {
        backgroundColor: "secondary.main",
        color: "primary.main",
        fontSize: { xs: "1.3rem", md: "1.4rem" },
        '&:hover': {
            backgroundColor: "secondary.main",
            color: "primary.main",
            opacity: "0.8"

        }
    },
    listItem: {
        width: { xs: "100%", md: "90%" },
    },
    checkIcon: {
        width: { xs: "10%", md: "5%" },
        height: { xs: "10%", md: "5%" },
        mr: "1rem"
    }
}