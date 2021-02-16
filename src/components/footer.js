// @ts-nocheck

import { Container, Grid, Hidden } from "@material-ui/core"

import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import React from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import YoutubeIcon from "@material-ui/icons/YouTube"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useStyles } from "../../static/styles.js"

function Footer() {
  const classes = useStyles()
  const matches = useMediaQuery("(min-width:600px)")

  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid
          container
          component="dl"
          alignItems="center"
          justify="center"
          item
          xs={12}
          md={12}
        >
          <List style={flexContainer}>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://www.facebook.com/codeforcauseorg"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <FacebookIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Facebook"
                />
              </Hidden>
            </ListItem>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://twitter.com/codeforcauseIn"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <TwitterIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Twitter"
                />
              </Hidden>
            </ListItem>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://www.instagram.com/codeforcause/"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <InstagramIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Instagram"
                />
              </Hidden>
            </ListItem>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <YoutubeIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="Youtube"
                />
              </Hidden>
            </ListItem>
            <ListItem
              className={matches ? classes.paddingCls : classes.paddingClsxs}
              component="a"
              href="https://www.linkedin.com/company/codeforcauseorg/"
              target="_blank"
            >
              <ListItemIcon className={classes.iconSocialMedia}>
                <LinkedInIcon className={classes.iconSize} />
              </ListItemIcon>
              <Hidden xsDown>
                <ListItemText
                  className={classes.iconSocialMedia}
                  primary="LinkedIn"
                />
              </Hidden>
            </ListItem>
          </List>
          {/* </Grid> */}
        </Grid>
      </Container>
    </div>
  )
}
export default Footer
