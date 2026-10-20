import Image from "next/image";
import { useState } from "react";
import CartaModal from "../components/CartaModal";

const SobreNos = () => {
  const [isCartaOpen, setIsCartaOpen] = useState(false);

  return (
    <div className="subpage about-page">
    <section className="subpage-hero about-purpose" aria-labelledby="about-title">
      <div className="subpage-wrap about-purpose__grid">
        <div className="about-purpose__copy">
          <p className="kicker">QUEM SOMOS</p>
          <h1 id="about-title">
            Nosso <em>Propósito</em>
          </h1>
          <div className="about-copy">
            <p>
              O Instituto EDMA nasceu do encontro entre ciência e afeto, entre a
              dor que ensina e a esperança que renasce. Sua razão de existir é
              oferecer cuidado real, que enxerga além dos sintomas e alcança
              aquilo que há de mais humano em cada paciente: sua história, seus
              medos e suas possibilidades.
            </p>
            <p>
              Aqui, cada pessoa é tratada como única. O compromisso do EDMA é
              caminhar ao lado de quem chega, ouvindo, acolhendo e ajustando cada
              etapa do tratamento com rigor científico e sensibilidade. O
              propósito não é apenas aliviar a dor, mas devolver dignidade,
              confiança e qualidade de vida.
            </p>
            <p>
              Mais do que um espaço de atendimento, o EDMA é também um lugar onde
              conhecimento floresce e se multiplica. Um instituto que educa,
              descobre e avança, preparando novas mãos para cuidar e abrindo
              horizontes para que o futuro da medicina seja mais humano e
              inclusivo.
            </p>
          </div>
        </div>

        <figure className="about-purpose__photo">
          <Image
            src="/img/quemsomos.jpg"
            alt="Profissional de saúde acolhendo uma paciente durante uma conversa."
            fill
            sizes="(max-width: 560px) calc(111vw - 42px), (max-width: 800px) calc(111vw - 56px), min(980px, 75vw)"
            quality={100}
            priority
          />
        </figure>
      </div>
    </section>

    <section className="about-letter" aria-labelledby="about-letter-title">
      <div className="subpage-wrap about-letter__inner">
        <h2 id="about-letter-title">
          Uma carta da nossa <em>fundadora.</em>
        </h2>
        <button
          className="btn btn-light"
          type="button"
          aria-haspopup="dialog"
          aria-controls="founder-letter-dialog"
          onClick={() => setIsCartaOpen(true)}
        >
          <span>Leia a Carta de Brunna Varela</span>
          <span className="btn-arrow" aria-hidden="true">↗</span>
        </button>
      </div>
    </section>

    <section className="about-inspiration" aria-labelledby="inspiration-title">
      <div className="subpage-wrap about-inspiration__grid">
        <figure className="about-inspiration__photo">
          <Image
            src="/img/img_v2/inspiracao_site.png"
            alt="Mulher segurando uma folha em meio a uma plantação de cannabis."
            fill
            sizes="(max-width: 560px) calc(100vw - 38px), (max-width: 800px) calc(100vw - 50px), (max-width: 1100px) 36vw, 450px"
            quality={100}
          />
        </figure>

        <div className="about-inspiration__copy">
          <h2 id="inspiration-title">Nossa Inspiração</h2>
          <div className="about-copy">
            <p>
              A inspiração que deu origem ao Instituto EDMA tem nome e rosto:
              Edma. Foi através dela, tia da fundadora, Brunna Varela, que
              nasceram os primeiros passos dessa jornada. Conviver de perto com
              sua luta contra a esquizofrenia revelou as fragilidades da saúde
              mental, as barreiras de acesso a terapias eficazes e o peso do
              estigma que tantas vezes cala vozes e silencia histórias. Mas também
              revelou algo maior: a força silenciosa da resiliência, a delicadeza
              da empatia e a beleza do amor que resiste ao sofrimento.
            </p>
            <p>
              Essa experiência despertou em Brunna a certeza de que dedicaria sua
              vida a buscar novos caminhos para cuidar. Na Biomedicina e na
              Neurociência encontrou a ponte entre dor e transformação, e nas
              terapias canabinoides vislumbrou a possibilidade concreta de
              oferecer alívio e esperança. O Instituto EDMA nasceu desse encontro
              entre ciência e afeto, carregando em seu nome tanto a memória de uma
              mulher que inspirou quanto o compromisso com seus três pilares:
              Educação, Descoberta e Medicina Avançada.
            </p>
            <p>
              Aqui, cada vida é recebida como riqueza preciosa. E é em honra a
              essa história que o EDMA existe: para transformar vulnerabilidade em
              força, silêncio em voz, ciência em cuidado e cuidado em vida.
            </p>
            <p>
              Dar o nome EDMA ao Instituto é eternizar a maior fonte da minha
              inspiração. É homenagem, mas também é promessa. O nome reflete o
              acrônimo Educação, Descoberta e Medicina Avançada, pilares que
              sustentam nosso trabalho. Em sua origem germânica, “Edma” significa
              “protetora dos bens”, “guardião da riqueza” — e para nós, essa
              riqueza é a vida, o amor e a conexão humana. O Instituto EDMA
              carrega esse legado: ser guardião do que é mais precioso,
              transformando ciência em cuidado, acolhimento em esperança e
              histórias em novas possibilidades.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CartaModal open={isCartaOpen} onClose={() => setIsCartaOpen(false)} />
    </div>
  );
};

export default SobreNos;
