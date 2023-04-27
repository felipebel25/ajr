export const styles = {
    main: {
        backgroundColor: 'primary.main',
        width: "100%",
        height: { xs: "auto", md: "70vh" },
        padding: { xs: "2% 7%", md: "2% 16%", xl: '2% 25%' },
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column-reverse", md: "row" },
        justifyContent: { xs: "center", md: "flex-end" },
        mb: "4%"
    },
    imageContainer: {
        width: "auto",
        height: "100%",
        background: "primary.main",
        borderRadius: "1rem",
        padding: "1.6rem",
        boxShadow: "0px 20px 40px rgba(95, 95, 95, 0.2)",
        display: "flex",
    },
    textContainer: {
        width: { xs: "100%", md: '50%' },
        height: "100%",
        padding: { md: "2% 0%" }
    },
    textContainerTitle: {
        fontSize: { xs: "1.8rem", md: "2,5rem", xl: "3.1rem" },
        fontWeight: 600,
    },
    subtitle: {
        fontWeight: 600,
        fontSize: { xs: "1.4rem", md: '2rem' },
        color: "info.contrastText"
    },
    calendaryContainer: {
        backgroundColor: "secondary.main",
        width: "5rem",
        height: "5rem",
        m: { xs: "4% 0", md: "5% 0" },
        '&:hover': {
            backgroundColor: "secondary.main",
            opacity: "0.7"
        }
    },
    iconCalendary: {
        width: "70%",
        height: "70%",

    },

    calendaryOpacity: {
        opacity: "0.2",
    },
    calendarysContainer: {
        height: "60%",
        mt: '7%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

    },
    counterContainer: {
        display: { xs: "flex", md: "block" },
        height: { xs: "5rem", md: "15rem" },
        justifyContent: "space-around",
        width: { xs: "45%", md: "5%" },
        position: "relative",
        bottom: "2rem",
        left: { xs: "27.5%", md: "-3rem" },
        right: { md: "3%" },
        borderRadius: "2rem",


    },
    whiteStepFirst: {
        height: { xs: "100%", md: '33.33%' },
        width: { xs: "33.33%", md: "100%" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
        justifyContent: "center",
        borderRadius: { xs: "2rem 0 0 2rem", md: "2rem 2rem 0px 0px" },

    },
    whiteStep: {
        height: { xs: "100%", md: '33.33%' },

        width: { xs: "33.33%", md: "100%" },
        display: "flex",
        alignItems: "center",
        backgroundColor: "primary.main",
        justifyContent: "center",
    },
    blueStep: {
        width: { xs: "33.33%", md: "100%" },
        height: { xs: "100%", md: '33.33%' },

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "secondary.main",
        borderRadius: { xs: "0px 2rem 2rem 0px", md: "0px 0px 2rem 2rem" },

    }

}