import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.colorB,
      gridArea: "b",
      minHeight: 100
    }
  })
);

type Props = {};

const ComponentB: React.FC<Props> = () => {
  const classes = useStyles();

  return <div className={classes.root}>B</div>;
};

export default ComponentB;
