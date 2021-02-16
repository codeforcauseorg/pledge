// @ts-nocheck

import React from "react"
import { useStyles } from "../../static/styles.js"

function Logo() {
  const classes = useStyles()
  return (
    <img
      className={classes.logo}
      alt="Logo"
      width="50px"
      height="50px"
      src="logo.jpg"
    />
  )
}
export default Logo
