import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

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
