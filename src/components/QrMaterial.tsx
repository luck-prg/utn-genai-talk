import type { ReactNode } from "react";

/** Texto a la izquierda y, a la derecha, el QR al material con una nota y una flecha dibujadas. */
export function QrMaterial({ children }: { children: ReactNode }) {
  return (
    <div className="con-qr">
      <div className="con-qr-texto">
        {children}
        <div className="con-qr-nota reveal">
          <p>Escaneá el QR para acceder al material: documento y diapositivas</p>
          <span className="con-qr-flecha" aria-hidden="true">
            <svg className="trazo" viewBox="0 0 200 100" preserveAspectRatio="none">
              <path d="M3 18Q14 88 70 86Q128 84 162 58Q182 49 200 50" />
            </svg>
            <svg className="punta" viewBox="0 0 30 100">
              <path d="M0 50L27 50M3 31Q15 41 28 50Q14 60 4 71" />
            </svg>
          </span>
        </div>
      </div>
      <img className="con-qr-img reveal" src="/img/qr-documentacion.svg" alt="Código QR al material de la charla" />
    </div>
  );
}
