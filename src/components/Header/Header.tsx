import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.header,
      gridArea: "header"
    }
  })
);

type Props = {};
const Header: React.FC<Props> = () => {
  const classes = useStyles();
  return <div className={classes.root}>Header</div>;
};

export default Header;
