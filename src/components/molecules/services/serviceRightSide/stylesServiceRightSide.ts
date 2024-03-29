export const styles = {
    main: {
        display: "flex",
        flexDirection: { xs: "column", md: "row-reverse" },
        p: { xs: "4% 4%", md: '2% 17%' },
        width: "100%",
        height: "auto",
        scrollMargin: '10vh',

        '@media (min-width:2000px) ': {
            padding: "2% 1000px"

        }
    },
    containerImg: {
        width: { xs: "100%", md: "40%" },
        height: "100%",
        padding: "1.6rem",
        boxShadow: "0px 20px 40px rgba(95, 95, 95, 0.2)",
        borderRadius: "2rem",
    },
    textSection: {
        width: { xs: "100%", md: "49%" },
        mt: { xs: "4%", md: "0" }
    },
    avatar: {
        backgroundColor: "secondary.main",
        width: "7rem",
        height: "6.6rem",
        padding: "4%",
        m: "2.5% 0",
        mr: "3%",

    },
    descriptionImg: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center"
    },
    descriptionImgTitle: {
        fontSize: "1.8rem",
        fontWeight: 600
    },
    list: {
        pl: 3,
        height: "100%",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

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