import { useState } from "react";
import Header from "@/components/Header";
import MapView from "@/components/MapView";
import SucursalDrawer from "@/components/SucursalDrawer";
import SucursalCard from "@/components/SucursalCard";
import { sucursales } from "@/data/sucursales";

const Index = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(true);

  const selectedSucursal = sucursales.find((s) => s.id === selectedId) || null;

  const handleSelect = (id: number) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />

      <div className="relative flex-1">
        {/* Map fills remaining space */}
        <MapView
          sucursales={sucursales}
          selectedId={selectedId}
          onMarkerClick={handleSelect}
        />

        {/* Drawer */}
        <SucursalDrawer
          sucursales={sucursales}
          isOpen={drawerOpen}
          onToggle={() => setDrawerOpen(!drawerOpen)}
          onSelect={handleSelect}
          selectedId={selectedId}
        />

        {/* Floating card */}
        {selectedSucursal && (
          <div className="fixed z-[900] bottom-4 right-4 md:top-24 md:bottom-auto">
            <SucursalCard
              sucursal={selectedSucursal}
              onClose={() => setSelectedId(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
