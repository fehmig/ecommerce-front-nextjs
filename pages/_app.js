import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color:#eee;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;


const fontLink = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;600;700&display=swap');
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