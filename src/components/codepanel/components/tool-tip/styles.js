import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  modal: {
    position: "relative",
    [theme.breakpoints.down(768)]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  container: {
    width: "450px",
    height: "auto",
    padding: "10px 15px 25px",
    background: "#FFFFFF",
    border: "5px solid #43D4DD",
    borderRadius: "25px",
    position: "relative",
    top: "200px",
    left: "29px",
    [theme.breakpoints.down(768)]: {
      width: "95%",
      height: "auto",
      top: 0,
      left: '0 !important',
      padding: "30px 10px",
      paddingBottom: "20px",
    },
    [theme.breakpoints.up("md")]: {
      left: "10px",
    },
  },
  slideCount: {
    fontSize: '18px',
    color: '#C4C4C4',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif !important',
    [theme.breakpoints.down(768)]: {
      fontSize: '15px'
    }
  },
  slideLabel: {
    fontSize: '16px',
    color: '#364954',
    fontWeight: '700',
    margin: '0',
    height: '24px',
    [theme.breakpoints.down(768)]: {
      fontSize: '13px'
    }
  },
  arrow: {
    display: 'inline-block',
    width: '74px',
    height: '56px',
    position: 'absolute',
    top: '-60px',
    left: '30px',
    [theme.breakpoints.down(768)]: {
      display: 'none'
    }
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  leftCon: {
    display: 'flex',
    width: '90px',
    flexDirection: 'column',
    textAlign: 'center',
    marginLeft: '-10px'
  },
  homeLogo: {
    background: "#FBDD3F",
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: '0 auto',
    "& img": {
      width: "35px",
      height: "35px",
    },
    [theme.breakpoints.down(768)]: {
      //marginRight: "10px",
    },
  },
  textContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: "20px",
    color: "#364954",
    marginBottom: "4px",
    [theme.breakpoints.down(768)]: {
      fontSize: '16px'
    }
  },
  titleStyle: {
    fontSize: "24px",
    color: "#364954",
    marginBottom: "4px",
    [theme.breakpoints.down(768)]: {
      fontSize: '20px'
    }
  },
  textStyleSmall: {
    fontSize: "20px",
    color: "#364954",
    marginBottom: "4px",
    fontStyle: 'italic',
    [theme.breakpoints.down(768)]: {
      fontSize: '16px'
    }
  },
  selectedText: {
    color: "#d40073",
    fontWeight: "700",
  },
  primaryButton: {
    width: "auto",
    height: "40px",
    fontSize: "24px",
    lineHeight: "24px",
    color: "#FFFFFF",
    background: "#43D4DD !important",
    borderRadius: "25px",
    position: "absolute",
    bottom: "-20px",
    right: "40px",
    padding: '6px 30px',
    fontFamily: 'inherit',
    [theme.breakpoints.down(768)]: {
      right: "50%",
      transform: "translate(50%)",
      fontSize: "18px",
    },
  },
}));
