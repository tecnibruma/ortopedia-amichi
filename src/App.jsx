import React, { useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carruse


// Estilos CSS integrados
const styles = `
:root {
  --primary-color: #A30000;
  --secondary-color: #7A0000;
  --accent-color: #B3B3B3;
  --text-color: #333;
  --light-bg: #F0F0F0;
  --dark-bg: #E0E0E0;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --white: #FFFFFF;
}

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--light-bg);
  color: var(--text-color);
  line-height: 1.6;
}

.header {
  background-color: var(--primary-color);
  color: var(--white);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow);
  flex-wrap: wrap;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 1rem;
  border-radius: 50%;
}

.company-name {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.navbar .nav-link {
  color: var(--white);
  text-decoration: none;
  margin: 0 0.5rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar .nav-link:hover {
  color: var(--accent-color);
}

.hero-section {
  padding: 4rem 2rem;
  background-color: var(--white);
  text-align: center;
  border-bottom: 2px solid var(--dark-bg);
  background-image: url('https://i.ibb.co/6P2T8b5/deposito-ortopedia.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--text-color);
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title, .hero-subtitle, .hero-description {
  color: var(--text-color);
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero-description {
  max-width: 800px;
  margin: 0 auto;
}

.products-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
}

@media (min-width: 768px) {
  .products-preview {
    flex-direction: row;
    justify-content: center;
  }
}

.product-item {
  background-color: var(--white);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  text-align: center;
  width: 90%;
  max-width: 250px;
}

.product-item img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
  height: 200px;
  object-fit: cover;
}

.view-details-button {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-details-button:hover {
  background-color: var(--secondary-color);
}

.contact-section {
  padding: 4rem 2rem;
  background-color: var(--white);
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  gap: 1rem;
}

.contact-form label {
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.contact-form button {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: var(--secondary-color);
}

.footer {
  text-align: center;
  padding: 1rem;
  background-color: var(--primary-color);
  color: var(--white);
}

.whatsapp-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
}

.whatsapp-button img {
  width: 30px;
  height: 30px;
}

/* Estilos para el efecto flip box */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

/* Ajuste para 3 columnas en pantallas grandes */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.product-item-wrapper {
  perspective: 1000px;
  width: 100%;
  height: 400px; /* Altura aumentada para mejor visualización */
  cursor: pointer;
}

.product-item-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  overflow: hidden;
}

.product-item-wrapper:hover .product-item-inner {
  transform: rotateY(180deg);
}

.product-item-front, .product-item-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

.product-item-front {
  background-color: var(--white);
}

.product-item-front img {
    height: 250px; /* Altura de la imagen aumentada */
    object-fit: cover;
}

.product-item-back {
  background-color: var(--primary-color);
  color: var(--white);
  transform: rotateY(180deg);
}

.product-item-back h3 {
  margin-top: 0;
}

.product-item-back p {
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.product-item-back strong {
  font-weight: bold;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  width: 90%;
  max-width: 500px;
  position: relative;
  text-align: center;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.modal-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}
  /* Estilos adicionales para el carrusel */
.carousel-container {
    padding: 2rem 0; /* Espaciado alrededor del carrusel */
    max-width: 1200px; /* Ancho máximo para el carrusel */
    margin: 0 auto; /* Centrar el carrusel */
}

/* Ajustes para el item del producto dentro del carrusel */
.carousel-product-item {
    padding: 0 10px; /* Espacio entre los productos del carrusel */
    display: flex; /* Para centrar el contenido si es necesario */
    justify-content: center;
    align-items: center;
}

/* Modificar el estilo base del producto para que encaje mejor */
.carousel-product-item .product-item {
    width: 100%; /* Asegura que el producto ocupe el espacio disponible */
    max-width: 300px; /* Ajusta el tamaño máximo de cada producto si es necesario */
    margin: 0 auto; /* Centra el producto dentro de su slide */
    box-sizing: border-box; /* Para que el padding no desborde */
}

/* Ajustes para los indicadores del carrusel si decides mostrarlos (showIndicators={true}) */
.carousel .control-dots {
    position: relative;
    bottom: -30px; /* Ajusta la posición de los puntos */
}

.carousel .dot {
    background: var(--primary-color);
}
.carousel .dot.selected {
    background: var(--secondary-color);
}
`;

// Datos de productos
const productos = [
  { id: 1, nombre: "Andador Plegable", descripcion: "Andador ligero y plegable, ideal para el hogar y viajes.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Andador", precioVenta: "70.000 ARS", precioAlquiler: "5.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 2, nombre: "Cama Ortopédica Eléctrica", descripcion: "Cama hospitalaria con control remoto para ajuste de posición.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Cama", precioVenta: "150.000 ARS", precioAlquiler: "12.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 3, nombre: "Silla de Ruedas Plegable", descripcion: "Silla de ruedas estándar, compacta y fácil de transportar.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "80.000 ARS", precioAlquiler: "6.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 4, nombre: "Muletas Regulables", descripcion: "Muletas de aluminio, altura ajustable para mayor comodidad.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Muletas", precioVenta: "15.000 ARS", precioAlquiler: "1.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 5, nombre: "Bastón de 4 Apoyos", descripcion: "Bastón con base ancha para mayor estabilidad y soporte.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Bastón", precioVenta: "25.000 ARS", precioAlquiler: "2.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 6, nombre: "Bota Ortopédica", descripcion: "Bota de inmovilización para lesiones en el tobillo.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Bota", precioVenta: "45.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 7, nombre: "Colchón Antiescaras", descripcion: "Colchón de aire que previene la formación de úlceras por presión.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Colchón", precioVenta: "60.000 ARS", precioAlquiler: "4.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 8, nombre: "Andador con Ruedas", descripcion: "Andador con ruedas delanteras para mayor facilidad de movimiento.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Andador", precioVenta: "85.000 ARS", precioAlquiler: "6.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 9, nombre: "Barra de Seguridad para Baño", descripcion: "Barra de apoyo para brindar seguridad en el baño.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Barra", precioVenta: "20.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 10, nombre: "Silla de Ducha", descripcion: "Silla resistente al agua para usar en la ducha.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "35.000 ARS", precioAlquiler: "3.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 11, nombre: "Almohada Cervical", descripcion: "Almohada ergonómica para soporte del cuello.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Almohada", precioVenta: "18.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 12, nombre: "Correa para Hernia Inguinal", descripcion: "Soporte para hernia inguinal, ajustable y discreto.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Correa", precioVenta: "22.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 13, nombre: "Faja Sacrolumbar", descripcion: "Faja de soporte para la espalda baja.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Faja", precioVenta: "28.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 14, nombre: "Rodillera Articulada", descripcion: "Rodillera con soporte para ligamentos y articulaciones.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Rodillera", precioVenta: "30.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 15, nombre: "Tobillera Elástica", descripcion: "Tobillera de compresión para soporte deportivo.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Tobillera", precioVenta: "12.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 16, nombre: "Cabestrillo de Hombro", descripcion: "Cabestrillo para inmovilizar el brazo y hombro.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Cabestrillo", precioVenta: "16.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 17, nombre: "Silla de Traslado Plegable", descripcion: "Silla de traslado para uso en interiores.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "55.000 ARS", precioAlquiler: "4.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 18, nombre: "Elevador de Asiento de Inodoro", descripcion: "Elevador de asiento para facilitar el uso del inodoro.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Elevador", precioVenta: "20.000 ARS", precioAlquiler: "2.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 19, nombre: "Tabla de Transferencia", descripcion: "Tabla para ayudar a la transferencia entre silla y cama.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Tabla", precioVenta: "30.000 ARS", precioAlquiler: "2.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 20, nombre: "Guante Ortopédico de Compresión", descripcion: "Guante para aliviar el dolor en manos artríticas.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Guante", precioVenta: "15.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 21, nombre: "Andador con Asiento", descripcion: "Andador con asiento y ruedas, ideal para descansar.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Andador", precioVenta: "95.000 ARS", precioAlquiler: "7.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 22, nombre: "Muñequera para Túnel Carpiano", descripcion: "Muñequera con férula para inmovilización de la muñeca.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Muñequera", precioVenta: "18.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 23, nombre: "Espalda Elástica", descripcion: "Soporte de espalda con tirantes ajustables.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Espalda", precioVenta: "25.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 24, nombre: "Rodillera Elástica", descripcion: "Rodillera de compresión, ideal para soporte deportivo.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Rodillera", precioVenta: "14.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 25, nombre: "Tobillera con Gel", descripcion: "Tobillera con almohadillas de gel para aliviar el dolor.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Tobillera", precioVenta: "18.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 26, nombre: "Soporte para Pie Caído", descripcion: "Dispositivo para ayudar a levantar el pie en personas con pie caído.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Soporte", precioVenta: "35.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 27, nombre: "Silla de Baño con Ruedas", descripcion: "Silla de baño móvil para facilitar el traslado.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "60.000 ARS", precioAlquiler: "5.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 28, nombre: "Elevador de Piernas Inflable", descripcion: "Almohada inflable para elevar las piernas y mejorar la circulación.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Elevador", precioVenta: "15.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 29, nombre: "Planta de Pies para Fascitis Plantar", descripcion: "Plantillas de silicona para aliviar el dolor en los talones.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Plantilla", precioVenta: "10.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 30, nombre: "Rodillera de Neopreno", descripcion: "Rodillera de compresión para soporte deportivo.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Rodillera", precioVenta: "18.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 31, nombre: "Andador con Ruedas y Frenos", descripcion: "Andador con ruedas y frenos de mano para mayor seguridad.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Andador", precioVenta: "95.000 ARS", precioAlquiler: "7.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 32, nombre: "Cama Hospitalaria Manual", descripcion: "Cama de hospital con manivela para ajustar la posición.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Cama", precioVenta: "120.000 ARS", precioAlquiler: "10.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 33, nombre: "Silla de Ruedas de Lujo", descripcion: "Silla de ruedas con reposabrazos acolchados y reposapiés ajustables.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "110.000 ARS", precioAlquiler: "8.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 34, nombre: "Muletas Axilares", descripcion: "Muletas con apoyo en la axila para mayor comodidad.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Muletas", precioVenta: "18.000 ARS", precioAlquiler: "2.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 35, nombre: "Bastón Plegable", descripcion: "Bastón que se pliega en 4 partes para un fácil almacenamiento.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Bastón", precioVenta: "28.000 ARS", precioAlquiler: "2.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 36, nombre: "Rodillera con Anillo de Silicona", descripcion: "Rodillera con anillo de silicona para estabilizar la rótula.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Rodillera", precioVenta: "25.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 37, nombre: "Tobillera con Compresión", descripcion: "Tobillera de compresión para soporte y protección.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Tobillera", precioVenta: "16.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 38, nombre: "Cabestrillo de Brazo Acolchado", descripcion: "Cabestrillo con almohadilla para el cuello para mayor confort.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Cabestrillo", precioAlquiler: null, tipo: "Venta" },
  { id: 39, nombre: "Silla de Ruedas para Baño", descripcion: "Silla de ruedas para uso en el baño, con frenos y reposapiés.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "65.000 ARS", precioAlquiler: "5.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 40, nombre: "Almohada para Coccis", descripcion: "Almohada ergonómica para aliviar la presión en el coxis.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Almohada", precioVenta: "22.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 41, nombre: "Silla de Ducha Plegable", descripcion: "Silla de ducha que se pliega para un fácil almacenamiento.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "40.000 ARS", precioAlquiler: "3.500 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 42, nombre: "Collarín Cervical Blando", descripcion: "Collarín de espuma para soporte suave del cuello.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Collarín", precioVenta: "10.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 43, nombre: "Faja Post-operatoria Abdominal", descripcion: "Faja de compresión para recuperación post-quirúrgica.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Faja", precioVenta: "35.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 44, nombre: "Rodillera con Bisagras Laterales", descripcion: "Rodillera con bisagras para un soporte más rígido.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Rodillera", precioVenta: "45.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 45, nombre: "Tobillera con Cordones", descripcion: "Tobillera con cordones para un ajuste personalizado.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Tobillera", precioVenta: "25.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 46, nombre: "Ortesis para Dedos de la Mano", descripcion: "Dispositivo para inmovilizar y proteger los dedos.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Ortesis", precioVenta: "12.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 47, nombre: "Cama Eléctrica 3 Posiciones", descripcion: "Cama con tres motores para ajustar altura, cabecera y pies.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Cama", precioVenta: "200.000 ARS", precioAlquiler: "15.000 ARS/mes", tipo: "Venta / Alquiler" },
  { id: 48, nombre: "Silla de Ruedas Deportiva", descripcion: "Silla de ruedas ligera y resistente para actividades deportivas.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Silla", precioVenta: "180.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 49, nombre: "Bastón para Ciegos", descripcion: "Bastón de fibra de carbono para personas con discapacidad visual.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Bastón", precioVenta: "20.000 ARS", precioAlquiler: null, tipo: "Venta" },
  { id: 50, nombre: "Kit de Fisioterapia para Mano", descripcion: "Kit con pelotas de ejercicio y bandas de resistencia.", imagen: "https://via.placeholder.com/200/A30000/FFFFFF?text=Kit", precioVenta: "15.000 ARS", precioAlquiler: null, tipo: "Venta" },
];

// Componente Producto
const Product = ({ product, onViewDetails }) => (
  <div className="product-item">
    <img src={product.imagen} alt={product.nombre} />
    <h3>{product.nombre}</h3>
    <p>{product.descripcion}</p>
    <button className="view-details-button" onClick={() => onViewDetails(product)}>
      Ver Detalles
    </button>
  </div>
);

// Componente Catálogo
const Catalogo = ({ productos, onViewDetails }) => (
  <section className="products-section">
    <h2 className="section-title">Nuestro Catálogo de Productos</h2>
    <div className="product-grid">
      {productos.map((producto) => (
        <div key={producto.id} className="product-item-wrapper" onClick={() => onViewDetails(producto)}>
          <div className="product-item-inner">
            <div className="product-item-front">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
            </div>
            <div className="product-item-back">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              {producto.precioVenta && <p><strong>Precio Venta:</strong> {producto.precioVenta}</p>}
              {producto.precioAlquiler && <p><strong>Precio Alquiler:</strong> {producto.precioAlquiler}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Componente principal de la aplicación
function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <style>{styles}</style>
      <header className="header">
        <div className="logo-container">
          <img src="https://placehold.co/50x50/A30000/FFFFFF?text=Logo" alt="Logo Ortopedia" className="logo" />
          <h1 className="company-name">Ortopedia Amichi</h1>
        </div>
        <nav className="navbar">
          <a href="#" className="nav-link" onClick={() => setPaginaActual('inicio')}>Inicio</a>
          <a href="#" className="nav-link" onClick={() => setPaginaActual('catalogo')}>Catálogo</a>
          <a href="#" className="nav-link" onClick={() => setPaginaActual('contacto')}>Contacto</a>
        </nav>
      </header>

      {paginaActual === 'inicio' && (
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Ortopedia Amichi</h1>
            <h2 className="hero-subtitle">Facilitamos el acceso a productos ortopédicos de calidad a través de un servicio de alquiler y venta.</h2>
            <p className="hero-description">
              Ayudamos a personas con movilidad reducida a recuperar su independencia y mejorar su calidad de vida. Ofrecemos una amplia gama de equipos como andadores, sillas de ruedas, muletas, camas ortopédicas y más. Nuestro servicio incluye atención personalizada y la posibilidad de alquiler por períodos flexibles.
            </p>
          </div>
          <div className="carousel-container"> {/* Añadimos un contenedor para los estilos */}
 <div className="carousel-container">
 <Carousel
  showArrows={true}
  showStatus={false}
  showThumbs={false}
  infiniteLoop={true}
  autoPlay={true}
  interval={5000} // Puedes ajustar el tiempo
>
  {productos.map((producto) => (
    <div key={producto.id}>
      <Product product={producto} onViewDetails={handleViewDetails} />
    </div>
  ))}
</Carousel>
</div>
</div>
        </section>
      )}

      {paginaActual === 'catalogo' && (
        <Catalogo productos={productos} onViewDetails={handleViewDetails} />
      )}

      {paginaActual === 'contacto' && (
        <section className="contact-section">
          <h2>Contáctanos</h2>
          <form className="contact-form">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </section>
      )}

      {modalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            <div className="modal-details">
              <img src={selectedProduct.imagen} alt={selectedProduct.nombre} className="modal-image" />
              <h3>{selectedProduct.nombre}</h3>
              <p>{selectedProduct.descripcion}</p>
              {selectedProduct.precioVenta && <p><strong>Precio Venta:</strong> {selectedProduct.precioVenta}</p>}
              {selectedProduct.precioAlquiler && <p><strong>Precio Alquiler:</strong> {selectedProduct.precioAlquiler}</p>}
            </div>
          </div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2025 Ortopedia Amichi. Todos los derechos reservados.</p>
      </footer>

      <a href="https://wa.me/5491134932244" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </>
  );
}

export default App;
