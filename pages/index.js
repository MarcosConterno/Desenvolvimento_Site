import { useState } from "react";
import Image from "next/image";

const whatsappUrl =
  "https://wa.me/554988625097?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta.";

const services = [
  {
    number: "01 / ATENDIMENTO",
    title: "Consulta médica individualizada",
    description:
      "Uma avaliação profissional que considera seu histórico, suas necessidades e possíveis caminhos de cuidado.",
    label: "Saiba como funciona",
    href: "#como-funciona",
    tone: "primary",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 27v-3.2a9 9 0 0 1 18 0V27M12 20l4 3 4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02 / CONTINUIDADE",
    title: "Acompanhamento do tratamento",
    description:
      "Orientação e acompanhamento para reavaliar a evolução e conversar sobre os próximos passos.",
    tone: "",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 25V8m0 17h21M10 21l5-6 4 3 7-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 9h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03 / CONHECIMENTO",
    title: "Orientação sobre cannabis medicinal",
    description:
      "Informação responsável sobre avaliação profissional, possibilidades terapêuticas e caminhos de acesso previstos nas regras vigentes.",
    label: "Acesse o Blog EDMA",
    href: "/blog",
    tone: "featured",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 27V12m0 9c-6 0-9-3-9-8 5 0 9 3 9 8Zm0-5c0-5 3-8 8-8 0 5-3 8-8 8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 27h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01.",
    title: "Primeiro contato",
    description:
      "Conheça os atendimentos disponíveis e escolha o melhor próximo passo para sua necessidade.",
  },
  {
    number: "02.",
    title: "Avaliação com profissional habilitado",
    description:
      "Ouvimos sua história, seus sintomas e expectativas. Na consulta, um profissional habilitado avalia suas necessidades, alternativas de cuidado e possíveis indicações.",
  },
  {
    number: "03.",
    title: "Orientação e acompanhamento",
    description:
      "Quando indicado, acompanhamos sua evolução e conversamos sobre os próximos passos. A necessidade e a frequência dos retornos são definidas para cada situação.",
  },
  {
    number: "04.",
    title: "Acesso aos produtos",
    description:
      "Se houver indicação, orientamos sobre a documentação e os caminhos de acesso aplicáveis, de acordo com a prescrição profissional e as regras vigentes.",
  },
];

const questions = [
  {
    question: "Preciso de uma consulta antes de iniciar um tratamento?",
    answer:
      "Sim. A avaliação de um profissional habilitado permite conversar sobre seu histórico, possibilidades de cuidado, riscos e benefícios antes de definir uma conduta individualizada.",
  },
  {
    question: "Cannabis medicinal é indicada para todas as pessoas?",
    answer:
      "Não. A possibilidade de uso depende da situação de saúde, dos tratamentos já realizados, da avaliação profissional e das evidências disponíveis para cada caso.",
  },
  {
    question: "Como funciona o acesso aos produtos de cannabis?",
    answer:
      "As regras variam conforme o produto e a forma de acesso. Para importação de produto derivado de Cannabis para tratamento da própria saúde, a Anvisa informa que é necessária prescrição de profissional legalmente habilitado. Consulte as orientações oficiais antes de qualquer decisão.",
    link: "https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/controlados/cannabis",
    linkLabel: "Orientações oficiais da Anvisa",
  },
  {
    question: "O acompanhamento continua após a primeira consulta?",
    answer:
      "A necessidade e a frequência do acompanhamento são definidas com o profissional responsável, de acordo com cada situação.",
  },
];

function Arrow() {
  return <span className="btn-arrow" aria-hidden="true">↗</span>;
}

