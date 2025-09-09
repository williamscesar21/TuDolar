export interface DollarRate {
  fuente: string;
  nombre: string;
  compra: number | null;
  venta: number | null;
  promedio: number;
  fechaActualizacion: string;
}

export const getOfficialDollarRate = async (): Promise<number> => {
  try {
    const res = await fetch("https://ve.dolarapi.com/v1/dolares");
    const data: DollarRate[] = await res.json();

    // Filtra la tasa oficial
    const oficial = data.find(d => d.fuente === "oficial");
    if (oficial && oficial.promedio) return oficial.promedio;

    throw new Error("No se encontró la tasa oficial");
  } catch (err) {
    console.error("Error obteniendo la tasa oficial:", err);
    return 0; // fallback si falla
  }
};
