import makeStyles from "@material-ui/core/styles/makeStyles"

export const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
  },
  cardMedia: {
    width: "100%",
    height: "auto",
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  chipActions: {
    display: "block",
  },
  chip: {
    margin: "8px 0 3px 8px",
  },
  iconCls: {
    marginLeft: "10px",
  },
  extraMargin: {
    marginTop: "15px",
    marginBottom: "0",
  },
  avatar: {
    height: 155,
    width: 155,
  },
  btn: {
    textTransform: "none",
  },
  copyRight: {
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    "& dt": {
      marginTop: theme.spacing(2),
    },
    color: "#FFF",
  },
  iconSocialMedia: {
    color: "#fff",
    marginLeft: "-10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paddingCls: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  paddingClsxs: {
    padding: 0,
  },
  iconSize: {
    fontSize: "32px",
  },
  logo: {
    borderRadius: "50%",
    marginRight: "14px",
  },
  pagination: {
    display: "inline-block",
    marginLeft: "20px",
    marginRight: "20px",
    paddingLeft: 0,
  },
  pageItem: {
    display: "inline-block",
    border: " 3px solid rgb(224, 224, 224)",
    color: " #000",
    cursor: "pointer",
    marginRight: "6px",
    marginLeft: "6px",
    borderRadius: "30%",

    "&:hover, &:focus": {
      backgroundColor: "#00bbff",
    },
    "&:active,&:click": {
      backgroundColor: "#4a47ff",
    },
  },

  buttonLink: {
    maxWidth: "70px",
    maxHeight: "30px",
    minWidth: "30px",
    minHeight: "30px",
    padding: "2px 2px 2px 2px ",
    display: "inline-block",
    color: "#23527c",
    border: " 1px solid rgb(224, 224, 224)",
    marginLeft: "3px",
    marginRight: "3px",
    fontWeight: "bold",

    "&:hover, &:focus": {
      backgroundColor: "#00bbff",
    },
    "&:active,&:click": {
      backgroundColor: "#4a47ff",
    },
  },
}))
