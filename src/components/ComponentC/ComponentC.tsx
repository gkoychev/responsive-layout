import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.colorC,
      gridArea: "c",
      minHeight: 200
    }
  })
);

type Props = {};

const ComponentC: React.FC<Props> = () => {
  const classes = useStyles();

  return <div className={classes.root}>C</div>;
};

export default ComponentC;
