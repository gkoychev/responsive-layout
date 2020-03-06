import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import ComponentA from "../../components/ComponentA";
import ComponentB from "../../components/ComponentB";
import ComponentC from "../../components/ComponentC";
import ComponentD from "../../components/ComponentD";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    height: "100vh",

    display: "grid",
    gridTemplateRows: "50px auto auto 150px",
    gridTemplateColumns: "200px auto 200px",
    gridTemplateAreas: `
      "header header header"
      "a c d"
      "b c d"
      "footer footer footer"
    `,

    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.palette.secondary.main,

      gridTemplateRows: "50px 1fr 150px 1fr 150px",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateAreas: `
        "header header"
        "c c"
        "a b"
        "d d"
        "footer footer"
      `
    }
  }
}));

type Props = {};

const Main: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <ComponentA />
      <ComponentB />
      <ComponentC />
      <ComponentD />
      <Footer />
    </div>
  );
};

export default Main;
