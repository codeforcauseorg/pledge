import React, { useEffect, useState } from "react"

import { Button } from "@material-ui/core"
import { useStyles } from "../../static/styles.js"

function Pagination({ userPerPage, totalUsers, paginate }) {
  const classes = useStyles()
  let pageNumbers = []
  let pageRange = []
  const [startPageIndex, setPageIndex] = useState(1)
  const [endButtons] = useState(true)
  const [startButtons] = useState(true)
  //   const [pageRange, setPageRange] = useState([])
  const endPageIndex = Math.ceil(totalUsers / userPerPage)

  useEffect(() => {
    pageRange = []
    for (
      let i = startPageIndex;
      i < startPageIndex + 10 && i <= endPageIndex;
      i++
    ) {
      pageRange.push(i)
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [startPageIndex])

  for (let i = 1; i <= endPageIndex; i++) {
    pageNumbers.push(i)
  }

  for (
    let i = startPageIndex;
    i < startPageIndex + 10 && i <= endPageIndex;
    i++
  ) {
    pageRange.push(i)
  }

  const nextPageByOne = () => {
    if (
      endPageIndex >= startPageIndex + 1 &&
      endPageIndex - startPageIndex === 10
    ) {
      setPageIndex(startPageIndex + 1)
    } else {
      setPageIndex(endPageIndex - 9)
    }
  }
  const nextPageByTen = () => {
    if (
      endPageIndex >= startPageIndex + 10 &&
      endPageIndex - startPageIndex === 10
    ) {
      setPageIndex(startPageIndex + 10)
    } else {
      setPageIndex(endPageIndex - 9)
    }
  }
  const prevPageByOne = () => {
    if (startPageIndex >= 2) {
      setPageIndex(startPageIndex - 1)
    }
  }
  const prevPageByTen = () => {
    if (startPageIndex > 10) {
      setPageIndex(startPageIndex - 10)
    } else if (startPageIndex <= 10) {
      setPageIndex(1)
    }
  }

  const startPage = () => {
    setPageIndex(1)
  }
  const endPage = () => {
    setPageIndex(endPageIndex - 9)
  }

  return (
    <nav>
      {startButtons ? (
        <Button onClick={() => startPage()} className={classes.buttonLink}>
          start
        </Button>
      ) : null}
      <Button onClick={() => prevPageByOne()} className={classes.buttonLink}>
        &lt;
      </Button>
      <Button onClick={() => prevPageByTen()} className={classes.buttonLink}>
        &lt;&lt;
      </Button>
      <ul className={classes.pagination}>
        {pageRange.map(pgno => (
          <li key={pgno} className={classes.pageItem}>
            <Button
              id={pgno.toString()}
              onClick={() => paginate(pgno)}
              className={classes.buttonLink}
            >
              {pgno}
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={() => nextPageByOne()} className={classes.buttonLink}>
        &gt;
      </Button>
      <Button onClick={() => nextPageByTen()} className={classes.buttonLink}>
        &gt;&gt;
      </Button>
      {endButtons ? (
        <Button onClick={() => endPage()} className={classes.buttonLink}>
          end
        </Button>
      ) : null}
    </nav>
  )
}

export default Pagination
