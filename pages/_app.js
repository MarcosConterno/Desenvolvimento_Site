import "../styles/globals.css";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="icon"
          href="favicon.svg"
          sizes="any"
          type="image/svg+xml"
        ></link>
        <title>Instituto EDMA</title>

        <meta
          name="description"
          content="Instituto EDMA"
        />
        <meta
          property="og:title"
          content="short title of your website/webpage"
        />
        <meta
          property="og:description"
          content="Instituto EDMA"
        />
        <meta
          property="og:image"
          content="https://institutoedma.com.br/img/novas/logoverticalverde.svg"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
