import "../styles/globals.css";
import "../styles/home.css";
import Layout from "../components/Layout";
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
        <title>Instituto EDMA | Ciência que acolhe, cuidado que transforma</title>

        <meta name="theme-color" content="#173a2c" />

        <meta
          name="description"
          content="Saúde integrativa, orientação profissional e cuidado individualizado no Instituto EDMA."
        />
        <meta property="og:title" content="Instituto EDMA | Ciência que acolhe, cuidado que transforma" />
        <meta
          property="og:description"
          content="Saúde integrativa, orientação profissional e cuidado individualizado no Instituto EDMA."
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
