export const styles = {
    main: {
        height: { xs: "auto", md: '75vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mb: { xs: "5%", md: "0" },
        scrollMargin: '80px',
    },
    title: {
        fontSize: { xs: "2.4rem", md: '2.8rem' },
        fontWeight: 600,
        color: 'secondary.main',
        texAlign: 'center',
    },
    text: {
        fontSize: { xs: "1.4rem", md: "1.6rem" }
    },
    textsSection: {
        height: '90%',
        width: { xs: '100%', md: "32%", xl: "25%" },
        padding: "2% 1%"
    },
    mapSection: {
        height: { xs: "35rem", md: "90%" },
        width: { xs: '100%', md: "68%", xl: "70%" },
    },
    container: {
        display: 'flex',
        flexDirection: { xs: "column", md: "row" },
        justifyContent: 'space-between',
        height: '90%',
        width: "100%",
        padding: "2% 7%"
    },
    textSectiontitle: {
        fontSize: "2.8rem",
        color: "secondary.main",
        fontWeight: 600,
    },
    iconButtonContainer: {
        backgroundColor: "secondary.main",
        width: { xs: "3rem", md: "5rem" },
        height: { xs: "3rem", md: "5rem" },
        mr: "2rem",
        '&:hover': {
            backgroundColor: "secondary.main",

        },
    },
    icon: {
        width: "90%",
        height: "90%",
    },
    listItem: {
        m: "3% 0",
        pl: { xs: "0", md: "auto" }
    },
    listTextTitle: {
        fontSize: "1.7rem",
        color: "info.main",
        fontWeight: 600,
    },
    listText: {
        color: "#9E9E9E"

    }
}