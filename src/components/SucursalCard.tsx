import { Sucursal, estaAbierta, getGoogleMapsUrl, getWhatsAppUrl } from "@/data/sucursales";
import { X, Phone, Mail, Clock, MapPin, MessageCircle, Navigation, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SucursalCardProps {
  sucursal: Sucursal;
  onClose: () => void;
}

export default function SucursalCard({ sucursal, onClose }: SucursalCardProps) {
  const [slideIndex, setSlideIndex] = useState(0);
  const abierta = estaAbierta(sucursal);

  const prevSlide = () => setSlideIndex((i) => (i === 0 ? sucursal.imagenes.length - 1 : i - 1));
  const nextSlide = () => setSlideIndex((i) => (i === sucursal.imagenes.length - 1 ? 0 : i + 1));

  return (
    <div className="glass rounded-xl overflow-hidden animate-scale-in w-[340px] max-w-[90vw] max-h-[85vh] overflow-y-auto">
      {/* Image slider */}
      <div className="relative h-40 bg-muted">
        <img
          src={sucursal.imagenes[slideIndex]}
          alt={`${sucursal.nombre} imagen ${slideIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {sucursal.imagenes.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm rounded-full p-1 hover:bg-background/80 transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/60 backdrop-blur-sm rounded-full p-1 hover:bg-background/80 transition"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {sucursal.imagenes.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === slideIndex ? "bg-secondary w-3" : "bg-background/60"
              }`}
            />
          ))}
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-background/60 backdrop-blur-sm rounded-full p-1 hover:bg-background/80 transition"
        >
          <X size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title + status */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground leading-tight">
              {sucursal.nombre}
            </h3>
            <p className="text-sm text-muted-foreground font-body flex items-center gap-1 mt-0.5">
              <MapPin size={12} />
              {sucursal.zona} — {sucursal.direccion}
            </p>
          </div>
          <Badge
            className={`shrink-0 text-xs font-body ${
              abierta
                ? "bg-green-500/20 text-green-700 border-green-500/30"
                : "bg-destructive/20 text-destructive border-destructive/30"
            }`}
          >
            {abierta ? "Abierto" : "Cerrado"}
          </Badge>
        </div>

        {/* Contact */}
        <div className="space-y-1.5 text-sm font-body text-foreground/80">
          <a href={`tel:${sucursal.telefono}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} className="text-secondary" />
            {sucursal.telefono}
          </a>
          <a href={`mailto:${sucursal.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} className="text-secondary" />
            {sucursal.email}
          </a>
        </div>

        {/* Schedule */}
        <div className="text-xs font-body text-muted-foreground space-y-0.5">
          <div className="flex items-center gap-1.5 mb-1">
            <Clock size={12} className="text-secondary" />
            <span className="font-semibold text-foreground/70">Horarios</span>
          </div>
          <p>Lun–Sáb: 8:00–13:00 / 17:00–21:00</p>
          <p>Dom y Feriados: 8:00–13:00</p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-1">
          <Button
            size="sm"
            className="flex-1 font-body text-xs"
            onClick={() => window.open(getGoogleMapsUrl(sucursal), "_blank")}
          >
            <Navigation size={14} />
            Cómo llegar
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 font-body text-xs border-green-600/40 text-green-700 hover:bg-green-50"
            onClick={() => window.open(getWhatsAppUrl(sucursal), "_blank")}
          >
            <MessageCircle size={14} />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
