import React from "react"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  AppBar,
  Button,
  Card,
  CardActions,
  // CardMedia,
  Grid,
  Typography,
  Container,
  Chip,
  Divider,
  Avatar
} from "@material-ui/core"
import Link from "@material-ui/core/Link"
import { graphql } from "gatsby"
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
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
    padding :'2px'
  },
  cardMedia: {
    width : '100%',
    height : 'auto',
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  chipActions : {
    display: 'block'
  },
  chip : {
    margin:'8px 0 3px 8px'  
  },
  iconCls : {
      marginLeft:'10px'
  },
  extraMargin:{
    marginTop : '10px',
    marginBottom : '0'
  }
}))

export default function Home({ data }) {
  const classes = useStyles()
  const edges = data.allContributorsJson.edges

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Pledge
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Take a Pledge
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              No one alone can change the world, So lets come together and Code for Cause. One pull request at a time.
              </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" component="a" href="https://github.com/codeforcauseorg/pledge" color="primary" target="_blank">
                    Create a Pull request
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {edges.map(edge => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* <CardMedia
                    className={classes.cardMedia}
                    image={edge.node.image}
                    title="Image title"
                    height="240"
                  /> */}
                  <Avatar height="100" alt="Remy Sharp" src={edge.node.image} />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {`I am ${edge.node.name}`}
                    </Typography>
                    <Typography>{`I code for ${edge.node.cause}`}</Typography>
                    <Typography class={classes.extraMargin}>
                    {`You can reach me at :`}
                    </Typography>
                    <Typography class={classes.extraMargin}>
                      <Link className={classes.iconCls} href={`https://github.com/${edge.node.github}`} component="a" target="_blank">
                       <GitHubIcon ></GitHubIcon>
                      </Link>
                      <Link className={classes.iconCls} href={`https://github.com/${edge.node.github}`} component="a" target="_blank">
                       <FacebookIcon ></FacebookIcon>
                      </Link>
                      <Link className={classes.iconCls} href={`https://github.com/${edge.node.github}`} component="a" target="_blank">
                       <InstagramIcon></InstagramIcon>
                      </Link>
                      <Link className={classes.iconCls} href={`https://github.com/${edge.node.github}`} component="a" target="_blank">
                       <TwitterIcon></TwitterIcon>
                      </Link>
                      <Link className={classes.iconCls} href={`https://github.com/${edge.node.github}`} component="a" target="_blank">
                       <LinkedInIcon></LinkedInIcon>
                      </Link>
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardActions className={classes.chipActions}>
                    {edge.node.skills.slice(0, 3).map(skill => (
                      <Chip className={classes.chip} label={skill} variant="outlined" color="primary" avatar={<Avatar >{skill[0].toUpperCase()}</Avatar>}  />
                    ))}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
export const query = graphql`
  query ContributorsQuery {
    allContributorsJson {
      edges {
        node {
          name
          cause
          skills
          github
          image
        }
      }
    }
  }
`
