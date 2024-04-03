import productsBaseData from "./dataBase_products";
import {ProductProps, ProductCardProps} from '../interfaces'

 
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

const ProductCardGeneration: React.FC<ProductProps> = ({ categoria, nombre, precio, img }) => (
  <>
      <section className="productosdiv" id={categoria}>

        <div className="imgDiv">
          <img src={img} alt={nombre} />
        </div>
        
        <div className="priceticket">
          <h5>{nombre}</h5>
          <h5>${precio}</h5>
        </div>

      </section>
  </> 
);

export default ProductCardGeneration;



  // const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart })
  // <button onClick={() => onAddToCart(product)} className="buttonshop">
  // Sumar al carrito
  // </button>