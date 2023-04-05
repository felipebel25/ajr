export const styles = {
    main: {
        display: "flex",
        p: { xs: "4% 4%", md: '2% 17%' },
        width: "100%",
        height: "auto",
        flexDirection: { xs: "column", md: "row" },
    },
    containerImg: {
        width: { xs: "100%", md: "40%" },
        height: "100%",
        // border: "1px solid red",
        padding: "1.6rem",
        boxShadow: "0px 20px 40px rgba(95, 95, 95, 0.2)",
        borderRadius: "2rem",
    },
    textSection: {
        width: { xs: "100%", md: "45%" },
        // border: "1px solid red",
        mt: { xs: "4%", md: "0" },
        ml: { xs: "2%", md: "5%" }
    },
    avatar: {
        backgroundColor: "secondary.main",
        width: "7rem",
        height: "6.6rem",
        padding: "4%",
        m: "2.5% 0",
        mr: "3%"

    },
    descriptionImg: {
        width: "100%",
        height: "100%",
        // border: "1px solid red",
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