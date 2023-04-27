export const styles = {
    main: {
        backgroundColor: 'primary.main',
        width: "100%",
        height: { xs: "85%", md: "80vh", xl: "70vh" },
        padding: { xs: "2% 5%", md: "2% 3%" },

        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "flex-end",

        backgroundImage: { xs: "url(/images/home/background_schedule_mobile.png)", md: "url(/images/home/calendary_bg.png)" },
        backgroundRepeat: "no-repeat",
        backgroundSize: { xs: "cover", md: "cover" },
        marginTop: "2rem"
    },
    calendaryContainer: {
        width: "50%",
        height: "50%",
    },
    textSection: {
        width: { xs: "100%", md: "45%" },
        p: "5%",
        mt: { xs: "14%", md: "0" },

    },
    textTitle: {
        fontWeight: 700,
        color: "primary.main",
        fontSize: { xs: "2.4rem", md: "4rem" },
        width: { xs: "100%", md: "70%" },
    },
    textDescription: {
        mt: '3%',
        color: "primary.main",
        fontSize: { xs: "2rem", md: "1.6rem" },
    }

}