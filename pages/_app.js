import "../styles/globals.css";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Head from 'next/head'

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
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
