import React from 'react';
import useCart from './useCart'; // Importar el hook useCart
import productsBaseData from "./dataBase_products";
import { ProductProps } from '../interfaces';

const ProductList = () => (
  <>
    {productsBaseData.map(({ id, nombre, categoria, precio, img }) => (
      <ProductCardGeneration
        key={id}
        categoria={categoria}
        nombre={nombre}
        precio={precio}
        img={img}
      />
    ))}
  </>
);

const ProductCardGeneration: React.FC<ProductProps> = ({ categoria, nombre, precio, img }) => {
  const { addToCart } = useCart(); // Obtener la función addToCart del hook useCart

  return (
    <>
      <section className="productosdiv" id={categoria}>
        <div className="imgDiv">
          <img src={img} alt={nombre} />
        </div>
        
        <div className="priceticket">
          <h5>{nombre}</h5>
          <h5>${precio}</h5>
          <button onClick={() => addToCart(precio)}>Añadir al Carrito</button>
        </div>
      </section>
    </>
  );
};

export default ProductCardGeneration;


 