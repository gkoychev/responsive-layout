import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

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
