import Head from "next/head";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog EDMA | Página em construção</title>
        <meta
          name="description"
          content="O Blog EDMA está em construção. Em breve, um novo espaço do Instituto EDMA."
        />
      </Head>
      <div className="subpage blog-page">
        <section className="blog-construction" aria-labelledby="blog-title">
          <div className="blog-construction__panel">
            <div className="blog-construction__texture" aria-hidden="true" />
            <div className="blog-construction__content">
              <p className="blog-construction__eyebrow">Blog EDMA</p>
              <span className="blog-construction__divider" aria-hidden="true" />
              <h1 id="blog-title">
                <span>PÁGINA EM</span>
                <em>CONSTRUÇÃO</em>
              </h1>
              <p className="blog-construction__description">
                Estamos preparando um novo espaço para compartilhar conhecimento,
                informações e novidades do Instituto EDMA.
              </p>
              <Link className="btn btn-light" href="/">
                Voltar para a página inicial
                <span className="btn-arrow" aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="blog-construction__signature" aria-hidden="true">
              <span>EDMA</span>
              <span>Educação · Descoberta · Medicina Avançada</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
