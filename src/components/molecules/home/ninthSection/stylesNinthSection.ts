export const styles = {
    main: {
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4% 15%",
    },
    textSection: {
        width: '50%',
        height: '85%',
        padding: { md: "4% 7%", xl: "4% 10%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
    },
    rowsSection: {
        width: '50%',
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    row: {
        background: '#FFFFFF',
        width: { xs: "90%", xl: "80%" },
        boxShadow: '0px 10px 20px rgba(95, 95, 95, 0.1)',
        // ----Forma de rectangulo-------
        webkitTransform: 'skew(-20deg)',
        mozTransform: 'skew(-20deg)',
        oTransform: 'skew(-20deg)',
        transform: 'skew(-20deg)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4rem"
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
        justifyContent: "center"
    },
    title: {
        color: "secondary.dark",
        fontWeight: 700,
        fontSize: "2.8rem",
    },
    description: {
        m: '5% 0'
    },
    button: {
        backgroundColor: "secondary.main",
        color: "primary.main",
        '&:hover': {
            backgroundColor: "secondary.main",
            color: "primary.main",
            opacity: "0.8"

        }
    },

}