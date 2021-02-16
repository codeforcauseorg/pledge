// @ts-nocheck
import { AppBar, Button, Container, Grid, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"

import Contributor from "./contributor"
import CssBaseline from "@material-ui/core/CssBaseline"
import Footer from "./footer"
import { Helmet } from "react-helmet"
import Loader from "./loader"
import Logo from "./logo"
import Pagination from "./pagination"
import Toolbar from "@material-ui/core/Toolbar"
import favicon from "../../static/favicon.ico"
import { graphql } from "gatsby"
import { useStyles } from "./styles"

export default function Home({ data }) {
  const classes = useStyles()

  const edges = data.allContributorsJson.edges
  const avatarImages = data.avatarImages
  const coverImages = data.coverImages
  const [loaded, setLoaded] = useState(false)
  //states for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage] = useState(15)
  //parameters for pagination
  const indexOfLastUser = currentPage * userPerPage
  const indexOfFirstUser = indexOfLastUser - userPerPage
  const currentUser = edges.slice(indexOfFirstUser, indexOfLastUser)

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    }, 2500)
  }, [])

  //pagination funtion to update page number
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  if (!loaded) {
    return <Loader />
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pledge</title>
        <link rel="canonical" href="https://pledge.codeforcause.org/" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Logo />
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
              Every contribution counts! So lets come together to Code for a
              Cause &amp; grow together as a community. One pull request at a
              time.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    className={classes.btn}
                    variant="contained"
                    component="a"
                    href="https://github.com/codeforcauseorg/pledge#steps-to-take-the-pledge"
                    color="primary"
                    target="_blank"
                  >
                    Create a Pull Request
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {currentUser.map((edge, index) => {
              // Getting relevant optimised Avatar image
              const avatarFileName = `${edge.node.image}.jpg`
              const avatar = avatarImages.edges.find(
                edge => edge.node.fixed.originalName === avatarFileName
              )

              // Getting relevant optimised Cover image
              const coverFileName = `${edge.node.image}bg.jpg`
              const cover = coverImages.edges.find(
                edge => edge.node.fluid.originalName === coverFileName
              )
              // rendering  contributor component
              return (
                <Contributor
                  edge={edge}
                  avatar={avatar}
                  cover={cover}
                  index={index}
                />
              )
            })}
            {/* Pagination */}
            <Pagination
              userPerPage={userPerPage}
              totalUsers={edges.length}
              paginate={paginate}
            />
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Thank you for supporting the community!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        ></Typography>
      </footer>
      {/* End footer */}
      <Footer />
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
          image
          github
          twitter
          linkedin
        }
      }
    }
    avatarImages: allImageSharp {
      edges {
        node {
          fixed(width: 155, height: 155, quality: 100) {
            ...GatsbyImageSharpFixed
            originalName
          }
        }
      }
    }
    coverImages: allImageSharp {
      edges {
        node {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  }
`
