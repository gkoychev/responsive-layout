import React from "react";
import { makeStyles, createStyles, Button } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.colors.footer,
      gridArea: "footer",
      maxHeight: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  })
);

type Props = {};

const Footer: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" size="small">
        Click Here
      </Button>
    </div>
  );
};

export default Footer;
