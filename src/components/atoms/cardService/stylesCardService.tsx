export const styles = {
    main: {
        width: { xs: "100%", md: "30.23%" },
        height: "60%",
        backgroundColor: "#F6FDFF",
        m: { xs: '2% auto', md: "2% 0" },
        maxWidth: { md: "370px", xl: "550px" },
        p: '2% 0',
        cursor: "pointer",
        '&:hover': {
            boxShadow: '0px 5px 5px rgba(0,0,0,0.08)'
        }
    },
    cardHeader: {
        display: "flex",
        padding: "0",
        height: "30%",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    avatar: {
        backgroundColor: "secondary.main",
        width: "7rem",
        height: "7rem",
        padding: "5%",
        m: "0 5%"

    },
    title: {
        color: "info.dark",
        fontWeight: 600,
        fontSize: "2rem"
    },
    list: {
        pl: 3,
        color: "black"

    },
    listItem: {
        color: "info.main",
        display: 'list-item',
        padding: "0",
        listStyleType: 'disc',
        '&::marker': {
            color: "secondary.main",
            width: "2rem",
            height: '2rem',
            fontSize: "2rem"
        }
    },
    iconContainer: {
        paddingLeft: "1rem"
    },
    icon: {
        width: "4rem",
        height: "4rem"
    },
    arrowIcon: {
        width: "100%",
        height: "100%"
    }
}