import React from "react";

const OInstituto = () => {
  return (
    <div className="bg-[#334b35] min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen">
        <img
          className="w-full h-full object-cover absolute inset-0"
          alt="Growing cannabis hemp plants for alternative medicine"
          src="/img/fundo_sobre.png" // Manter a imagem de fundo
        />

        {/* Overlay para transparência */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

        {/* Content overlay */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-12 lg:py-20 max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 lg:mb-20">
            <h1 className="text-white text-4xl sm:text-3xl lg:text-[60px] font-normal mb-4 font-livvic">
              Uma carta de Brunna Varela,
              <br />
              <br />
              Fundadora do Instituto
            </h1>
          </div>

          {/*imagem*/}
          <div className="flex justify-center mb-12 ">
            <img
              className="w-full max-w-[600px] h-auto max-h-[900px] rounded-lg object-cover"
              alt="Instituto EDMA Story Image"
              src="/img/foto_carta.png"
            />
          </div>

          {/* Carta Section */}
          <div className="text-justify mb-12 lg:mb-16">
            {/* Carta da CEO em destaque */}
            <h2 className="text-white text-3xl sm:text-1xl lg:text-[30px] font-semibold mb-4 ml-32 font-livvic">
              Prazer,
            </h2>

            {/* Texto da Carta */}
            <p className="text-white text-base sm:text-lg font-normal leading-[27px] max-w-4xl mx-auto font-livvic text-[18px] sm:text-[20px]">
              O Instituto EDMA nasceu de uma travessia marcada por dor e
              resiliência. Da vulnerabilidade mais íntima, ao acompanhar o
              sofrimento da minha tia Edma, surgiu a certeza de que era preciso
              transformar lágrimas em cuidado, barreiras em caminhos e dor em
              esperança. É dela que trago a inspiração e de cada vida que
              encontro, a coragem de seguir adiante.
              <br />
              <br />
              Eu sou Brunna Varela, e quero que você saiba que, ao chegar até
              nós, você não será jamais reduzido a um diagnóstico ou a um
              prontuário. Você é único. A sua história, a sua dor e os seus
              sonhos são reconhecidos como parte essencial do tratamento. O
              nosso compromisso é caminhar ao seu lado em cada etapa dessa
              jornada, sem jamais soltar a sua mão.
              <br />
              <br />
              No EDMA, cada consulta é mais do que um ato médico: é um encontro.
              É o espaço de escuta onde silêncios encontram voz, onde
              fragilidades encontram acolhimento e onde a ciência se une à
              empatia. A cannabis medicinal é uma poderosa ferramenta, mas é no
              encontro entre técnica e humanidade que nasce o verdadeiro
              tratamento.
              <br />
              <br />
              O Instituto é também um território de ciência e educação. Aqui,
              cultivamos pesquisa que abre novas perspectivas e formamos
              profissionais da saúde para que este cuidado sensível e
              responsável se multiplique, alcançando muitos outros corações e
              histórias. Porque acreditamos que cuidar de uma vida é também
              preparar muitas outras mãos para cuidar.
              <br />
              <br />
              Quero que você sinta segurança. A segurança de ser acompanhado com
              rigor científico, mas também com delicadeza. A certeza de que cada
              dose será ajustada com atenção, cada avanço celebrado, cada
              dificuldade partilhada. Porque para nós, saúde não se limita à
              ausência de sintomas: ela floresce no resgate da dignidade, da
              esperança e da leveza de viver.
              <br />
              <br />O EDMA é a expressão do meu propósito. É aqui que coloco
              minha vida, meu conhecimento e meu coração a serviço do cuidado.
              Que você se sinta único, acolhido e em casa. Porque neste
              Instituto, o cuidado não termina — ele floresce com você, em cada
              passo da sua jornada.
            </p>
          </div>
          <p className="text-white text-base sm:text-lg font-normal leading-[27px] max-w-4xl mx-auto font-livvic text-[18px] sm:text-[20px]">
            Com afeto e compromisso,
            <br />
            <br />
            <span className="font-semibold">Brunna Varela</span>
            <br />
            <span className="font-semibold">
              CEO e Fundadora do Instituto EDMA
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OInstituto;
