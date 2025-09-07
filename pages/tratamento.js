const StepsSection = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundColor: "#111A17",
        backgroundImage:
          "linear-gradient(rgba(29, 85, 63, 0.45), rgba(0, 0, 0, 0.35)), url('/img/textura.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#254337] to-[#254337] opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Título e subtítulo */}
        <div className="text-center mb-12">
          <p className="text-4xl lg:text-5xl text-[#a07e28] font-bold mb-4">
            COMO INICIAR SEU TRATAMENTO
          </p>
          <h4
            className="text-1xl uppercase tracking-widest mb-6"
            style={{ color: "#f4f9f5" }}
          >
            Cada história é diferente, mas em todas nós estamos presentes.
          </h4>
        </div>

        {/* Grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 place-items-center">
          {/* TRIAGEM*/}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/triagem.jpg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />
            {/* Overlay para transparência */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-xl"></div>
            {/* Conteúdo (Texto e título) */}
            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Triagem
              </h3>
            </div>
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white">
                  O cuidado começa ouvindo sua história. Na triagem, reunimos
                  informações sobre saúde, sintomas e expectativas para
                  compreender suas necessidades antes da consulta.
                </p>
              </div>
            </div>
          </div>

          {/* CONSULTA */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/consulta_perso.jpg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />
            {/* Overlay para transparência */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-xl"></div>
            {/* Conteúdo (Texto e título) */}
            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Consulta Personalizada
              </h3>
            </div>
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white">
                  Na consulta, você tem espaço para falar livremente. Escutamos
                  com atenção seus sintomas, experiências e expectativas,
                  construindo juntos um plano terapêutico exclusivo.
                </p>
              </div>
            </div>
          </div>

          {/* Retorno e Acompanhamento */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
  w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
  group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/retorno.jpg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />
            {/* Overlay para transparência */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-xl"></div>
            {/* Título posicionado na parte inferior */}
            <div className="absolute bottom-4 w-full text-center z-10">
              <h3 className="text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Retorno e Acompanhamento
              </h3>
            </div>

            {/* Conteúdo (Texto) */}
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white">
                  Nos retornos, avaliamos sua evolução, ajustamos o tratamento
                  quando necessário e mantemos um acompanhamento próximo,
                  garantindo segurança, eficácia e acolhimento contínuo.
                </p>
              </div>
            </div>
          </div>

          {/* Documentação */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/docs.jpg')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />
                        {/* Overlay para transparência */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-xl"></div>
            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Documentação
              </h3>
            </div>
            {/* Conteúdo (Texto e título) */}
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white">
                  Cuidamos de toda a parte burocrática: relatórios, receitas e
                  orientações. Assim, você tem acesso ao tratamento de forma
                  tranquila, legal e segura.
                </p>
              </div>
            </div>
          </div>

          {/* Acesso aos Produtos */}
          <div
            className={`relative flex flex-col items-center text-center p-6 md:p-8 rounded-xl 
            w-full h-full max-w-xs md:max-w-md lg:max-w-lg mb-6 md:mb-0 transform transition duration-300 ease-in-out
            group hover:z-50 hover:scale-110 hover:translate-y-3`}
          >
            {/* Imagem com efeito de blur ativado no hover */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 rounded-xl filter transition-all duration-300 ease-in-out group-hover:blur-sm"
              style={{
                backgroundImage: `url('/img/tratamento/acesso.png')`, // Imagem única
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "rgba(37, 67, 55, 0.6)", // Transparência aplicada ao fundo
              }}
            />
            {/* Overlay para transparência */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none rounded-xl"></div>
            <div className="absolute bottom-4 w-full text-center">
              <h3 className="text-xl font-semibold text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
                Acesso aos Produtos
              </h3>
            </div>
            {/* Conteúdo (Texto e título) */}
            <div className="flex flex-col justify-between h-full w-full z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-white">
                  Indicamos as melhores formas de acesso — importação ou
                  associações — sempre de acordo com seu quadro clínico. Todo o
                  processo é regulamentado, assegurando qualidade e confiança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
