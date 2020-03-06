import * as createMuiTheme from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
  // allow configuration using `createMuiTheme`
  interface Theme {
    colors: {
      [key: string]: string;
    };
  }
  interface ThemeOptions {
    colors?: {
      [key: string]: string;
    };
  }
}
