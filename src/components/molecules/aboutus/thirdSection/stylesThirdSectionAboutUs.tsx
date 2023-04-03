export const styles = {
    main: {
        width: "100%",
        height: "auto",
        display: "flex",
        padding: "2% 7%"

    },
    imgSection: {
        width: "35%",
        display: 'flex',
        maxWidth: "550px",
        alignItems: "center",
        justifyContent: "flex-end",
        // border: "1px solid red",
    },
    textSection: {
        width: "65%",
        padding: "2%",
        pr: '13%',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        width: { xs: "95%", md: "auto" },
        padding: "3.5%",
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        borderRadius: "2rem",
        position: "relative",
        left: "15%",
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
        position: "relative",
        backgroundColor: 'primary.main',
        top: { md: "40%", xl: "43%" },
        bottom: { xs: "5rem", md: "0" },
        right: { xs: "40%", md: "0%" },
        padding: "2%"
    },
}