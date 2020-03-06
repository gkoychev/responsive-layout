import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

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
