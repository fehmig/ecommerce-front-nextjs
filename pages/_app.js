import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;


const fontLink = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontLink }} />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}