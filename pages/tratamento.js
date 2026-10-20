import Image from "next/image";

const treatmentSteps = [
  {
    title: "Triagem",
    image: "/img/tratamento/triagem.jpg",
    description:
      "O cuidado começa ouvindo sua história. Na triagem, reunimos informações sobre saúde, sintomas e expectativas para compreender suas necessidades antes da consulta.",
  },
  {
    title: "Consulta Personalizada",
    image: "/img/tratamento/consulta_perso.jpg",
    description:
      "Na consulta, você tem espaço para falar livremente. Escutamos com atenção seus sintomas, experiências e expectativas, construindo juntos um plano terapêutico exclusivo.",
  },
  {
    title: "Retorno e Acompanhamento",
    image: "/img/tratamento/retorno.jpg",
    description:
      "Nos retornos, avaliamos sua evolução, ajustamos o tratamento quando necessário e mantemos um acompanhamento próximo, garantindo segurança, eficácia e acolhimento contínuo.",
  },
  {
    title: "Documentação",
    image: "/img/tratamento/docs.jpg",
    description:
      "Cuidamos de toda a parte burocrática: relatórios, receitas e orientações. Assim, você tem acesso ao tratamento de forma tranquila, legal e segura.",
  },
  {
    title: "Acesso aos Produtos",
    image: "/img/tratamento/acesso.png",
    description:
      "Indicamos as melhores formas de acesso — importação ou associações — sempre de acordo com seu quadro clínico. Todo o processo é regulamentado, assegurando qualidade e confiança.",
  },
];

const StepsSection = () => (
  <div className="subpage treatment-page">
    <section className="subpage-hero treatment-section" aria-labelledby="treatment-title">
      <div className="subpage-wrap">
        <header className="treatment-heading">
          <h1 id="treatment-title">COMO INICIAR SEU TRATAMENTO</h1>
          <p className="treatment-subtitle">
            Cada história é diferente, mas em todas nós estamos presentes.
          </p>
        </header>

        <div className="treatment-grid">
          {treatmentSteps.map((step, index) => (
            <article className="treatment-card" key={step.title}>
              <div className="treatment-card__image">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 560px) calc(100vw - 38px), (max-width: 800px) calc((100vw - 66px) / 2), (max-width: 1100px) calc((100vw - 90px) / 3), 400px"
                  quality={100}
                  priority={index === 0}
                />
              </div>
              <div className="treatment-card__body">
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default StepsSection;
