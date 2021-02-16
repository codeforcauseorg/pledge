// @ts-nocheck

import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core"

import CardContent from "@material-ui/core/CardContent"
import GitHubIcon from "@material-ui/icons/GitHub"
import Img from "gatsby-image"
import Link from "@material-ui/core/Link"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import React from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import { useStyles } from "./styles.js"

function Contributor({ edge, avatar, cover, index }) {
  const classes = useStyles()
  return (
    <Grid key={index} item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          title="Cover pic"
          component={Img}
          fluid={cover.node.fluid}
        />
        <Box mt={-16} display="flex" justifyContent="center">
          <Avatar alt="Contributor" className={classes.avatar} component={Link}>
            <Img fixed={avatar.node.fixed}></Img>
          </Avatar>
        </Box>
        {/* <Avatar alt="Remy Sharp" src={edge.node.image} /> */}

        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {`I am ${edge.node.name}`}
          </Typography>
          <Typography>{`I code for ${edge.node.cause}`}</Typography>
          <Typography className={classes.extraMargin}>
            {`You can reach me at :`}
          </Typography>
          <Typography className={classes.extraMargin}>
            {edge.node.github ? (
              <Link
                className={classes.iconCls}
                href={edge.node.github}
                component="a"
                target="_blank"
              >
                <GitHubIcon></GitHubIcon>
              </Link>
            ) : null}
            {edge.node.twitter ? (
              <Link
                className={classes.iconCls}
                href={edge.node.twitter}
                component="a"
                target="_blank"
              >
                <TwitterIcon></TwitterIcon>
              </Link>
            ) : null}
            {edge.node.linkedin ? (
              <Link
                className={classes.iconCls}
                href={edge.node.linkedin}
                component="a"
                target="_blank"
              >
                <LinkedInIcon></LinkedInIcon>
              </Link>
            ) : null}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions className={classes.chipActions}>
          {edge.node.skills != null
            ? edge.node.skills
                .slice(0, 3)
                .map((skill, i) => (
                  <Chip
                    key={i}
                    className={classes.chip}
                    label={skill}
                    variant="outlined"
                    color="primary"
                    avatar={<Avatar>{skill[0].toUpperCase()}</Avatar>}
                  />
                ))
            : null}
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Contributor
