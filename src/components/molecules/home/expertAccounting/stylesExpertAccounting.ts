export const styles = {
    main: {
        width: "100%",
        height: { xs: "auto", md: "70vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "7%", md: "4% 15%" },
        maxWidth: "1900px",
        margin: "0 auto",
        '@media (min-width:2000px) ': {
            padding: "1% 0%"
        }

    },
    textSection: {
        width: { xs: "100%", md: '50%' },
        height: '85%',
        padding: { md: "4% 7%", xl: "4% 10%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        textAlign: { xs: "center", md: "left" },
        '@media (min-width:2000px) ': {
            width: "30%",
            padding: "1% 0%",
            height: "auto"
        }
    },
    rowsSection: {
        width: { xs: "100%", md: '50%' },
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        "@media (min-width:1900px)": {
            justifyContent: "center",

        }
    },
    row: {
        background: '#FFFFFF',
        width: { xs: "95%", xl: "80%" },
        boxShadow: '0px 10px 20px rgba(95, 95, 95, 0.1)',
        // ----Forma de rectangulo-------
        webkitTransform: 'skew(-20deg)',
        mozTransform: 'skew(-20deg)',
        oTransform: 'skew(-20deg)',
        transform: 'skew(-20deg)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4rem",
        m: { xs: "2% 0", md: "" },


        "@media (min-width:1900px)": {
            m: "2.2% 0",
            height: "6rem"

        }
    },
    textRow: {
        // ----Quitando Forma de rectangulo-------
        webkitTransform: 'skew(20deg)',
        mozTransform: 'skew(20deg)',
        oTransform: 'skew(20deg)',
        transform: 'skew(20deg)',
        color: "info.mian",
        height: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" },
        fontSize: { xs: "1.4rem", md: "1.6rem" },
    },
    title: {
        color: "secondary.dark",
        fontWeight: 700,
        fontSize: "2.8rem",
    },
    description: {
        m: '7.5% 0',
        textAlign: "left"
    },
    button: {
        backgroundColor: "secondary.main",
        color: "primary.main",
        mt: { xs: "8%", md: "0" },
        '&:hover': {
            backgroundColor: "secondary.main",
            color: "primary.main",
            opacity: "0.8"

        }
    },

}