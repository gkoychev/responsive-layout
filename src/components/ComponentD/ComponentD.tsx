import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

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
