import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.colorA,
      gridArea: "a",
      minHeight: 100
    }
  })
);

type Props = {};

const ComponentA: React.FC<Props> = () => {
  const classes = useStyles();

  return <div className={classes.root}>A</div>;
};

export default ComponentA;
