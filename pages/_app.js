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
          content="Cuidamos de você de uma forma única e especial!"
        />
        <meta property="og:title" content="Instituto EDMA" />
        <meta
          property="og:description"
          content="Cuidamos de você de uma forma única e especial!"
        />
        <meta
          property="og:image"
          content="https://institutoedma.com.br/img/novas/logoverticalverde.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
