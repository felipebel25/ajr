export const styles = {
    main: {
        height: "70vh",
        display: "flex",
        width: "100%",
        padding: "2% 7%"
    },
    containerImage: {
        height: "100%",
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    containerText: {
        height: "100%",
        width: "50%",
        padding: "3%"
    },
    yearsExperience: {
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        width: { xs: "25%", xl: "20%" },
        height: { xs: '28%', xl: "26%" },
        maxHeight: '140px',
        maxWidth: '140px',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        textAlign: 'center',
        borderRadius: "50%",
        position: "relative",
        backgroundColor: 'primary.main',
        top: {md:"18rem", xl:"40%"},
        left: "8%",
    },
    yearsExperienceTitle: {
        color: "secondary.main",
        fontWeight: 700,
        fontSize: "4.5rem"
    },
    yearsExperienceText: {
        fontSize: "1rem",
        color: "info.main"

    },
    image: {
        width: "60%",
        padding: "2%",
        boxShadow: '0px 20px 40px rgba(95, 95, 95, 0.2)',
        borderRadius: "2rem"
    },
    titleText: {
        color: "secondary.dark",
        fontSize: "2.8rem",
        fontWeight: 600
    },
    descriptionText: {
        m: "2% 0",
        pr: "12%"
    },
    buttonKnowMore: {
        backgroundColor: "secondary.main",
        color: "primary.main",
        '&:hover': {
            backgroundColor: "secondary.main",
            color: "primary.main",
            opacity: "0.8"

        }
    },
    listItem: {
        width: "90%",
    },
    checkIcon: {
        width: "5%",
        height: "5%",
        mr: "1rem"
    }
}