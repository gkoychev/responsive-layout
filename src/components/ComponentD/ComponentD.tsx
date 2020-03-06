import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.colorD,
      gridArea: "d",
      minHeight: 200
    }
  })
);

type Props = {};
const ComponentD: React.FC<Props> = () => {
  const classes = useStyles();
  return <div className={classes.root}>D</div>;
};

export default ComponentD;
