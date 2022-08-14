import Head from "next/head";
import { UtilProvider } from "../logicController/searchContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Artifact Calculator</title>
        <meta name="author" content="JinDamanee" />
        <meta
          name="description"
          content="Artifact Calculator is a web application that helps you to calculate the artifact value of your gear in genshin impact."
        />
      </Head>
      <UtilProvider>
        <Component {...pageProps} />
      </UtilProvider>
    </>
  );
}

export default MyApp;
