// @ts-nocheck

import React, { Fragment } from "react"

import loadergif from "../../static/loading-opaque.gif"

function Loader() {
  return (
    <Fragment>
      <img
        src={loadergif}
        alt="..."
        style={{ margin: "auto", display: "block", width: "60%" }}
      />
    </Fragment>
  )
}
export default Loader
