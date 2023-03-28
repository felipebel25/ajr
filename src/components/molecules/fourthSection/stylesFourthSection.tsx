export const styles = {
    main: {
        backgroundColor: 'primary.main',
        width: "100%",
        height: { xs: "auto", md: "70vh" },
        padding: {md:"2% 20%", xl:'2% 25%'},
        display: "flex",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "flex-end" },
        mb:"4%"
    },
    imageContainer: {
        width: "auto",
        height: "100%",
        background: "primary.main",
        borderRadius: "1rem",
        padding: "1.6rem",
        boxShadow: "0px 20px 40px rgba(95, 95, 95, 0.2)",
        display: "flex",
    },
    textContainer: {
        width: '50%',
        height: "100%",
        padding: "2% 0%"
    },
    textContainerTitle: {
        fontSize: "3.1rem",
        fontWeight: 600,
    },
    subtitle: {
        fontWeight: 600,
        fontSize: '2rem',
        color: "info.contrastText"
    },
    calendaryContainer: {
        backgroundColor: "secondary.main",
        width: "5rem",
        height: "5rem",
        m: { md: "5% 0" },
        '&:hover': {
            backgroundColor: "secondary.main",
            opacity: "0.7"
        }
    },
    iconCalendary: {
        width: "70%",
        height: "70%"
    },
    calendaryOpacity: {
        opacity: "0.2"
    },
    calendarysContainer: {
        height: "60%",
        mt: '7%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    counterContainer: {
        height: "15rem",
        width: "5%",
        position: "relative",
        bottom: "20%",
        right: "3%",
        borderRadius: "2rem",
        backgroundColor: "primary.main",


    },
    whiteStep: {
        height: '33.33%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    blueStep: {
        height: '33.33%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "secondary.main",
        borderRadius: "0px 0px 2rem 2rem",

    }

}