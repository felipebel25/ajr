export const styles = {
    main: {
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '2.8rem',
        fontWeight: 600,
        color: 'secondary.main',
        texAlign: 'center',
    },
    textsSection: {
        height: '90%',
        width: { xs: '32%', xl: "25%" },
        padding: "2% 1%"
    },
    mapSection: {
        height: '90%',
        width: { xs: '68%', xl: "70%" },
    },
    container: {
        display: 'flex',
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
        width: "5rem",
        height: "5rem",
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
        m: "3% 0"
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