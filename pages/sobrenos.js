import { useRef, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const TypingEffect = ({ text, typingSpeed = 150, pause = 5000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Digitação letra a letra
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed, pause]);

  return (
    <h1 className="text-white text-4xl sm:text-5xl lg:text-[70px] font-bold font-livvic whitespace-nowrap">
      {displayText}
      {/* Cursor piscando separado */}
      <span className="inline-block w-[4px] h-16 bg-white animate-blink ml-1 align-bottom" />
    </h1>
  );
};

const QuemSomos = () => {
  return (
    <section className="relative overflow-hidden text-white flex flex-col items-center justify-start font-livvic min-h-[90vh]">
      {/* Imagem de fundo */}
      <img
        src="/img/quemsomos.jpg"
        alt=""
        className="
          absolute inset-0 w-full h-full
          object-cover
          object-[center_32%]
          md:object-center
          pointer-events-none select-none
        "
        loading="eager"
      />

      {/* Overlay para transparência */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      {/* Texto centralizado no topo */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 pt-10 flex justify-center">
        <div className="inline-block overflow-hidden text-center">
          <TypingEffect text="QUEM SOMOS" speed={2500} pause={5000} />
        </div>
      </div>
    </section>
  );
};

const SobreNos = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#111A17] to-[#254337]">
      {/* Hero Section with all content */}
      <div className="relative w-full px-4 sm:px-8 lg:px-16 py-12 lg:py-20 max-w-7xl mx-auto">
        {/* Nosso Propósito Section */}
        <div className="text-center mb-20 lg:mb-32 z-10 relative">
          <h2 className="text-[#a07e28] text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 font-livvic">
            Nosso Propósito
          </h2>

          <div className="w-48 sm:w-56 lg:w-64 h-[3px] bg-[#a07e28] mx-auto mb-6" />
          <p className="text-white text-base sm:text-lg font-semibold leading-[27px] max-w-4xl mx-auto font-livvic text-[18px] sm:text-[20px]">
            O Instituto EDMA nasceu do encontro entre ciência e afeto, entre a
            dor que ensina e a esperança que renasce. Sua razão de existir é
            oferecer cuidado real, que enxerga além dos sintomas e alcança
            aquilo que há de mais humano em cada paciente: sua história, seus
            medos e suas possibilidades.
            <br />
            <br />
            Aqui, cada pessoa é tratada como única. O compromisso do EDMA é
            caminhar ao lado de quem chega, ouvindo, acolhendo e ajustando cada
            etapa do tratamento com rigor científico e sensibilidade. O
            propósito não é apenas aliviar a dor, mas devolver dignidade,
            confiança e qualidade de vida.
            <br />
            <br />
            Mais do que um espaço de atendimento, o EDMA é também um lugar onde
            conhecimento floresce e se multiplica. Um instituto que educa,
            descobre e avança, preparando novas mãos para cuidar e abrindo
            horizontes para que o futuro da medicina seja mais humano e
            inclusivo.
          </p>
        </div>

        {/* Imagem de fundo opcional */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url("/img/textura.png")', // Substitua pelo caminho da imagem
            backgroundSize: "cover", // Cobre todo o espaço
            backgroundPosition: "center", // Centraliza a imagem
            backgroundRepeat: "no-repeat", // Evita repetição
            backgroundBlendMode: "overlay", // Sobrepõe ao gradiente
            opacity: 1, // Opacidade correta
          }}
        />
      </div>
    </div>
  );
};

const Carta = () => {
  return (
    <section className="relative bg-[#111A17] overflow-hidden text-white font-livvic min-h-[90vh] md:min-h-[50svh]">
      {/* BG único para mobile e desktop */}
      <img
        src="/img/carta_esc.jpg"
        alt="Imagem de fundo"
        className="absolute inset-0 w-full h-full object-cover object-[center_32%] md:object-center pointer-events-none select-none"
        loading="eager"
      />
      
      {/* Conteúdo */}
      <div className="relative px-6 sm:px-10 md:px-16 py-12 max-w-6xl md:ml-[30px] flex flex-col items-center md:items-end justify-center min-h-[50svh]">
        
        {/* Título */}
        <h1 className="font-bold leading-tight mb-6 text-2xl sm:text-3xl md:text-3xl text-center md:text-center">
          <span className="text-[#254337]">Uma carta da nossa</span>
          <br />
          <span className="text-[#254337] py-2 text-3xl ">fundadora.</span>
        </h1>

        {/* Botão alinhado ao texto */}
        <a
          href="/carta"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#a07e28] text-white text-base sm:text-lg font-small rounded-full hover:bg-[#d7b661] transition duration-300 shadow-lg"
        >
          Leia a Carta de Brunna Varela
        </a>
      </div>
    </section>
  );
};



const SobreNos2 = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#111A17] to-[#254337]">
      {/* Hero Section with all content */}
      <div className="relative w-full px-4 sm:px-8 lg:px-16 py-12 lg:py-20 max-w-7xl mx-auto">
        {/* Nosso Propósito Section */}
        <div className="text-center mb-20 lg:mb-32 z-10 relative">
          <h2 className="text-[#a07e28] text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-4 font-livvic">
            Nossa Inspiração
          </h2>

          <div className="w-48 sm:w-56 lg:w-64 h-[3px] bg-[#a07e28] mx-auto mb-6" />
          <p className="text-white text-base sm:text-lg font-semibold leading-[27px] max-w-4xl mx-auto font-livvic text-[18px] sm:text-[20px]">
            A inspiração que deu origem ao Instituto EDMA tem nome e rosto:
            Edma. Foi através dela, tia da fundadora, Brunna Varela, que
            nasceram os primeiros passos dessa jornada. Conviver de perto com
            sua luta contra a esquizofrenia revelou as fragilidades da saúde
            mental, as barreiras de acesso a terapias eficazes e o peso do
            estigma que tantas vezes cala vozes e silencia histórias. Mas também
            revelou algo maior: a força silenciosa da resiliência, a delicadeza
            da empatia e a beleza do amor que resiste ao sofrimento.
            <br />
            <br />
            Essa experiência despertou em Brunna a certeza de que dedicaria sua
            vida a buscar novos caminhos para cuidar. Na Biomedicina e na
            Neurociência encontrou a ponte entre dor e transformação, e nas
            terapias canabinoides vislumbrou a possibilidade concreta de
            oferecer alívio e esperança. O Instituto EDMA nasceu desse encontro
            entre ciência e afeto, carregando em seu nome tanto a memória de uma
            mulher que inspirou quanto o compromisso com seus três pilares:
            Educação, Descoberta e Medicina Avançada.
            <br />
            <br />
            Aqui, cada vida é recebida como riqueza preciosa. E é em honra a
            essa história que o EDMA existe: para transformar vulnerabilidade em
            força, silêncio em voz, ciência em cuidado e cuidado em vida.
            <br />
            <br />
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

        {/* Imagem de fundo opcional */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: 'url("/img/textura.png")', // Substitua pelo caminho da imagem
            backgroundSize: "cover", // Cobre todo o espaço
            backgroundPosition: "center", // Centraliza a imagem
            backgroundRepeat: "no-repeat", // Evita repetição
            backgroundBlendMode: "overlay", // Sobrepõe ao gradiente
            opacity: 1, // Opacidade correta
          }}
        />
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <QuemSomos />
      <SobreNos />
      <Carta />
      <SobreNos2 />
    </main>
  );
}
