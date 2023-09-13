export const styles = {
    main: {
        width: { xs: "95%", md: "95%", xl: "75%" },
        height: { xs: "100%", xl: "100%" },
        maxWidth: "400px",
        maxHeight: "330px",
        backgroundColor: "#F6FDFF",
        borderRadius: "2rem",
        boxShadow: '0px 10px 20px rgba(95, 95, 95, 0.1)',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: 'center',
        flexDirection: "column",
        padding: "4% 2%",
        m: { xs: "3% auto", sm: "0 auto" },
        '&:hover': {
            boxShadow: '0px 5px 5px rgba(0,0,0,0.08)'
        }
    },
    text: {
        color: "info.contrastText",
        fontWeight: 400,
    },
    person: {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        mt: "5%"
    },
    avatar: {
        mr: "4%",
        width: "5rem",
        height: "5rem",

    },
    personText: {
        textAlign: "center",
    },
    personName: {
        fontWeight: 500,
        color: "info.contrastText"

    },
    personPosition: {
        fontWeight: 400,
        color: "info.contrastText"

    }
}