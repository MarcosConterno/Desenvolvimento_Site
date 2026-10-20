import Image from "next/image";
import CartaConteudo from "../components/CartaConteudo";

const Carta = () => (
  <div className="subpage letter-page">
    <section className="subpage-hero letter-hero" aria-labelledby="letter-title">
      <div className="subpage-wrap letter-hero__grid">
        <div className="letter-hero__copy">
          <h1 id="letter-title">
            Uma carta de Brunna Varela,
            <br />
            <em>Fundadora do Instituto</em>
          </h1>
        </div>

        <figure className="letter-hero__photo">
          <Image
            src="/img/foto_carta.png"
            alt="Brunna Varela em seu escritório, com um livro sobre cannabis medicinal."
            fill
            sizes="(max-width: 560px) calc(100vw - 38px), (max-width: 800px) calc(100vw - 50px), (max-width: 1100px) 37vw, 480px"
            quality={100}
            priority
          />
        </figure>
      </div>
    </section>

    <section className="letter-content" aria-labelledby="letter-greeting">
      <CartaConteudo />
    </section>
  </div>
);

export default Carta;
