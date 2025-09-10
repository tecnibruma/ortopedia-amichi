import React, { useState } from 'react';
import './App.css'; // Mantenemos los estilos en el mismo archivo para simplificar
import { productos } from './datos_productos.js'; // Importamos la lista de productos

const Catalogo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <section className="products-section">
      <h2 className="section-title">Nuestro Catálogo de Productos</h2>
      {productos.map((producto) => (
        <div key={producto.id} className="product-item-wrapper">
          <div className="product-item-inner">
            {/* Cara frontal del flip box */}
            <div className="product-item-front">
              <img src={producto.imagen} alt={producto.nombre} />
              <h3>{producto.nombre}</h3>
            </div>
            {/* Cara trasera del flip box */}
            <div className="product-item-back">
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              {producto.precioVenta && <p><strong>Precio Venta:</strong> {producto.precioVenta}</p>}
              {producto.precioAlquiler && <p><strong>Precio Alquiler:</strong> {producto.precioAlquiler}</p>}
              <button
                className="view-details-button"
                onClick={() => handleViewDetails(producto)}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal para ver detalles del producto */}
      {modalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setModalOpen(false)}>
              &times;
            </button>
            <h2>{selectedProduct.nombre}</h2>
            <img src={selectedProduct.imagen} alt={selectedProduct.nombre} className="modal-image" />
            <p>{selectedProduct.descripcion}</p>
            {selectedProduct.precioVenta && <p><strong>Precio Venta:</strong> {selectedProduct.precioVenta}</p>}
            {selectedProduct.precioAlquiler && <p><strong>Precio Alquiler:</strong> {selectedProduct.precioAlquiler}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Catalogo;
