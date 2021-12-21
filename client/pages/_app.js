import "../styles/globals.css";
import React, { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navigation from "../components/navbar";
import { useRouter } from "next/router";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Noto+Sans+KR&family=Playfair+Display:wght@500&family=Source+Sans+Pro&display=swap');/* Common Styles */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  outline: none;
  color: black;
}

html {
  font-size: 62.5%;
}
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
