export interface Product {
    stock:number,
    categoria:string,
    img:string,
    nombre:string,
    precio:number,
    arreglo?:string,
    id:number,
  };

 export interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
  };
