import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Pagination as PaginationButton } from "@material-ui/lab"

const Pagination = ({ cardsPerPage, totalCards, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i < Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handleChange = (event, value) => {
    paginate(value)
  }

  const useStyles = makeStyles(theme => ({
    pagination: {
      "& > *": {
        marginTop: theme.spacing(7),
      },
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
  }))

  const classes = useStyles()
  return (
    <div>
      <div className={classes.pagination}>
        <PaginationButton
          count={pageNumbers.length}
          page={currentPage}
          onChange={handleChange}
          color="primary"
          size="large"
        />
      </div>
    </div>
  )
}

export default Pagination
