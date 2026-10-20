import Head from "next/head";
import { useState } from "react";

export default function Associese() {
  const [status, setStatus] = useState("idle");

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: envios automatizados são descartados silenciosamente.
    if (formData.get("company")) {
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }

    const payload = {
      name: (formData.get("name") || "").toString().trim(),
      email: (formData.get("email") || "").toString().trim(),
      phone: (formData.get("phone") || "").toString().trim(),
      message: (formData.get("message") || "").toString().trim(),
      role: (formData.get("role") || "").toString(),
      consent: formData.get("consent") === "on",
      _submittedAt: new Date().toISOString(),
      _page: typeof window !== "undefined" ? window.location.href : "",
    };

    const safeFetch = async (url, options) => {
      try {
        const response = await fetch(url, options);
        const text = await response.text().catch(() => "");
        console.debug("[submit]", url, response.status, text);
        return { ok: response.ok, status: response.status, text, url };
      } catch (error) {
        console.debug("[submit:error]", url, error?.message || error);
        return { ok: false, status: 0, text: String(error), url };
      }
    };

    const n8nUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    try {
      const requests = [
        safeFetch("/api/associese", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }),
      ];

      if (n8nUrl) {
        requests.push(
          safeFetch(n8nUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          })
        );
      }

      const results = await Promise.all(requests);
      if (!results.some((result) => result.ok)) {
        console.warn("Nenhum destino aceitou:", results);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <>
      <Head>
        <title>Associe-se | EDMA Instituto</title>
        <meta
          name="description"
          content="Entre em contato para conhecer os próximos passos da associação ao Instituto EDMA."
        />
      </Head>

      <div className="assoc-page">
        <section className="assoc-page__layout" aria-labelledby="assoc-title">
          <div className="assoc-page__intro">
            <div className="assoc-page__intro-content">
              <p className="assoc-page__eyebrow">
                <span aria-hidden="true" /> Médicos e pacientes
              </p>
              <h1 id="assoc-title">
                Um caminho de cuidado começa com uma <em>conversa.</em>
              </h1>
              <p className="assoc-page__lead">
                Entre em contato com o Instituto EDMA. Nossa equipe retornará
                para conversar sobre os próximos passos da associação.
              </p>

              <address className="assoc-page__contacts">
                <a className="assoc-page__contact" href="tel:+5549988625097">
                  <span className="assoc-page__contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7.4 3.8 10 7.1 8.5 9.3c1.2 2.5 3.2 4.5 5.7 5.7l2.2-1.5 3.3 2.6-.7 3.3c-.2.8-.9 1.3-1.7 1.3C9 20.1 3.9 15 3.3 6.7c-.1-.8.5-1.5 1.3-1.7l2.8-1.2Z" />
                    </svg>
                  </span>
                  <span>
                    <small>Telefone de contato</small>
                    <strong>+55 (49) 98862-5097</strong>
                  </span>
                </a>

                <a className="assoc-page__contact" href="mailto:institutoedma@gmail.com">
                  <span className="assoc-page__contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                  </span>
                  <span>
                    <small>E-mail</small>
                    <strong>institutoedma@gmail.com</strong>
                  </span>
                </a>

                <div className="assoc-page__contact">
                  <span className="assoc-page__contact-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
                      <circle cx="12" cy="10" r="2.3" />
                    </svg>
                  </span>
                  <span>
                    <small>Endereço</small>
                    <strong>Rua Fermino Tozzo, 594 — Cordilheira Alta, SC</strong>
                  </span>
                </div>
              </address>

              <p className="assoc-page__signature">EDMA <span>·</span> Ciência, acolhimento e cuidado</p>
            </div>
          </div>

          <div className="assoc-page__form-side">
            <div className="assoc-page__form-heading">
              <p className="assoc-page__form-kicker">FALE COM A NOSSA EQUIPE</p>
              <h2>Vamos conversar?</h2>
              <p>Preencha seus dados e conte como podemos orientar você.</p>
            </div>

            <form
              onSubmit={onSubmit}
              className="assoc-form"
              aria-label="Formulário de associação"
            >
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="assoc-form__honeypot"
                aria-hidden="true"
              />

              <div className="assoc-form__grid">
                <Field className="assoc-form__field--wide">
                  <Label htmlFor="name">Seu nome</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    autoComplete="name"
                    required
                  />
                </Field>

                <Field>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[\d\s()+-]{8,}"
                    required
                  />
                </Field>

                <Field>
                  <Label htmlFor="email">Seu e-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="voce@exemplo.com"
                    autoComplete="email"
                    required
                  />
                </Field>

                <fieldset className="assoc-form__role assoc-form__field--wide">
                  <legend>Você é?</legend>
                  <div className="assoc-form__choices">
                    <label className="assoc-form__choice">
                      <input type="radio" name="role" value="medico" required />
                      <span>Médico</span>
                    </label>
                    <label className="assoc-form__choice">
                      <input type="radio" name="role" value="paciente" />
                      <span>Paciente</span>
                    </label>
                  </div>
                </fieldset>

                <Field className="assoc-form__field--wide">
                  <Label htmlFor="message">Sua mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte brevemente seu objetivo com a associação"
                    rows={4}
                    required
                  />
                </Field>
              </div>

              <label className="assoc-form__consent">
                <input type="checkbox" name="consent" required />
                <span>
                  Concordo em receber contato do Instituto EDMA e aceito a
                  política de privacidade.
                </span>
              </label>

              <div className="assoc-form__submit-row">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="assoc-form__submit"
                >
                  {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                  {status !== "sending" && <span aria-hidden="true">↗</span>}
                </button>

                {status === "success" && (
                  <p className="assoc-form__status assoc-form__status--success" role="status">
                    Mensagem enviada com sucesso!
                  </p>
                )}
                {status === "error" && (
                  <p className="assoc-form__status assoc-form__status--error" role="alert">
                    Ocorreu um erro ao enviar. Tente novamente.
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

function Field({ children, className = "" }) {
  return <div className={`assoc-form__field ${className}`}>{children}</div>;
}

function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor} className="assoc-form__label">{children}</label>;
}

function Input(props) {
  return <input {...props} className="assoc-form__control" />;
}

function Textarea(props) {
  return <textarea {...props} className="assoc-form__control assoc-form__control--textarea" />;
}
