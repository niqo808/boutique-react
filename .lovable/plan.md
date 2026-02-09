

## Página de Sucursales — Boutique de Carnes La Paz 🥩

### Visión General
Página interactiva de sucursales con mapa OpenStreetMap (Leaflet) y drawer colapsable lateral, integrada en un sitio mayor con header/navbar. Paleta de colores: granate, dorado, crema y blanco con efectos glassmorphism.

---

### 1. Header y Navegación Global
- Navbar superior con logo "La Paz" y links a secciones futuras (Inicio, Productos, Sucursales, Contacto)
- Paleta granate/dorado aplicada al header
- Responsive con menú hamburguesa en móvil

### 2. Mapa Interactivo a Pantalla Completa
- Mapa OpenStreetMap con `react-leaflet` ocupando toda la pantalla debajo del header
- Vista inicial centrada para mostrar las 6 sucursales en el Gran Buenos Aires
- 6 marcadores SVG personalizados en color granate/dorado con animación suave al aparecer
- Al hacer clic en un marcador, se abre la tarjeta flotante de esa sucursal

### 3. Drawer Colapsable de Sucursales
- Panel lateral que se abre/cierra con un botón flotante sobre el mapa
- Lista de las 6 sucursales con nombre y zona
- Al tocar una sucursal: el mapa hace zoom y se centra en ella, y se abre su tarjeta flotante
- En móvil, el drawer se muestra desde abajo (bottom sheet)

### 4. Tarjeta Flotante de Sucursal
Tarjeta con efecto glassmorphism que muestra:
- **Nombre** completo de la sucursal
- **Zona y dirección** completa
- **Teléfono**: +54 9 11 6161-4015
- **Email**: info@boutiquelapaz.com
- **Horario** con indicador visual Abierto/Cerrado según la hora actual del usuario:
  - Lunes a Viernes: 8:00–13:00 y 16:30–21:00
  - Sábado: 8:00–21:00
  - Domingo: 8:00–13:00
- **Galería deslizante** de imágenes (slider con controles, usando imágenes placeholder por ahora)
- **Etiquetas de servicios**: Venta minorista, Delivery, Parking, Wi-Fi
- **Botones de acción**:
  - "Cómo llegar" → abre Google Maps con la ubicación
  - "WhatsApp" → abre chat de WhatsApp al número de la sucursal
- Animaciones suaves de entrada/salida

### 5. Datos de las 6 Sucursales
Todas las sucursales configuradas con sus datos reales:
1. Casa Central – Villa Rosa (Moreno y Sarmiento)
2. Sucursal II – Villa de Mayo (Eva Perón 4505)
3. Sucursal III – Villa Rosa (Almirante Brown y Descalzi)
4. Sucursal IV – Adolfo Sourdeaux (Derqui 1242)
5. Sucursal V – Matheu (San Martín 262)
6. Sucursal VI – Don Torcuato (Triunvirato 1596, esq. Chile)

### 6. Diseño Responsive
- Desktop: mapa completo + drawer lateral colapsable
- Tablet: mapa completo + drawer más compacto
- Móvil: mapa pantalla completa + drawer desde abajo (bottom sheet) + tarjetas adaptadas al ancho

### 7. Paleta y Estilo Visual
- Granate (#722F37), Dorado (#C5A55A), Crema (#FFF8E7), Blanco
- Glassmorphism en tarjetas y drawer (fondo translúcido, blur, bordes suaves)
- Tipografía elegante y sombras sutiles
- Animaciones suaves en marcadores, tarjetas y transiciones

