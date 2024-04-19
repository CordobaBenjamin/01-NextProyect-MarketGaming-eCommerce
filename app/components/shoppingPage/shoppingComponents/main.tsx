'use client'
import React, { useState } from 'react';
import ProductCardGeneration from '.././scripts/productsCards';
import { ProductProps } from '../interfaces';
import productsBaseData from '../scripts/dataBase_products';

const Product_div: React.FC = () => {
  // Inicializa el estado con la base de datos de productos
  const [products, setProducts] = useState<ProductProps[]>(productsBaseData);

  const handleAddToCart = (product: ProductProps) => {
    // Aquí manejarías la lógica para añadir un producto al carrito
    console.log('Añadir al carrito:', product.nombre);
  };

  return (
    <div id="product_div">
      {/* Iterar sobre los productos en el estado y crear una tarjeta de producto para cada uno */}
      {products.map(product => (
        <ProductCardGeneration
          key={product.id}
          categoria={product.categoria}
          nombre={product.nombre}
          precio={product.precio}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default Product_div;



