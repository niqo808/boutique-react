import { Sucursal, estaAbierta } from "@/data/sucursales";
import { MapPin, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SucursalDrawerProps {
  sucursales: Sucursal[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (id: number) => void;
  selectedId: number | null;
}

export default function SucursalDrawer({
  sucursales,
  isOpen,
  onToggle,
  onSelect,
  selectedId,
}: SucursalDrawerProps) {
  return (
    <>
      {/* Toggle button - always visible */}
      <button
        onClick={onToggle}
        className="fixed z-[900] top-24 left-4 glass rounded-lg px-3 py-2 flex items-center gap-2 hover:shadow-lg transition-all font-body text-sm md:hidden"
      >
        <MapPin size={16} className="text-primary" />
        <span className="text-foreground/80">Sucursales</span>
      </button>

      {/* Desktop sidebar */}
      <div
        className={`hidden md:flex flex-col fixed z-[800] top-16 left-0 h-[calc(100vh-4rem)] w-80 glass border-r border-border/30 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-border/30">
          <h2 className="font-display text-lg font-bold text-foreground">Nuestras Sucursales</h2>
          <p className="text-xs font-body text-muted-foreground mt-1">
            6 locales en zona norte del Gran Buenos Aires
          </p>
        </div>
        <div className="flex-1 overflow-y-auto">
          {sucursales.map((s) => (
            <SucursalListItem
              key={s.id}
              sucursal={s}
              isSelected={selectedId === s.id}
              onClick={() => onSelect(s.id)}
            />
          ))}
        </div>
      </div>

      {/* Desktop toggle */}
      <button
        onClick={onToggle}
        className={`hidden md:flex fixed z-[850] top-1/2 -translate-y-1/2 glass rounded-r-lg px-1.5 py-4 items-center transition-all duration-300 ${
          isOpen ? "left-80" : "left-0"
        }`}
      >
        <ChevronRight
          size={16}
          className={`text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mobile bottom sheet */}
      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-[850] bg-foreground/20 backdrop-blur-sm"
            onClick={onToggle}
          />
          <div className="md:hidden fixed z-[900] bottom-0 left-0 right-0 glass rounded-t-2xl max-h-[60vh] animate-slide-in-bottom flex flex-col">
            <div className="flex justify-center pt-3 pb-1 shrink-0 cursor-grab" onClick={onToggle}>
              <div className="w-12 h-1.5 rounded-full bg-muted-foreground/40" />
            </div>
            <div className="p-4 border-b border-border/30 shrink-0">
              <h2 className="font-display text-lg font-bold text-foreground">Sucursales</h2>
            </div>
            <div className="overflow-y-auto flex-1 overscroll-contain touch-pan-y">
              {sucursales.map((s) => (
                <SucursalListItem
                  key={s.id}
                  sucursal={s}
                  isSelected={selectedId === s.id}
                  onClick={() => {
                    onSelect(s.id);
                    onToggle();
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

function SucursalListItem({
  sucursal,
  isSelected,
  onClick,
}: {
  sucursal: Sucursal;
  isSelected: boolean;
  onClick: () => void;
}) {
  const abierta = estaAbierta(sucursal);
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors border-b border-border/20 hover:bg-muted/50 ${
        isSelected ? "bg-primary/10 border-l-2 border-l-primary" : ""
      }`}
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <MapPin size={14} className="text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display text-sm font-semibold text-foreground truncate">
          {sucursal.nombre}
        </p>
        <p className="text-xs font-body text-muted-foreground truncate">
          {sucursal.zona} — {sucursal.direccion}
        </p>
      </div>
      <Badge
        className={`shrink-0 text-[10px] font-body ${
          abierta
            ? "bg-green-500/20 text-green-700 border-green-500/30"
            : "bg-destructive/20 text-destructive border-destructive/30"
        }`}
      >
        {abierta ? "Abierto" : "Cerrado"}
      </Badge>
    </button>
  );
}
