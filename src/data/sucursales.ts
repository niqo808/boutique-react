import centralImg from "@/assets/sucursales/central.jpeg";
import central2Img from "@/assets/sucursales/central2.jpeg";
import villarosaImg from "@/assets/sucursales/villarosa.jpeg";
import villarosa2Img from "@/assets/sucursales/villarosa2.jpeg";
import sourdeauxImg from "@/assets/sucursales/sourdeaux.jpeg";
import carne1Img from "@/assets/sucursales/carne1.jpeg";
import carne2Img from "@/assets/sucursales/carne2.jpeg";
import carne3Img from "@/assets/sucursales/carne3.jpeg";
import carne4Img from "@/assets/sucursales/carne4.jpeg";
import mostradorImg from "@/assets/sucursales/mostrador.jpeg";

export interface Sucursal {
  id: number;
  nombre: string;
  zona: string;
  direccion: string;
  lat: number;
  lng: number;
  telefono: string;
  email: string;
  servicios: string[];
  imagenes: string[];
  horario: {
    lunesSabado: { apertura1: string; cierre1: string; apertura2: string; cierre2: string };
    domingoFeriados: { apertura: string; cierre: string };
  };
}

export const sucursales: Sucursal[] = [
  {
    id: 1,
    nombre: "Casa Central",
    zona: "Villa Rosa",
    direccion: "Esquina Moreno y Sarmiento",
    lat: -34.4186,
    lng: -58.8707,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Parking", "Wi-Fi"],
    imagenes: [centralImg, central2Img, carne1Img],
    horario: {
      lunesSabado: { apertura1: "08:00", cierre1: "13:00", apertura2: "17:00", cierre2: "21:00" },
      domingoFeriados: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 2,
    nombre: "Sucursal II",
    zona: "Villa de Mayo",
    direccion: "Eva Perón 4505",
    lat: -34.4974,
    lng: -58.6756,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery"],
    imagenes: [carne2Img, carne3Img, mostradorImg],
    horario: {
      lunesSabado: { apertura1: "08:00", cierre1: "13:00", apertura2: "17:00", cierre2: "21:00" },
      domingoFeriados: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 3,
    nombre: "Sucursal III",
    zona: "Villa Rosa",
    direccion: "Esquina Almirante Brown y Descalzi",
    lat: -34.4130,
    lng: -58.8650,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Wi-Fi"],
    imagenes: [villarosaImg, villarosa2Img, carne4Img],
    horario: {
      lunesSabado: { apertura1: "08:00", cierre1: "13:00", apertura2: "17:00", cierre2: "21:00" },
      domingoFeriados: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 4,
    nombre: "Sucursal IV",
    zona: "Adolfo Sourdeaux",
    direccion: "Derqui 1242",
    lat: -34.5032,
    lng: -58.6671,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Parking"],
    imagenes: [sourdeauxImg, carne1Img, mostradorImg],
    horario: {
      lunesSabado: { apertura1: "08:00", cierre1: "13:00", apertura2: "17:00", cierre2: "21:00" },
      domingoFeriados: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 5,
    nombre: "Sucursal V",
    zona: "Matheu",
    direccion: "San Martín 262",
    lat: -34.3829,
    lng: -58.8251,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Wi-Fi"],
    imagenes: [carne3Img, carne4Img, carne2Img],
    horario: {
      lunesSabado: { apertura1: "08:00", cierre1: "13:00", apertura2: "17:00", cierre2: "21:00" },
      domingoFeriados: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 6,
    nombre: "Sucursal VI",
    zona: "Don Torcuato",
    direccion: "Triunvirato 1596, esquina Chile",
    lat: -34.4870,
    lng: -58.6141,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Parking", "Wi-Fi"],
    imagenes: [carne1Img, carne2Img, carne4Img],
    horario: {
      lunesSabado: { apertura1: "08:00", cierre1: "13:00", apertura2: "17:00", cierre2: "21:00" },
      domingoFeriados: { apertura: "08:00", cierre: "13:00" },
    },
  },
];

/** Devuelve si la sucursal está abierta ahora */
export function estaAbierta(sucursal: Sucursal): boolean {
  const now = new Date();
  const day = now.getDay(); // 0=dom, 1=lun...6=sab
  const time = now.getHours() * 100 + now.getMinutes();

  const parse = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 100 + m;
  };

  if (day === 0) {
    // Domingo / feriado
    const { apertura, cierre } = sucursal.horario.domingoFeriados;
    return time >= parse(apertura) && time < parse(cierre);
  }

  // Lunes a Sábado
  const h = sucursal.horario.lunesSabado;
  return (
    (time >= parse(h.apertura1) && time < parse(h.cierre1)) ||
    (time >= parse(h.apertura2) && time < parse(h.cierre2))
  );
}

export function getGoogleMapsUrl(sucursal: Sucursal): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${sucursal.lat},${sucursal.lng}`;
}

export function getWhatsAppUrl(sucursal: Sucursal): string {
  const phone = sucursal.telefono.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}`;
}
