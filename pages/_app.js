import "../styles/globals.css";
import "../styles/home.css";
import "../styles/associese.css";
import Layout from "../components/Layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps, router }) {
  const currentPath = router?.asPath?.split(/[?#]/)[0] || "/";
  const canonicalPath = currentPath.startsWith("/")
    ? currentPath
    : `/${currentPath}`;
  const pageUrl = `https://institutoedma.com.br${canonicalPath}`;

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
          content="https://institutoedma.com.br/img/bkg_video-home.jpg"
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Instituto EDMA" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image:secure_url" content="https://institutoedma.com.br/img/bkg_video-home.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="902" />
                <meta
          property="og:image:alt"
          content={"Profissional estuda material sobre cannabis medicinal em uma mesa de trabalho."}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Instituto EDMA | Ci\u00eancia que acolhe, cuidado que transforma"} />
                <meta
          name="twitter:description"
          content={"Sa\u00fade integrativa, orienta\u00e7\u00e3o profissional e cuidado individualizado no Instituto EDMA."}
        />
        <meta name="twitter:image" content="https://institutoedma.com.br/img/bkg_video-home.jpg" />
                <meta
          name="twitter:image:alt"
          content={"Profissional estuda material sobre cannabis medicinal em uma mesa de trabalho."}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
