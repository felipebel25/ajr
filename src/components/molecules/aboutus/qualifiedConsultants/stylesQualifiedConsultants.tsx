export const styles = {
    main: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        padding: "2% 7%",
        maxWidth:"1900px",
        margin: "0 auto",

    },
    imgSection: {
        width: { xs: "100%", md: "35%" },
        display: 'flex',
        maxWidth: "550px",
        alignItems: { xs: "flex-end", md: "flex-start" },
        justifyContent: { xs: "flex-end", md: "flex-start" },
        // border: "1px solid red",
    },
    textSection: {
        width: { xs: "100%", md: "65%" },
        padding: "2%",
        pr: '13%',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        m: { xs: "10% 0", md: "0" }

    },
    image: {
        width: { xs: "100%", md: "auto" },
        padding: "3.5%",
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        borderRadius: "2rem",
        position: "relative",
        left: { xs: "0", md: "15%" },
        // border: "1px solid red",

    },
    textQualified: {
        fontSize: "1.4rem"
    },
    circleContainer: {
        // border: "1px solid red",
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        width: { xs: "10rem", md: "10rem", xl: "13rem" },
        height: { xs: '10rem', md: "10rem", xl: "10rem" },
        maxHeight: '140px',
        maxWidth: '140px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",

        textAlign: 'center',
        borderRadius: { xs: "95%", md: "50%" },
        backgroundColor: 'primary.main',

        position: { xs: "absolute", md: "relative" },
        top: { xs: "initial", md: "70%", xl: "83%" },
        bottom: { xs: "initial", md: "0" },
        right: { xs: "initial", md: "0%" },
        padding: "2%",
    },
}