/**
 * Divisor liviano dentro de un bloque: marca un cambio de tema sin cortar el
 * ritmo visual como el `corte` de bloque (que invierte la paleta a pantalla
 * completa). No nombra a quién habla: en pantalla solo va la frase puente.
 */
export function DivisorOrador({ frase }: { frase: string }) {
  return (
    <div className="orador-wrap reveal">
      <div className="orador-rule" />
      <h2 className="display orador-title reveal">{frase}</h2>
    </div>
  );
}
