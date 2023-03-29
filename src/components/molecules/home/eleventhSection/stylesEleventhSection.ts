export const styles = {
    main: {
        height: { xs: "85%", xl: "75%" },
        maxHeight: { xs: "0", md: "720px", xl: "900px" },
        backgroundImage: "url(/images/home/email_background.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        display: "flex",
        alignItems: "flex-end",
        padding: "2% 0"
    },
    textSection: {
        width: "35%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "5%"
    },
    formSection: {
        width: "65%",
        height: { xs: "91%", xl: "90%" },
        maxHeight: { md: "600px", xl: "none" },
        padding: { xs: "4% 5%", xl: "0% 5%" },
        mb: { md: "3%", xl: "0%" },


    },
    title: {
        fontSize: "2.8rem",
        fontWeight: 700,
        color: 'primary.main',
    },
    description: {
        color: 'primary.main',
        mt: "5%"
    },
    containerFormInfo: {
        height: "30%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    formFiftyPercent: {
        width: "45%",
        color: "white",
        [`& fieldset`]: {
            borderRadius: '4rem',
            borderColor: 'primary.main',
            color: "primary.main"
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
        }
    },
    labelStyle: {
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 600,
        width: "100%",
    },
    formSubject: {
        color: "white",
        [`& fieldset`]: {
            borderRadius: '4rem',
            borderColor: 'primary.main',
            color: "primary.main"
        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
        }
    },
    formMessage: {
        color: "white",
        m: "2% 0",
        height: '25rem',
        [`& fieldset`]: {
            borderRadius: '4rem',
            borderColor: 'primary.main',
            color: "primary.main",
            height: '25rem',
        },
        [`& input`]: {

            height: '100%',
        },
        [`& textarea`]: {
            margin: "0 1%",
            height: '22rem !important',

        },
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
        }
    },
    labelFormMessage: {
        color: "white",
        height: "25rem",

    },
    button: {
        backgroundColor: "primary.main",
        '&:hover': {
            backgroundColor: "primary.main",
            opacity: 0.8

        }
    }

}