export const styles = {
    main: {
        height: { xs: "auto", md: "auto" },
        width: "100%",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        padding: "7% 13.5%",

    },
    head: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headDescription: {
        width: { md: "35%", xl: "32%" },

    },
    headTitleContainer: {
        width: { md: "37%", xl: "32%" },
        maxWidth: "400px"

    },
    headTitle: {
        fontSize: "2.8rem",
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
        '&:hover': {
            backgroundColor: "secondary.main",
            color: "primary.main",
            opacity:"0.8"
            
        }
    }

}