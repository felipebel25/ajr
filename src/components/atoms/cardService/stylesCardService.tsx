export const styles = {
    main: {
        width: "30.23%",
        height: "60%",
        backgroundColor: "#F6FDFF",
        m: '2% 0',
        maxWidth: { md: "370px", xl: "550px" },
        p: '2% 0'
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
        height: "6.6rem",
        padding: "4%",
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