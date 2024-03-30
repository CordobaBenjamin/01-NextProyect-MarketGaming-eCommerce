import productsBaseData from "./dataBase_products";
import Image from 'next/image';
import {Product, ProductCardProps} from '../interfaces'

  const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => (
    <section className="productosdiv" id={product.categoria}>

        <div className="imgDiv">
            <img src={product.img} alt={product.nombre} id={product.arreglo} />
        </div>

        <div className="priceticket">
            <h5>{product.nombre}</h5>
            <h5>${product.precio}</h5>
            <button onClick={() => onAddToCart(product)} className="buttonshop">
            Sumar al carrito
            </button>
        </div>

    </section>
  );

  export default ProductCard;