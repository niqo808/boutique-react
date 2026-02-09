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
    lunesViernes: { apertura1: string; cierre1: string; apertura2: string; cierre2: string };
    sabado: { apertura: string; cierre: string };
    domingo: { apertura: string; cierre: string };
  };
}

export const sucursales: Sucursal[] = [
  {
    id: 1,
    nombre: "Casa Central",
    zona: "Villa Rosa",
    direccion: "Esquina Moreno y Sarmiento",
    lat: -34.4166,
    lng: -58.8715,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Parking", "Wi-Fi"],
    imagenes: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    horario: {
      lunesViernes: { apertura1: "08:00", cierre1: "13:00", apertura2: "16:30", cierre2: "21:00" },
      sabado: { apertura: "08:00", cierre: "21:00" },
      domingo: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 2,
    nombre: "Sucursal II",
    zona: "Villa de Mayo",
    direccion: "Eva Perón 4505",
    lat: -34.5000,
    lng: -58.6833,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery"],
    imagenes: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    horario: {
      lunesViernes: { apertura1: "08:00", cierre1: "13:00", apertura2: "16:30", cierre2: "21:00" },
      sabado: { apertura: "08:00", cierre: "21:00" },
      domingo: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 3,
    nombre: "Sucursal III",
    zona: "Villa Rosa",
    direccion: "Esquina Almirante Brown y Descalzi",
    lat: -34.4180,
    lng: -58.8730,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Wi-Fi"],
    imagenes: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    horario: {
      lunesViernes: { apertura1: "08:00", cierre1: "13:00", apertura2: "16:30", cierre2: "21:00" },
      sabado: { apertura: "08:00", cierre: "21:00" },
      domingo: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 4,
    nombre: "Sucursal IV",
    zona: "Adolfo Sourdeaux",
    direccion: "Derqui 1242",
    lat: -34.5000,
    lng: -58.6600,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Parking"],
    imagenes: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    horario: {
      lunesViernes: { apertura1: "08:00", cierre1: "13:00", apertura2: "16:30", cierre2: "21:00" },
      sabado: { apertura: "08:00", cierre: "21:00" },
      domingo: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 5,
    nombre: "Sucursal V",
    zona: "Matheu",
    direccion: "San Martín 262",
    lat: -34.3818,
    lng: -58.8251,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Wi-Fi"],
    imagenes: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    horario: {
      lunesViernes: { apertura1: "08:00", cierre1: "13:00", apertura2: "16:30", cierre2: "21:00" },
      sabado: { apertura: "08:00", cierre: "21:00" },
      domingo: { apertura: "08:00", cierre: "13:00" },
    },
  },
  {
    id: 6,
    nombre: "Sucursal VI",
    zona: "Don Torcuato",
    direccion: "Triunvirato 1596, esquina Chile",
    lat: -34.4887,
    lng: -58.6266,
    telefono: "+54 9 11 6161-4015",
    email: "info@boutiquelapaz.com",
    servicios: ["Venta minorista", "Delivery", "Parking", "Wi-Fi"],
    imagenes: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    horario: {
      lunesViernes: { apertura1: "08:00", cierre1: "13:00", apertura2: "16:30", cierre2: "21:00" },
      sabado: { apertura: "08:00", cierre: "21:00" },
      domingo: { apertura: "08:00", cierre: "13:00" },
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
    // Domingo
    const { apertura, cierre } = sucursal.horario.domingo;
    return time >= parse(apertura) && time < parse(cierre);
  }

  if (day === 6) {
    // Sábado
    const { apertura, cierre } = sucursal.horario.sabado;
    return time >= parse(apertura) && time < parse(cierre);
  }

  // Lunes a Viernes
  const h = sucursal.horario.lunesViernes;
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
