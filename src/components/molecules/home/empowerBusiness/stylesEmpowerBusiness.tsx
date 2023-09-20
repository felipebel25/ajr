export const styles = {
    main: {
        height: { xs: "auto", md: "auto" },
        width: "100%",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: { xs: "center", md: "stretch" },
        padding: { xs: "6% 7%", md: "3.5% 13.5%" },
        maxWidth: "1900px",
        margin: "0 auto",
        '@media (min-width:2000px) ': {
            padding: "2% 0"
        }

    },
    head: {
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: 'row' },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        textAlign: { xs: "center", md: "left" },
    },
    headDescription: {
        width: { md: "35%", xl: "32%" },

    },
    headDescriptionText: {
        m: "5% 0",
        fontSize: "1.4rem",
        color: "info.main"
    },
    headTitleContainer: {
        width: { md: "37%", xl: "32%" },
        maxWidth: "400px"

    },
    headTitle: {
        fontSize: { xs: "2.4rem", md: "2.8rem" },
        fontWeight: 600,
        color: "primary.dark"
    },
    cardsContainer: {
        height: "90%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "3% 0"
    },
    buttonSeeMore: {
        backgroundColor: "secondary.main",
        color: "primary.main",
        mt: { xs: "25%", md: "0" },
        '&:hover': {
            backgroundColor: "secondary.main",
            color: "primary.main",
            opacity: "0.8"

        }
    }

}