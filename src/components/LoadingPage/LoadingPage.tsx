import { CircularProgress, Typography } from "@material-ui/core";
import React from "react";

import { useLoadingPageStyles as useStyles } from "./LoadingPage.styles";

export function LoadingPage() {
  const classes = useStyles();

  return (
    <div className={classes.loaderContainer}>
      <CircularProgress size={100} />

      <Typography variant="subtitle1" className={classes.message}>
        Attempting connection to Saleor Dashboard
      </Typography>
    </div>
  );
}