function HomeHero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="home-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="kicker">Saúde integrativa &amp; medicina avançada</div>
          <h1 id="home-title">
            Ciência que <em>acolhe.</em>
            <br />
            Cuidado que
            <br />
            transforma.
          </h1>
          <p className="hero-description">
            Acreditamos em um cuidado que começa pela escuta. Conheça um espaço
            dedicado à orientação profissional, ao conhecimento e ao
            acompanhamento individualizado em saúde.
          </p>
          <div className="hero-actions">
            <a className="btn btn-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
              Quero agendar uma consulta <Arrow />
            </a>
            <a className="ghost-link" href="#como-funciona">
              <span>Entenda como funciona</span> <Arrow />
            </a>
          </div>
          <div className="hero-foot">
            <span className="hero-foot-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3.8 14 9l5.2 2-5.2 2-2 5.2L10 13l-5.2-2L10 9l2-5.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            </span>
            <p>
              <strong>Uma jornada única para cada pessoa.</strong>
              <br />
              Avaliação profissional e decisões individualizadas.
            </p>
          </div>
        </div>
        <MissionVideo className="hero-panel about-video home-video" />
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="pillars" aria-label="Pilares do Instituto EDMA">
      <div className="wrap">
        <div className="pillars-intro">Nossos pilares.<br /><em>Nosso compromisso.</em></div>
        <span className="pillar-divider" aria-hidden="true" />
        <div className="pillar"><span className="pillar-icon">E</span>Educação</div>
        <span className="pillar-divider" aria-hidden="true" />
        <div className="pillar"><span className="pillar-icon">D</span>Descoberta</div>
        <span className="pillar-divider" aria-hidden="true" />
        <div className="pillar"><span className="pillar-icon">MA</span>Medicina avançada</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="atendimentos" aria-labelledby="services-title">
      <div className="wrap">
        <div className="section-label">Nossas formas de cuidar</div>
        <div className="section-head">
          <h2 id="services-title">Um cuidado completo,<br />com foco <em>em você.</em></h2>
          <p>Do primeiro contato ao acompanhamento, cada etapa é pensada para trazer clareza, segurança e acolhimento.</p>
        </div>
        <div className="services">
          {services.map((service) => (
            <article className={`service-card ${service.tone}`} key={service.number}>
              <div className="service-top">
                <span className="service-no">{service.number}</span>
                <span className="service-symbol">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.href && (
                <a className="service-link" href={service.href}>
                  {service.label}<Arrow />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey" id="como-funciona" aria-labelledby="journey-title">
      <div className="wrap journey-grid">
        <div className="journey-media-column">
          <div className="journey-visual">
          <Image
            src="/img/tratamento/consulta_perso.jpg"
            alt="Profissional de saúde em conversa com paciente durante uma consulta"
            width={1024}
            height={683}
            quality={100}
            sizes="(max-width: 800px) 90vw, 45vw"
            className="journey-photo"
          />
          <span className="visual-wash" aria-hidden="true" />
          <span className="visual-corner">Ciência • Cuidado • Pessoas</span>
          <span className="visual-label">Cada jornada importa.</span>
          </div>
          <JourneyStatement />
        </div>
        <div className="journey-heading">
          <div className="section-label">Sua jornada de cuidado</div>
          <h2 id="journey-title">Você não precisa<br />ter todas as <em>respostas.</em></h2>
          <p>O primeiro passo é entender suas necessidades. Nossa proposta é unir escuta, avaliação e informação para apoiar decisões conscientes sobre sua saúde.</p>
          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.number}>
                <span className="step-num">{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </div>
            ))}
          </div>
          <a className="btn btn-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            Começar minha jornada <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="instituto" aria-labelledby="about-title">
      <div className="wrap about-grid">
        <div className="about-copy">
          <div className="section-label">Conheça o Instituto EDMA</div>
          <h2 id="about-title">A ciência é nossa raiz.<br /><em>O cuidado, nosso propósito.</em></h2>
          <p>O Instituto EDMA nasceu do encontro entre ciência e afeto. Seu propósito é oferecer cuidado que enxerga além dos sintomas e considera a história, os medos e as possibilidades de cada pessoa. Educação, descoberta e medicina avançada fazem parte dessa visão de saúde.</p>
          <blockquote className="about-quote">“Mais do que oferecer respostas, queremos abrir caminhos para cuidar melhor.”</blockquote>
          <a className="btn btn-outline" href="/sobrenos">Conheça o instituto <Arrow /></a>
        </div>
        <div className="about-art about-image">
          <Image
            src="/img/img_v2/consulta_img1.png"
            alt="Médica conversa com uma paciente durante uma consulta"
            width={1448}
            height={1086}
            quality={100}
            sizes="(max-width: 800px) 90vw, 42vw"
            className="about-photo"
          />
        </div>
      </div>
    </section>
  );
}

function MissionVideo({ className }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`${className}${isPlaying ? " is-playing" : ""}`}>
      {isPlaying ? (
        <iframe
          src="https://www.youtube-nocookie.com/embed/uihfoL6RcA8?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1"
          title="Nossa missão e propósito — Instituto EDMA"
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          className="about-video__cover"
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Assistir ao vídeo sobre a missão e o propósito do Instituto EDMA"
        >
          <Image
            src="/img/bkg_video.png"
            alt=""
            fill
            quality={100}
            sizes="(max-width: 520px) 570px, (max-width: 800px) 800px, 850px"
            className="about-video__poster"
          />
          <span className="about-video__shade" aria-hidden="true" />
          <span className="about-video__content" aria-hidden="true">
            <span className="about-video__eyebrow">Nossa missão e propósito</span>
            <span className="about-video__title">Conheça o Instituto EDMA</span>
            <span className="about-video__caption">
              Um pouco mais sobre nosso trabalho e valores
            </span>
          </span>
          <span className="about-video__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 6.8v10.4L17 12 9 6.8Z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq" id="duvidas" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-title">
          <div className="section-label">Perguntas frequentes</div>
          <h2 id="faq-title">Informação traz <em>tranquilidade.</em></h2>
          <p>Algumas dúvidas comuns para tornar sua jornada mais clara desde o início.</p>
          <a className="btn btn-outline" href={whatsappUrl} target="_blank" rel="noreferrer">Tenho outras dúvidas <Arrow /></a>
        </div>
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
                <h3>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    {item.question}<span className="faq-plus" aria-hidden="true">+</span>
                  </button>
                </h3>
                <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                  <p>{item.answer}</p>
                  {item.link && <a href={item.link} target="_blank" rel="noreferrer">{item.linkLabel} ↗</a>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JourneyStatement() {
  return (
    <section className="journey-closing" aria-labelledby="journey-statement-title">
      <div className="journey-closing__content">
        <div>
          <div className="section-label">Estamos aqui para você</div>
          <h2 id="journey-statement-title">O primeiro passo pode transformar<br /><em>a forma de se cuidar.</em></h2>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <HomeHero />
      <Pillars />
      <Services />
      <Journey />
      <About />
      <FAQ />
    </div>
  );
}
