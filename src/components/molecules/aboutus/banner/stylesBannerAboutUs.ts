export const styles = {
    main: {
        height: { xs: "auto", md: "43vh" },
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundImage: { xs: "url(/images/aboutus/background_banner_mobile_aboutus.png)", md: "url(/images/aboutus/banner_aboutus.png)" },
        backgroundSize: "100% 100%",
        backgroundBlendMode: 'overlay',
        mixBlendMode: 'overlay',
        backgroundRepeat: "no-repeat",
        padding: { xs: "20% 7%", md: "2% 7%" },
        pb: { xs: "4%", md: "2%" },
        '@media (min-width:2000px) ': {
            padding: "10% 800px"
        }

    },
    titleSections: {
        width: { xs: "100%", md: "45%" },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    descriptionSection: {
        width: { xs: "100%", md: "55%" },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:  "flex-end",
        padding: {xs:"2% 0",md:"2%"},
        mt: '2%',
    },
    title: {
        fontSize: "3.2rem",
        fontWeight: 700,
        color: "white"
    },
    description: {
        color: "white",
        mb: "1%",
        maxWidth: { xs: "none", md: "80%" },
        fontSize: "1.6rem",
        textAlign: { xs: "left", md: "right" }

    },
    button: {
        width: "20rem",
        height: "5rem",
        borderRadius: "3rem",
        '&:hover': {
            backgroundColor: "primary.main",
            opacity: "0.8"
        }
    },
}