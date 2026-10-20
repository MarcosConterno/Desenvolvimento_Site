import Image from "next/image";
import { useEffect, useRef } from "react";
import CartaConteudo from "./CartaConteudo";

export default function CartaModal({ open, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog || dialog.open) return undefined;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeOnBackdrop = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      id="founder-letter-dialog"
      className="founder-letter-modal"
      aria-labelledby="founder-letter-modal-title"
      onClick={closeOnBackdrop}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="founder-letter-modal__frame">
        <header className="founder-letter-modal__header">
          <div className="founder-letter-modal__heading">
            <p className="founder-letter-modal__eyebrow">UMA CARTA COM AFETO</p>
            <h2 id="founder-letter-modal-title">
              Da nossa fundadora, <em>para você.</em>
            </h2>
            <p className="founder-letter-modal__byline">Brunna Varela · Fundadora do Instituto EDMA</p>
          </div>
          <figure className="founder-letter-modal__portrait">
            <Image
              src="/img/foto_carta.png"
              alt="Brunna Varela em seu escritório, com um livro sobre cannabis medicinal."
              fill
              sizes="(max-width: 700px) 92px, 164px"
              quality={100}
            />
          </figure>
          <button
            className="founder-letter-modal__close"
            type="button"
            onClick={onClose}
            aria-label="Fechar carta"
            autoFocus
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </header>
        <div className="founder-letter-modal__body">
          <CartaConteudo />
        </div>
      </div>
    </dialog>
  );
}
