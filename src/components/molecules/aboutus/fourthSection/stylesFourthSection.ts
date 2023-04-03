export const styles = {
    main: {
        width: "100%",
        height: "auto",
        display: "flex",
        padding: "2% 7%",
        mb:"2%"
    },
    imgSection: {
        width: "35%",
        display: 'flex',
        maxWidth: "550px",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    textSection: {
        width: "65%",
        pl: '13%',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        width: { xs: "95%", md: "auto" },
        padding: "3.5%",
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        borderRadius: "2rem"
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
}