// ProductsContainer.tsx
import React, { useState } from 'react';
import ProductCard from '.././scripts/productsCards';
import { Product, ProductCardProps } from '../interfaces';

const ProductsContainer: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    // Aquí manejarías la lógica para añadir un producto al carrito
    console.log('Añadir al carrito:', product.nombre);
  };

  return (
    <div id="product_div">
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductsContainer;



