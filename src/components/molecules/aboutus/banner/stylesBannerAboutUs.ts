export const styles = {
    main: {
        height: { xs: "auto", md: "43vh" },
        width: "100%",
        // border: "1px solid red",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        // backgroundColor: "red",
        backgroundImage: { xs: "url(/images/aboutus/background_banner_mobile_aboutus.png)", md: "url(/images/aboutus/banner_aboutus.png)" },
        backgroundSize: "100% 100%",
        backgroundBlendMode: 'overlay',
        mixBlendMode: 'overlay',
        //   background: 'radial-gradient(circle, rgba(167,176,209,0.5284488795518207) 0%, rgba(87,94,118,0) 35%)',
        //    background: 'radial-gradient(circle, rgba(167,176,209,1) 0%, rgba(87,94,118,0) 15%)',
        backgroundRepeat: "no-repeat",
        padding: { xs: "20% 7%", md: "2% 7%" },
        pb: { xs: "10%", md: "2%" },
    },
    titleSections: {
        // border: "1px solid red",
        width: { xs: "100%", md: "45%" },
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    descriptionSection: {
        width: { xs: "100%", md: "55%" },
        // border: "1px solid red",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "2%",
        mt: '2%'
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
        fontSize: "1.6rem"

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