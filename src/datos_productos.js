const productos = [
  { 
    id: 1, 
    nombre: "Andador Plegable", 
    descripcion: "Andador ligero y plegable, ideal para el hogar y viajes.", 
    imagen: "/Imagenes/Andador1.jpg", 
    precioVenta: "70.000 ARS", 
    precioAlquiler: "5.000 ARS/mes", 
    tipo: "Venta / Alquiler" 
  },
  { 
    id: 2, 
    nombre: "Cama Ortopédica Eléctrica", 
    descripcion: "Cama hospitalaria con control remoto para ajuste de posición.", 
    imagen: "/Imagenes/Cama1.jpg", 
    precioVenta: "150.000 ARS", 
    precioAlquiler: "12.000 ARS/mes", 
    tipo: "Venta / Alquiler" 
  },
  { 
    id: 3, 
    nombre: "Silla de Ruedas Plegable", 
    descripcion: "Silla de ruedas estándar, compacta y fácil de transportar.", 
    imagen: "/Imagenes/Silla1.jpg", 
    precioVenta: "80.000 ARS", 
    precioAlquiler: "6.000 ARS/mes", 
    tipo: "Venta / Alquiler" 
  },
  { 
    id: 4, 
    nombre: "Muletas Regulables", 
    descripcion: "Muletas de aluminio, altura ajustable para mayor comodidad.", 
    imagen: "/Imagenes/Muletas1.jpg", 
    precioVenta: "15.000 ARS", 
    precioAlquiler: "1.500 ARS/mes", 
    tipo: "Venta / Alquiler" 
  },
  // Para los productos del 5 al 50, usamos el logo o una imagen genérica por ahora
  ...Array.from({ length: 46 }, (_, i) => ({
    id: i + 5,
    nombre: `Producto Ortopédico ${i + 5}`,
    descripcion: "Descripción en proceso para catálogo de Ortopedia Amichi.",
    imagen: "/Imagenes/Logo1.png", // Imagen temporal
    precioVenta: "Consultar",
    precioAlquiler: "Consultar",
    tipo: "Venta"
  }))
];

export { productos };