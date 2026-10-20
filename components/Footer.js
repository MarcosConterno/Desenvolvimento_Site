import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isHomePage = useRouter().pathname === "/";
  const homeSection = (id) => (isHomePage ? `#${id}` : `/#${id}`);

  return (
    <footer className="home-footer">
      <div className="wrap home-footer__main">
        <div className="home-footer__brand">
          <Link className="home-footer__logo" href="/" aria-label="Instituto EDMA — início">
            <img
              src="/img/novas/LogoHorizontalBranca.svg"
              alt="Instituto EDMA"
              width="225"
              height="84"
              loading="lazy"
            />
          </Link>
          <p>Ciência, educação, descoberta e cuidado humano em uma só jornada.</p>
        </div>

        <div>
          <h2>Explore</h2>
          <Link href={homeSection("inicio")}>Página inicial</Link>
          <Link href={homeSection("atendimentos")}>Atendimentos</Link>
          <Link href={homeSection("como-funciona")}>Sua jornada</Link>
          <Link href={homeSection("duvidas")}>Dúvidas frequentes</Link>
        </div>

        <div>
          <h2>Instituto</h2>
          <Link href="/sobrenos">Sobre o EDMA</Link>
          <Link href="/tratamento">Etapas do tratamento</Link>
          <Link href="/carta">Carta da fundadora</Link>
          <Link href="/associese">Associe-se</Link>
        </div>

        <div>
          <h2>Contato</h2>
          <a href="https://wa.me/554988625097" target="_blank" rel="noreferrer">
            Fale pelo WhatsApp ↗
          </a>
          <a href="mailto:institutoedma@gmail.com">institutoedma@gmail.com</a>
          <p className="home-footer__note">
            Informações de saúde não substituem avaliação por profissional habilitado.
          </p>
        </div>
      </div>

      <div className="wrap home-footer__bottom">
        <span>© {currentYear} Instituto EDMA. Todos os direitos reservados.</span>
        <span>Conteúdo informativo. Cada conduta depende de avaliação profissional.</span>
      </div>
    </footer>
  );
};

export default Footer;
