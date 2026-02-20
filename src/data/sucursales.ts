import centralImg from "@/assets/sucursales/central.jpeg";
import central2Img from "@/assets/sucursales/central2.jpeg";
import central3Img from "@/assets/sucursales/central3.jpg";
import central4Img from "@/assets/sucursales/central4.jpg";
import central5Img from "@/assets/sucursales/central5.jpg";
import central6Img from "@/assets/sucursales/central6.jpg";
import villarosaImg from "@/assets/sucursales/villarosa.jpeg";
import villarosa2Img from "@/assets/sucursales/villarosa2.jpg";
import villarosa3Img from "@/assets/sucursales/villarosa3.jpg";
import villademayoImg from "@/assets/sucursales/villademayo.jpeg";
import villademayo2Img from "@/assets/sucursales/villademayo2.jpg";
import villademayo3Img from "@/assets/sucursales/villademayo3.jpg";
import sourdeauxImg from "@/assets/sucursales/sourdeaux.jpeg";
import sourdeaux2Img from "@/assets/sucursales/sourdeaux2.jpg";
import matheu from "@/assets/sucursales/matheu.jpg";
import matheu2 from "@/assets/sucursales/matheu2.jpg";
import matheu3 from "@/assets/sucursales/matheu3.jpg";
import matheu4 from "@/assets/sucursales/matheu4.jpg";
import carne1Img from "@/assets/sucursales/carne1.jpeg";
import carne2Img from "@/assets/sucursales/carne2.jpeg";
import carne3Img from "@/assets/sucursales/carne3.jpeg";
import carne4Img from "@/assets/sucursales/carne4.jpeg";
import carne5Img from "@/assets/sucursales/carne5.jpg";
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
  imagenes: string[];
  googleMapsUrl: string;
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
    imagenes: [centralImg, central2Img, central3Img, central4Img, central5Img, central6Img],
    googleMapsUrl: "https://www.google.com/maps/place/Carnicer%C3%ADa+La+Paz+-+Casa+Central/@-34.4186246,-58.8732451,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc9de91e6d796b:0xed7560e7f8f73136!8m2!3d-34.4186246!4d-58.8706702!16s%2Fg%2F11lm2mtt0n?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
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
    imagenes: [villademayoImg, villademayo2Img, villademayo3Img, carne5Img],
    googleMapsUrl: "https://www.google.com/maps/place/Carniceria+La+Paz+-+Sucursal+Villa+de+Mayo/@-34.4974252,-58.6781299,17z/data=!3m1!4b1!4m6!3m5!1s0x95bca34c1ee7904b:0x26f8bf2cb561aa58!8m2!3d-34.4974252!4d-58.675555!16s%2Fg%2F11v61d_68d?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
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
    imagenes: [villarosaImg, villarosa2Img, villarosa3Img],
    googleMapsUrl: "https://www.google.com/maps/place/Carniceria+La+Paz+-+Sucursal+Villa+Rosa/@-34.4117426,-58.8775645,17z/data=!3m1!4b1!4m6!3m5!1s0x95bc9d37c079a12f:0xf11dfbeae735d1cf!8m2!3d-34.4117426!4d-58.8749896!16s%2Fg%2F11w85sbp4q?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
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
    imagenes: [sourdeauxImg, sourdeaux2Img, mostradorImg],
    googleMapsUrl: "https://www.google.com/maps/place/Carnicer%C3%ADa+La+Paz+(Sucursal+A.+Sourdeaux)/@-34.5031819,-58.6696498,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcbd1c0407d4c5:0x13e5b38ace7daea6!8m2!3d-34.5031819!4d-58.6670749!16s%2Fg%2F11lnjn3n6y?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D",
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
    imagenes: [matheu, matheu3, matheu2, matheu4],
    googleMapsUrl: "https://maps.app.goo.gl/EyRb6zBLcAofkWka6",
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
  return sucursal.googleMapsUrl;
}

export function getWhatsAppUrl(sucursal: Sucursal): string {
  const phone = sucursal.telefono.replace(/[^0-9]/g, "");
  return `https://wa.me/${phone}`;
}
