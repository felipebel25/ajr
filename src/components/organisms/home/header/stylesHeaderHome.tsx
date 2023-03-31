
export const styles = {
  header: {
    width: { xs: "100%", md: "100%" },
    height: { xs: "10%", md: "8%" },
    position: "fixed",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "3%", md: "2% 7%" },
    backroundColor: "red"

  },
  headerScroll: {
    width: { xs: "100%", md: "100%" },
    height: { xs: "10%", md: "8%" },
    position: "fixed",
    zIndex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: { xs: "3%", md: "2% 7%" },
    backgroundColor: "secondary.main",

  },
  linksContainer: {
    display: { xs: 'none', md: "flex" },
    width: { xs: "72%", xl: "60%" },
    justifyContent: "flex-end",
    alignItems: "center",
  },
  containerBurgerIcon: {
    display: { xs: "block", md: "none" }
  },
  burguerIcon: {
    width: "3.3rem",
    height: "3.3rem"
  },
  logoAjr: {
    width: { xs: "40%", md: "auto" },
    maxWidth: { xs: "100px", md: "140px", xl: "170px" },

  },
  button: {
    ml: "5%",
    '&:hover': {
      backgroundColor: "primary.main",
      opacity: "0.8"
    }
  },
  menu: {

  },
  menuItem: {
    width: "100%",
    fontSize: "1.7rem"
  }
}


