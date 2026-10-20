import Image from "next/image";

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
      <article className="letter-content__paper">
        <h2 id="letter-greeting">Prazer,</h2>

        <div className="letter-copy">
          <p>
            O Instituto EDMA nasceu de uma travessia marcada por dor e
            resiliência. Da vulnerabilidade mais íntima, ao acompanhar o
            sofrimento da minha tia Edma, surgiu a certeza de que era preciso
            transformar lágrimas em cuidado, barreiras em caminhos e dor em
            esperança. É dela que trago a inspiração e de cada vida que encontro,
            a coragem de seguir adiante.
          </p>
          <p>
            Eu sou Brunna Varela, e quero que você saiba que, ao chegar até nós,
            você não será jamais reduzido a um diagnóstico ou a um prontuário.
            Você é único. A sua história, a sua dor e os seus sonhos são
            reconhecidos como parte essencial do tratamento. O nosso compromisso
            é caminhar ao seu lado em cada etapa dessa jornada, sem jamais soltar
            a sua mão.
          </p>
          <p>
            No EDMA, cada consulta é mais do que um ato médico: é um encontro. É
            o espaço de escuta onde silêncios encontram voz, onde fragilidades
            encontram acolhimento e onde a ciência se une à empatia. A cannabis
            medicinal é uma poderosa ferramenta, mas é no encontro entre técnica
            e humanidade que nasce o verdadeiro tratamento.
          </p>
          <p>
            O Instituto é também um território de ciência e educação. Aqui,
            cultivamos pesquisa que abre novas perspectivas e formamos
            profissionais da saúde para que este cuidado sensível e responsável
            se multiplique, alcançando muitos outros corações e histórias.
            Porque acreditamos que cuidar de uma vida é também preparar muitas
            outras mãos para cuidar.
          </p>
          <p>
            Quero que você sinta segurança. A segurança de ser acompanhado com
            rigor científico, mas também com delicadeza. A certeza de que cada
            dose será ajustada com atenção, cada avanço celebrado, cada
            dificuldade partilhada. Porque para nós, saúde não se limita à
            ausência de sintomas: ela floresce no resgate da dignidade, da
            esperança e da leveza de viver.
          </p>
          <p>
            O EDMA é a expressão do meu propósito. É aqui que coloco minha vida,
            meu conhecimento e meu coração a serviço do cuidado. Que você se
            sinta único, acolhido e em casa. Porque neste Instituto, o cuidado
            não termina — ele floresce com você, em cada passo da sua jornada.
          </p>
        </div>

        <p className="letter-signature">
          Com afeto e compromisso,
          <span>Brunna Varela</span>
          <span>CEO e Fundadora do Instituto EDMA</span>
        </p>
      </article>
    </section>
  </div>
);

export default Carta;
